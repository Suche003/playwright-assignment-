import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1, // run sequentially to watch properly
  reporter: 'html',
  use: {
    headless: false,       // visible browser
    viewport: { width: 1280, height: 720 },
    trace: 'on-first-retry',
    launchOptions: {
      slowMo: 2000,        // slows down typing, clicks, navigation
    },

    browserName: 'chromium',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',  // Use real Google Chrome
      },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
