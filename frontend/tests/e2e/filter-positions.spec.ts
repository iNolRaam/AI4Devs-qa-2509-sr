import { test, expect } from '@playwright/test';
import { DashboardPage } from './poms/dashboard.page';
import { PositionsPage } from './poms/positions.page';

test.describe('Filter Positions Flow', () => {
  test('should allow a recruiter to filter positions by title', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const positionsPage = new PositionsPage(page);

    // Navigate to the dashboard
    await dashboardPage.goto();

    // Click the link to go to positions
    await dashboardPage.goToPositions();

    // Verify navigation to the positions page
    await expect(page).toHaveURL('/positions');
    await expect(page.getByRole('heading', { name: 'Posiciones' })).toBeVisible();

    // Wait for positions to load
    await expect(positionsPage.getCardByTitle('Senior Full-Stack Engineer')).toBeVisible();

    // Filter by title
    await positionsPage.searchByTitle('Data Scientist');

    // Verify that the correct position is visible
    await expect(positionsPage.getCardByTitle('Data Scientist')).toBeVisible();

    // Verify that the other position is not visible
    await expect(positionsPage.getCardByTitle('Senior Full-Stack Engineer')).not.toBeVisible();
  });
});
