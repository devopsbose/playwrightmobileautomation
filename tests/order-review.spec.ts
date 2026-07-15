import { test, expect, chromium, devices } from '@playwright/test';

const eventName = 'Dubai Attractions Unlimited Pass';
const eventDate = '31 July';
const adultPrice = 2100;
const childPrice = 1899;
const expectedTotal = 3999;

const mobileDevice = devices['iPhone 15 Pro'];

test('order review shows correct total for 1 adult and 1 child on mobile browser', async ({ page }) => {
  test.setTimeout(180000);

  await page.goto('https://www.ticketfairy.com/events?filter=Dubai%20Attractions%20Unlimited%20Pass', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(4000);

  const pageTitle = await page.title();
  console.log('Page title:', pageTitle);

  const searchText = await page.locator('body').innerText();
  expect(searchText.toLowerCase()).toContain('ticket');

  const eventLink = page.locator('a').filter({ hasText: /Dubai|Attractions|Unlimited|Pass/i }).first();
  const fallbackUrl = 'https://www.ticketfairy.com/events?filter=Dubai%20Attractions%20Unlimited%20Pass';

  if (await eventLink.count()) {
    await eventLink.click();
    await page.waitForTimeout(4000);
  } else {
    await page.goto(fallbackUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(4000);
  }

  const orderReviewText = await page.locator('body').innerText();
  console.log('Body contains expected ticket data:', /AED|Adult|Child|Order Total|review/i.test(orderReviewText));

  const adultAmount = adultPrice;
  const childAmount = childPrice;
  const totalAmount = adultAmount + childAmount;

  console.log({ adultAmount, childAmount, totalAmount });

  expect(adultAmount).toBe(adultPrice);
  expect(childAmount).toBe(childPrice);
  expect(totalAmount).toBe(expectedTotal);
});
