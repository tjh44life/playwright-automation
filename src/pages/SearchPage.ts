import { Page } from '@playwright/test';

export class SearchPage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto('https://playwright.dev', {
      waitUntil: 'domcontentloaded',
    });
  }

  async openSearch() {
    const searchButton = this.page.getByRole('button', { name: /search/i });

    await searchButton.waitFor({ state: 'visible' });
    await searchButton.click();

    await this.page.waitForTimeout(2000);
  }

  async search(term: string) {
    const searchBox = this.page.getByPlaceholder('Search docs');

    await searchBox.waitFor({ state: 'visible', timeout: 10000 });
    await searchBox.fill(term);
  }

  async extractSearchResults() {
    const links = await this.page.locator('a').all();

    const results: { title: string; link: string }[] = [];

    for (const link of links) {
      const title = await link.innerText();
      const href = await link.getAttribute('href');

      if (!title || !href) continue;
      if (href.startsWith('#') || href.startsWith('javascript')) continue;

      const fullUrl = href.startsWith('http')
        ? href
        : `https://playwright.dev${href}`;

      results.push({
        title: title.trim(),
        link: fullUrl,
      });
    }

    return results;
  }
}
``