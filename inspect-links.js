const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto('https://www.ticketfairy.com/events?filter=Dubai%20Attractions%20Unlimited%20Pass', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(5000);
  const texts = await page.locator('a').evaluateAll((els) => els.map((el) => el.textContent || '').map((t) => t.trim()).filter(Boolean));
  const matches = texts.filter((t) => /dubai|attractions|unlimited|pass/i.test(t));
  console.log('matches', matches.slice(0, 80));
  const urls = await page.locator('a').evaluateAll((els) => els.map((el) => ({ text: (el.textContent || '').trim(), href: el.getAttribute('href') })).filter((x) => x.text && x.href));
  console.log('sample', JSON.stringify(urls.slice(0, 80), null, 2));
  await browser.close();
})();
