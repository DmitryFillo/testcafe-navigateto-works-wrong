import { ClientFunction } from 'testcafe';

const getHref = ClientFunction(() => window.location.href);

fixture `Response time affects t.navigateTo()`
  .page `http://devexpress.github.io/testcafe/example`;

test('Fast response', async (t) => {
  const href = await getHref();
  await t.navigateTo('https://www.google.com/');
  await t.expect(getHref()).notEql(href);
});

test('Slow response', async (t) => {
  const href = await getHref();
  await t.navigateTo('https://genie.fillo.me/slow');
  await t.expect(getHref()).notEql(href);
});
