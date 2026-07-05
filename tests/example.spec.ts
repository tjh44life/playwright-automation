import { test, expect } from '@playwright/test';
import { SearchPage } from '../src/pages/SearchPage';
import fs from 'fs';

test('extract, filter, and save search results', async ({ page }) => {
  const searchPage = new SearchPage(page);

  await searchPage.open();
  await searchPage.openSearch();
  await searchPage.search('Playwright');

  const results = await searchPage.extractSearchResults();

  console.log('All results:', results);

  // ✅ Step 1: Filter
  const filtered = results.filter(r =>
    r.title.toLowerCase().includes('test')
  );

  // ✅ Step 2: Limit
  const topResults = filtered.slice(0, 5);

  console.log('Filtered results:', topResults);

  // ✅ Step 3: Ensure folder exists
  if (!fs.existsSync('data')) {
    fs.mkdirSync('data');
  }

  // ✅ Save file
  fs.writeFileSync(
    'data/filtered-results.json',
    JSON.stringify(topResults, null, 2)
  );

  expect(topResults.length).toBeGreaterThan(0);
});