
const Page = require('./page');

class ExamplesPage extends Page {

    get contributeArticle () {
        return $('#contribute');
    }

    get h1Text () {
        return $('h1');
    }

    open () {
        return super.open('/docs/api/#examples');
    }
}

module.exports = new ExamplesPage();
