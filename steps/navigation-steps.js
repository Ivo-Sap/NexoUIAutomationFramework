const { When, Then } = require('@cucumber/cucumber');
const { container } = require('../hooks/hooks');

When('user navigates to Google Finance {string}', async function (pair) {
    const navigationActions = container.get('navigationActions');
    await navigationActions.navigateToPage(`${container.get('config').baseUrl}/${pair}`);
    await navigationActions.rejectCookies();
});

Then('page with title {string} is displayed', async function (title) {
    await container.get('navigationAsserts').assertPageTitleContains(title);
});
