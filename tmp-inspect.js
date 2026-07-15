const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto('https://www.ticketfairy.com/events?filter=Dubai%20Attractions%20Unlimited%20Pass', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(5000);
  console.log('title:', await page.title());
  const allText = await page.locator('body').innerText();
  console.log(allText.slice(0, 5000));
  const links = await page.locator('a').evaluateAll((els) => els.map((el) => ({ text: el.textContent?.trim(), href: el.getAttribute('href') })).filter(x => x.text && x.href));
  console.log('LINKS', JSON.stringify(links.slice(0, 80), null, 2));
  await browser.close();
})();
