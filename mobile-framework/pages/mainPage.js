const Page = require('./page');

class MainPage extends Page {
    get searchButton () { return $('.toggle-button-search-panel button') }
    get searchField () {return $('//input[contains(@id, "searchInput")]')}
    get menuButton () {return $('//span[text()="Menu"]/ancestor::button')}

    openApp() {
        return super.open(browser.config.baseUrl);
    }

    searchItem(value) {
        this.searchField.waitForDisplayed();
        this.searchField.setValue(value + '\uE007');
    }

    openMenu() {
        this.menuButton.waitForDisplayed();
        this.menuButton.click();
    }
}

exports.default = new MainPage();