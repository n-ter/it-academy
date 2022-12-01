const Page = require('./page');

class MainPage extends Page {

    get btnSearchClick () {
        return $('.DocSearch-Button-Container');
    }

    get inputSearch () {
        return $('.DocSearch-Input');
    }

    get btnDocSearchClick () {
        return $('#docsearch-item-0');
    }
    get btnStylesClick () {
        return $('.toggleButton_gllP');
    }

    async search (searchValue) {
        await this.btnSearchClick.click();
        await this.inputSearch.setValue(searchValue);
        await browser.pause(3000)
        await this.btnDocSearchClick.click();

    }

    async switchStyles(){
        await this.btnStylesClick.click();
    }
    get pHeroText () {
        return $('.hero__subtitle')
    }

    open () {
        return super.open('/');
    }
}

module.exports = new MainPage();
