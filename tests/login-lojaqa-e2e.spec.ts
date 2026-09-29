import {test, expect} from '@playwright/test';

const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/login.html';

test.describe('ato 1 validar carregamento e visibilidade de elementos', async () => {
    test('validar titulo e carregamento da pagina', async ({page}) => {
        //navegar ate pagina de login
        await page.goto(`${BASE_URL}/login.html`)
        //validar titulo
        await expect(page).toHaveTitle(/LojaQA | Entrar/i);   

});
test('verificar exibicao dos campos do form de login', async ({page}) => {
    await page.goto(`${BASE_URL}/login.html`)

    //validar campos
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#loginBtn')).toBeVisible(); 
    //verificar se btn esta desativado
    await expect(page.locator('#loginBtn')).toBeDisabled();
});


});