// @ts-check
const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
  // maximum time a test can run for
  timeout: 50 * 1000,
  expect: {
    timeout: 5000
  },
 
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
 
  use: {
    browserName: 'chromium',
    
  }
});