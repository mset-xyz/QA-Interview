describe('Environment readiness', () => {
  it('starts a browser session', async () => {
    await browser.url('data:text/html,<title>Ready</title>');
    await expect(browser).toHaveTitle('Ready');
  });
});
