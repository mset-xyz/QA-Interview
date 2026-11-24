const headless = process.env.HEADED !== '1';
const chromeOptions = {
  args: [
    '--window-size=1440,900',
    ...(headless ? ['--headless=new'] : []),
    ...(process.env.CODESPACES === 'true' ? ['--no-sandbox', '--disable-dev-shm-usage'] : [])
  ],
  ...(process.env.CHROME_BIN ? { binary: process.env.CHROME_BIN } : {})
};

export const config = {
  runner: 'local',
  specs: ['./tests/ui/**/*.spec.js'],
  maxInstances: 1,
  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': chromeOptions,
    ...(process.env.CHROMEDRIVER_BIN ? {
      'wdio:chromedriverOptions': { binary: process.env.CHROMEDRIVER_BIN }
    } : {})
  }],
  logLevel: 'warn',
  waitforTimeout: 15000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 1,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: { ui: 'bdd', timeout: 60000 },
  injectGlobals: true
};
