import {test, expect} from '@playwright/test';
import {LoginPage} from "../pages/login.page";

test.describe('Login Page', () => {
    let loginPage;
    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });
    test('Has title', async ({page}) => {
        await expect(page).toHaveTitle('Project-1');
    });
    test('Title Label is "Iniciar sesión"', async ({page}) => {
        await expect(loginPage.titleLabel).toContainText('Iniciar sesión');
    });
});
