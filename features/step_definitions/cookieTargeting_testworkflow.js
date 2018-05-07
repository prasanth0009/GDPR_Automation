const { client } = require('nightwatch-cucumber');
const {session} = require('express-session');
const { defineSupportCode } = require('cucumber');


//Add Required Pages
const landingpage = require('../../pages/landingpage');
const reloadCookie = require('../../pages/reloadCookie');
const cookieSettings = require('../../pages/cookieSettings'); 
const cookieSaveSettings = require('../../pages/cookieSaveSettings'); 
const cookieOptions = require('../../pages/cookieOptions'); 
const cookieActivateOption = require('../../pages/cookieActivateOption'); 
const cookieValidate = require('../../pages/cookieValidate'); 
const windowClose = require('../../pages/closepage'); 

  

defineSupportCode(({ After, Given, Then, When, setDefaultTimeout }) => {

    setDefaultTimeout(-1);

    Given(/^Cookie Targeting: User is on landing page$/, () => {
        const landingpage = client.page.landingpage();
         client.url(landingpage.url).waitForElementVisible('body', 3000);
         return landingpage;
    });

    When(/^Cookie Targeting: User is on cookie popup$/, () => {
        const cookiePopup = client.page.cookie()
        cookiePopup.getCookie();
        client.pause(2000)
        return cookiePopup
    });

    Then(/^Cookie Targeting: User is on setting button$/, () => {
        const cookieSettings = client.page.cookieSettings()
        cookieSettings.settingsCookie();
        client.pause(2000)
        return cookieSettings
    });

    Given(/^Cookie Targeting: User clicks on Targeting Cookie tab$/, () => {
        const cookieOptions = client.page.cookieOptions()
        cookieOptions.optionTab('Targeting Cookies');
        client.pause(2000)
        return cookieOptions
    });

    When(/^Cookie Targeting: User activate Targeting Cookie$/, () => {
        const cookieActivateOption = client.page.cookieActivateOption()
        cookieActivateOption.activateBtn();
        client.pause(1000)
        return cookieActivateOption
    });


    Given(/^Cookie Targeting: User clicks on Save Settings Button$/, () => {
        const cookieSaveSettings = client.page.cookieSaveSettings()
        cookieSaveSettings.saveSettings();
        client.pause(2000)
        return cookieSaveSettings
    });


    When(/^Cookie Targeting: Reload the page to get updated cookies$/, () => {
        const reloadCookie = client.page.reloadCookie()
        reloadCookie.reloadPage();
        client.pause(2000)
        return reloadCookie
    });


    Then(/^Cookie Targeting: Get Cookie values after Accept$/, () => {   
        const cookieValidate = client.page.cookieValidate();                
        cookieValidate.validateThirdPartyCookie(['OptanonConsent', 'OptanonAlertBoxClosed', 'YSC', 'APISID'])
        client.pause(2000)
        return cookieValidate       
    });


    Given(/^Cookie Targeting: User close langing page$/, () => {
        const windowClose = client.page.closepage()
        windowClose.windowClose();
        client.pause(2000)
        return windowClose
    });

});