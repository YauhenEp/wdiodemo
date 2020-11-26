const {When, Then} = require('cucumber');
const SearchPage = require('../pageobjects/searchPage').default;
const {expect} = require("chai");

When(/^I set filter to "(.*)"$/, function(filter) {
    SearchPage.addSearchFilterByName(filter);
});

Then(/^Filter should be set to "(.*)"$/,  function(filter) {
    const button = SearchPage.returnFilterByName(filter);
    expect(button.getAttribute('aria-pressed')).to.equal('true');
});

Then(/^Field search result should contain "(.*)"$/, function(searchQuery) {
    expect(SearchPage.searchResult.getText()).to.equal(SearchPage.returnSearchResultString(searchQuery));
});
