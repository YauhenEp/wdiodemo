const {Given, When} = require('cucumber');
const MainPage = require('../pageobjects/mainPage').default;

Given(/^Open application$/, function () {
    MainPage.openApp('https://www-uk-dx.bodendev.com/');
});

When(/^I search for "(.*)"$/, {timeout:30000}, function(value) {
    MainPage.searchItem(value);
});


