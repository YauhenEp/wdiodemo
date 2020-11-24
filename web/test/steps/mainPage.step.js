const {Given, When} = require('cucumber');
const MainPage = require('../pageobjects/mainPage').default;

Given(/^Go to applications (.*)$/, function (url) {
    MainPage.openApp(url);
});

When(/^I search (.*)$/, {timeout:30000}, function(value) {
    MainPage.searchItem(value);
});


