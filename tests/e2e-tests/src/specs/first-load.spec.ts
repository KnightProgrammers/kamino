import {test, expect} from '@playwright/test';
import {LoginPage} from "../pages/login.page";

test.describe('First Load Website', () => {
    test('Login is the default page', async ({browser}) => {
        const page = await browser.newPage();
        await page.goto('/')
        console.log(page.url());
        await expect(page).toHaveURL('/');
        const loginPage = new LoginPage(page);
        await expect(loginPage.titleLabel).toContainText('Iniciar sesión');
    });
});
