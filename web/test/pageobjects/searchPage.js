const Page = require('./page');

class SearchPage extends Page {
    get searchResult() {return $('.has-results-notification')}
    returnFilterByName (filter) {
        return $(`//*[@id=\'productGridPrimaryFilterPortal\']//span[contains(text(),'${filter}')]/ancestor::button`)
    }

    addSearchFilterByName(filterName) {
        let filter = this.returnFilterByName(filterName);
        filter.waitForDisplayed();
        filter.click();
    }

    returnSearchResultString(searchRequest) {
        return `Search results for "${searchRequest}"`
    }
}

exports.default = new SearchPage();
