const Page = require('./page');

class MainPage extends Page {
    get searchButton () { return $('.toggle-button-search-panel button') }
    get searchField () {return $('#searchInput')}

    openApp() {
        return super.open('https://www.boden.co.uk/');
    }

    searchItem(value) {
        this.searchButton.waitForClickable();
        this.searchButton.click();
        this.searchField.waitForDisplayed();
        this.searchField.clearValue();
        this.searchField.addValue(value);
        browser.keys('\uE007');
    }
}

exports.default = new MainPage();
