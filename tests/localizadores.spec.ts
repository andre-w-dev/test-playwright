import { test, expect } from '@playwright/test';

const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login';

test.describe('Testes de Localizadores e Painel', () => {

  test.beforeEach(async ({ page }) => {
    // Navegar até a página de login antes de cada teste
    await page.goto(`${BASE_URL}/login.html`);
  });

  test('deve fazer login como admin e validar exibição da lista usuários', async ({ page }) => {
    // Fazer login como adm
    await page.fill('#email', 'admin@system.com');
    await page.fill('#password', 'AdminPassword123');
    await page.click('#loginBtn');
    
    await expect(page).toHaveURL(/painel\.html/);
    await expect(page.locator('#roleBadge')).toHaveText('ADMIN');
    await expect(page.locator('#adminUsersList')).toBeVisible();
  });
  test('validar listagem e filtros de produtos', async ({ page }) => { 
      // Fazer login como adm
    await page.fill('#email', 'admin@system.com');
    await page.fill('#password', 'AdminPassword123');
    await page.click('#loginBtn');
    await expect(page).toHaveURL(/painel\.html/)
    //acessar a aba de produtos
    await page.getByRole('button', { name: /Produtos/ }).click();
    const searchInput = page.locator('#productSearch');
    await expect(searchInput).toBeVisible();
    const productCategoryFilter = page.locator('#productCategoryFilter');
    await expect(productCategoryFilter).toBeVisible();
    
    const produtoCard = page.locator('#adminProductsList').getByText('Mouse Óptico Atlas', { exact: true });
    await expect(produtoCard).toBeVisible();
  });


});