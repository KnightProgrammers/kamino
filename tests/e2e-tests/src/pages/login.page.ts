import {expect, type Locator, type Page} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly titleLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.locator('h1');
    }

    async goto() {
        await this.page.goto('/');
    }
}
