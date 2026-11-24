import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';

test('local HTTP environment is ready', async () => {
  const server = createServer((req, res) => res.end('ready'));
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    const res = await fetch(`http://127.0.0.1:${server.address().port}`);
    assert.equal(await res.text(), 'ready');
  } finally {
    await new Promise((resolve, reject) => server.close(err => err ? reject(err) : resolve()));
  }
});
