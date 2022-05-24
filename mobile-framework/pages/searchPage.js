const Page = require('./page');

class SearchPage extends Page {
    get searchResultString() {return $('.has-results-notification')};
    get filterButton() {return $('//button[contains(@class, "product-grid-filter-bar-toggle")]')};

    getFilterByName(filterValue) {
        return $(`//div[@class="product-grid-filter-item-options-list-wrapper"]//button[contains(., "${filterValue}")]`)
    }

    getEnabledFilters(filterCategory) {
        const filters = $$(`//div[@class="product-grid-filter-list-scroll-wrapper"]//button[contains(., "${filterCategory}")]/ancestor::li` +
        `/div[@class="product-grid-filter-item-options-list-wrapper"]//button[@class="product-option-button is-selected" and @aria-pressed="true"]`);
        return filters.map(filter => filter.getText());
    }

    getFilterCategoryByName(filterCategory) {
        return $(`//div[@class="product-grid-filter-list-scroll-wrapper"]//button[contains(., "${filterCategory}")]`)
    }

    openFilterSettings() {
        const filterButton = this.filterButton;
        filterButton.waitForDisplayed();
        filterButton.click();
    }

    closeFilterSettings() {
        const filterButton = this.filterButton;
        filterButton.waitForDisplayed();
        filterButton.click();
    }

    openFilterCategory(filterCategory) {
        const filterCategoryItem = this.getFilterCategoryByName(filterCategory);
        filterCategoryItem.waitForDisplayed();
        filterCategoryItem.click();
    }

    getFilterValue(filterCategory){
        this.openFilterSettings();
        this.openFilterCategory(filterCategory);
        const filterValue = this.getEnabledFilters(filterCategory);
        this.closeFilterSettings();
        return filterValue;
    }

    addSearchFilter(filterCategory, filterValue) {
        this.openFilterSettings();
        this.openFilterCategory(filterCategory);

        const filterItem = this.getFilterByName(filterValue);
        filterItem.waitForDisplayed();
        filterItem.click();
        
        this.closeFilterSettings();
    }
}

exports.default = new SearchPage();