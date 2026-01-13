import { Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }

  async goToAddCandidate() {
    await this.page.getByRole('button', { name: 'Añadir Nuevo Candidato' }).click();
  }

  async goToPositions() {
    await this.page.getByRole('button', { name: 'Ir a Posiciones' }).click();
  }
}
