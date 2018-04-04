module.exports = function () {
    this.Given(/^Go to the route "([^"]*)"$/, function (url) {
        browser.url('http://localhost:8081/' + url);
        return browser.isVisible(homePage.tabs);
    });

    this.Then(/^total no of items on the page are "(\d+)"/, function (totalItems) {
        return browser.isVisible(common.shopListItem);
        var expectedCount = browser.elements(common.noOfItems).value.length;
        return expect(expectedCount.toString()).to.equal(totalItems.toString());
    });

    this.Then(/^I click item (\d+)/, function (itemNumber) {
        var itemId = parseInt(itemNumber - 1);
        var element =  browser.elements('.grid a').value[itemId];
        return browser.elementIdClick(element.ELEMENT);
    });

    this.Then(/^I click "(.*)" link/, function (tabName) {
        return browser.elements(homePage.tabs).value.filter(function (links) {
            if(browser.elementIdText(links.ELEMENT).value === tabName) {
                browser.elementIdClick(links.ELEMENT);
            }
        })
    });

    this.Then(/^I select "(.*)" from the "(.*)" dropdown/, function (fieldName, value) {
        return browser.elements('label').value.filter(function (labels) {
            if(browser.elementIdText(labels.ELEMENT).value === fieldName) {
                var selectBox = browser.element('#'+fieldName.toLowerCase()+'Select');
                return selectBox.selectByValue(value);
            }
        });
    });

    this.Then(/^I should see "(\d+)" items in shopping Cart/, function (items) {
        var expectedCount = browser.getText(cart.itemsInBasket);
        return expect(expectedCount).to.equal(items);
    });

};
