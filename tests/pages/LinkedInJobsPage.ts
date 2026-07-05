import { expect, type Page } from '@playwright/test';

export class LinkedInJobsPage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto('https://www.linkedin.com', {
      waitUntil: 'domcontentloaded',
    });

    await this.page.waitForTimeout(5000);
  }

  async searchJobs(jobTitle: string) {
    const jobInput = this.page.locator('#text-input-what');

    await jobInput.waitFor({ state: 'visible', timeout: 20000 });
    await jobInput.fill(jobTitle);
    await this.page.getByRole('button', { name: /find jobs/i }).click();
  }

  async expectResultsPage() {
    await expect(this.page).toHaveURL(/jobs/);
  }
}
