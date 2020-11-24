const {When, Then} = require('cucumber');
const SearchPage = require('../pageobjects/searchPage').default;
const {expect} = require("chai");

When(/^I add (.*) filter$/, function(filter) {
    SearchPage.addSearchFilterByName(filter);
});

Then(/^Filter (.*) is active$/,  function(filter) {
    const button = SearchPage.returnFilterByName(filter);
    expect(button.getAttribute('aria-pressed')).to.equal('true');
});

Then(/^Field search result is equal (.*)$/, function(searchQuery) {
    expect(SearchPage.searchResult.getText()).to.equal(SearchPage.returnSearchResultString(searchQuery));
});
