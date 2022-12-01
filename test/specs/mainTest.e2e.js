const MainPage = require('../pageobjects/main.page');
const ExamplesPage = require('../pageobjects/examples.page');

describe('My main tests', () => {
    it('use search field - search Contribute', async () => {
        await MainPage.open();
        await MainPage.search('examples');
        await expect(ExamplesPage.contributeArticle).toBeExisting();
        await expect(ExamplesPage.contributeArticle).toHaveTextContaining(
            'Contribute');
    });
    it('open Examples Page - find h1', async () => {
        await ExamplesPage.open();
        await expect(ExamplesPage.h1Text).toBeExisting();
        await expect(ExamplesPage.h1Text).toHaveTextContaining(
            'Introduction');
    });
    it('switch styles mainPage', async () => {
        await MainPage.open();
        await MainPage.switchStyles();
        const color = (await MainPage.pHeroText.getCSSProperty('color')).parsed.hex
        await expect(color).toEqual('#ffffff')
    });
});


