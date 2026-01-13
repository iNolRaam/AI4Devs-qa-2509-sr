import { test, expect } from '@playwright/test';

test.describe('Create Candidate Flow', () => {
  test('should allow a recruiter to create a new candidate', async ({ page }) => {
    // Navigate to the dashboard
    await page.goto('/');

    // Click the link to add a new candidate
    await page.getByRole('button', { name: 'Añadir Nuevo Candidato' }).click();

    // Verify navigation to the add candidate page
    await expect(page).toHaveURL('/add-candidate');
    await expect(page.getByRole('heading', { name: 'Agregar Candidato' })).toBeVisible();

    // Fill out the candidate form
    const uniqueEmail = `test${Date.now()}@example.com`;
    await page.getByLabel('Nombre').fill('John');
    await page.getByLabel('Apellido').fill('Doe');
    await page.getByLabel('Correo Electrónico').fill(uniqueEmail);
    await page.getByLabel('Teléfono').fill('612345678');
    await page.getByLabel('Dirección').fill('123 Main St, Anytown, USA');

    // Submit the form
    await page.getByRole('button', { name: 'Enviar' }).click();

    // Verify the success message
    await expect(page.getByText('Candidato añadido con éxito')).toBeVisible();
  });
});
