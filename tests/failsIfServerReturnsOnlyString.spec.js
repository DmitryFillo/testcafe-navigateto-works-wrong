import { ClientFunction } from 'testcafe';

const getHref = ClientFunction(() => window.location.href);

fixture `Test fails if server returns only string`
  .page `http://devexpress.github.io/testcafe/example`;

test('Fast response', async (t) => {
  const href = await getHref();
  await t.navigateTo('https://genie.fillo.me/fast');
  await t.expect(getHref()).notEql(href);
});
