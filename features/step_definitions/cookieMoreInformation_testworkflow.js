const { client } = require('nightwatch-cucumber');
const {session} = require('express-session');
const { defineSupportCode } = require('cucumber');


//Add Required Pages
const landingpage = require('../../pages/landingpage');
const cookieSettings = require('../../pages/cookieSettings'); 
const cookieSaveSettings = require('../../pages/cookieSaveSettings'); 
const cookieOptions = require('../../pages/cookieOptions'); 
const cookieActivateOption = require('../../pages/cookieActivateOption'); 
const switchTab = require('../../pages/switchTab'); 
const windowClose = require('../../pages/closepage'); 


  
defineSupportCode(({ After, Given, Then, When, setDefaultTimeout }) => {

    setDefaultTimeout(-1);

    Given(/^Cookie More Information: User is on landing page$/, () => {
        const landingpage = client.page.landingpage();
         client.url(landingpage.url).waitForElementVisible('body', 3000);
         return landingpage;
    });

    When(/^Cookie More Information: User is on cookie popup$/, () => {
        const cookiePopup = client.page.cookie()
        cookiePopup.getCookie();
        client.pause(2000)
        return cookiePopup
    });

    Then(/^Cookie More Information: User is on setting button$/, () => {
        const cookieSettings = client.page.cookieSettings()
        cookieSettings.settingsCookie();
        client.pause(2000)
        return cookieSettings
    });

    Given(/^Cookie More Information: User clicks on More Information tab$/, () => {
        const cookieOptions = client.page.cookieOptions()
        cookieOptions.optionTab('More Information');
        client.pause(2000)
        return cookieOptions
    });

    When(/^Cookie More Information: Switch back to Initial Page$/, () => {
        const switchTab = client.page.switchTab()
        switchTab.tabSwitch();
        client.pause(1000)
        return switchTab
    });


    Given(/^Cookie More Information: User clicks on Save Settings Button$/, () => {
        const cookieSaveSettings = client.page.cookieSaveSettings()
        cookieSaveSettings.saveSettings();
        client.pause(2000)
        return cookieSaveSettings
    });
    


    Then(/^Cookie More Information: User close langing page$/, () => {
        const windowClose = client.page.closepage()
        windowClose.windowClose();
        client.pause(2000)
        return windowClose
    });

});