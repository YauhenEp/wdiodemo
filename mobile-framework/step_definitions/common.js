const {Given, When, Then} = require('cucumber');
const MainPage = require('../pages/mainPage').default;
const SearchPage = require('../pages/searchPage').default;
const {expect} = require("chai");
const {localizeStepVariable} = require('../utils/helper');

Given(/^Open application$/, function () {
  MainPage.openApp();
});

When(/^I search for "(.*)"$/, function (value) {
  value = localizeStepVariable(value);
  MainPage.openMenu();
  MainPage.searchItem(value);
});

When(/^I set "(.*)" filter to "(.*)"$/, function (filterCategory, filterValue) {
  filterCategory = localizeStepVariable(filterCategory);
  filterValue = localizeStepVariable(filterValue);
  SearchPage.addSearchFilter(filterCategory, filterValue);
});

Then(/^Filter "(.*)" should be set to "(.*)"$/, function (filterCategory, expectedFilterValue) {
  filterCategory = localizeStepVariable(filterCategory);
  expectedFilterValue = localizeStepVariable(expectedFilterValue);
  const actualFilterValue = SearchPage.getFilterValue(filterCategory);
  expect(actualFilterValue[0]).to.include(expectedFilterValue);
});

Then(/^Field search result should contain "(.*)"$/, function (searchQuery) {
  searchQuery = localizeStepVariable(searchQuery);
  expect(SearchPage.searchResultString.getText()).to.include(searchQuery);
});

