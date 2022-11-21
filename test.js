const { Builder, By, Key, until } = require('selenium-webdriver');


(async function findTitle() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.manage().window().maximize();
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.getTitle().then(result => (result == "ChromeDriver - WebDriver for Chrome") ? console.log ('Title ChromeDriver successful') : console.log('Title ChromeDriver failed'));
        await driver.findElement(By.xpath('//*[@id="WDxLfe"]/ul/li[3]/div[1]/div/a')).click();
        await driver.getTitle().then(result => (result == "ChromeDriver - WebDriver for Chrome - Chrome Extensions") ? console.log ('Title Chrome Extensions successful') : console.log('Title Chrome Extensions failed'));
    } finally {
        await driver.close();
    }
})();


(async function findDriver() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.manage().window().maximize();
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.wait(until.elementLocated(By.xpath('//*[@id="atIdViewHeader"]/div/div[2]/div[1]/div[2]/div/span/span'))).click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="yDmH0d"]/div[1]/div/div[1]/div[2]/div[3]/div[2]/div/div[1]/div/div[1]/input'))).sendKeys('Driver');
        await driver.findElement(By.xpath('//*[@id="yDmH0d"]/div[1]/div/div[1]/div[2]/div[3]/div[2]/div/div[1]/div/span[1]/div[1]')).click();
        let href = await driver.wait(until.elementLocated(By.xpath('//*[@id="yDmH0d"]/div[1]/div/div[1]/div[3]/div[2]/div/div[2]/div[1]/div/a'))).getAttribute('href');
       (href.includes('driver') == true ? console.log("link contains Driver") : console.log ('link do not contains Driver'))
    } finally {
        await driver.close();
    }
})();


(async function findMobileEmulation() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.manage().window().maximize();
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.wait(until.elementLocated(By.xpath('//*[@id="WDxLfe"]/ul/li[12]/div[1]/div/a'))).click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="WDxLfe"]/ul/li[12]/div[2]/ul/li[9]/div/div/a'))).click();
        let url = await driver.getCurrentUrl();
        (url.includes('/mobile-emulation') == true ? console.log("url contains /mobile-emulation") : console.log ('url do not contains /mobile-emulation'))
    } finally {
        await driver.close();
    }
})();