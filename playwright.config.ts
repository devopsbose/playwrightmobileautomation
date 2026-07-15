import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  timeout: 180000,
  use: {
    headless: false,
    trace: 'on-first-retry',
    viewport: { width: 390, height: 844 },
    userAgent: devices['iPhone 15 Pro'].userAgent
  },
  reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]],
});
