
module.exports = class Page {

    open (path) {
        return browser.url(`https://webdriver.io${path}`)
    }
}
