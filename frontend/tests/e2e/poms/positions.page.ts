import { Page, Locator } from '@playwright/test';

export class PositionsPage {
  readonly page: Page;
  readonly searchTitleInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchTitleInput = page.getByPlaceholder('Buscar por título');
  }

  async searchByTitle(title: string) {
    await this.searchTitleInput.fill(title);
  }

  getCardByTitle(title: string): Locator {
    return this.page.locator('.card-title', { hasText: title }).locator('../..');
  }
}
