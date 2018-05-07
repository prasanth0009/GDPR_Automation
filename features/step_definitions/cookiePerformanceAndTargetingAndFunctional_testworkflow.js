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

    Given(/^Performance And Target And Functional: User is on landing page$/, () => {
        const landingpage = client.page.landingpage();
         client.url(landingpage.url).waitForElementVisible('body', 3000);
         return landingpage;
    });

    When(/^Performance And Target And Functional: User is on cookie popup$/, () => {
        const cookiePopup = client.page.cookie()
        cookiePopup.getCookie();
        client.pause(2000)
        return cookiePopup
    });

    Then(/^Performance And Target And Functional: User is on setting button$/, () => {
        const cookieSettings = client.page.cookieSettings()
        cookieSettings.settingsCookie();
        client.pause(2000)
        return cookieSettings
    });

    Given(/^Performance And Target And Functional: User clicks on Performance Cookie tab$/, () => {
        const cookieOptions = client.page.cookieOptions()
        cookieOptions.optionTab('Performance Cookies');
        client.pause(2000)
        return cookieOptions
    });

    When(/^Performance And Target And Functional: User activate Performance Cookie$/, () => {
        const cookieActivateOption = client.page.cookieActivateOption()
        cookieActivateOption.activateBtn();
        client.pause(2000)
        return cookieActivateOption
    });


    Given(/^Performance And Target And Functional: User clicks on Target Cookie tab$/, () => {
        const cookieOptions = client.page.cookieOptions()
        cookieOptions.optionTab('Targeting Cookies');
        client.pause(2000)
        return cookieOptions
    });

    When(/^Performance And Target And Functional: User activate Target Cookie$/, () => {
        const cookieActivateOption = client.page.cookieActivateOption()
        cookieActivateOption.activateBtn();
        client.pause(2000)
        return cookieActivateOption
    });


    Given(/^Performance And Target And Functional: User clicks on Functional Cookie tab$/, () => {
        const cookieOptions = client.page.cookieOptions()
        cookieOptions.optionTab('Functional Cookies');
        client.pause(2000)
        return cookieOptions
    });

    When(/^Performance And Target And Functional: User activate Functional Cookie$/, () => {
        const cookieActivateOption = client.page.cookieActivateOption()
        cookieActivateOption.activateBtn();
        client.pause(2000)
        return cookieActivateOption
    });


    Given(/^Performance And Target And Functional: User clicks on Save Settings Button$/, () => {
        const cookieSaveSettings = client.page.cookieSaveSettings()
        cookieSaveSettings.saveSettings();
        client.pause(2000)
        return cookieSaveSettings
    });


    When(/^Performance And Target And Functional: Reload the page to get updated cookies$/, () => {
        const reloadCookie = client.page.reloadCookie()
        reloadCookie.reloadPage();
        client.pause(2000)
        return reloadCookie
    });


    Then(/^Performance And Target And Functional: Get Cookie values after Accept$/, () => {   
        const cookieValidate = client.page.cookieValidate();                
        cookieValidate.validateCookie('LastVisit | OptanonConsent | OptanonAlertBoxClosed')
        client.pause(2000)
        return cookieValidate       
    });


    Given(/^Performance And Target And Functional: User close langing page$/, () => {
        const windowClose = client.page.closepage()
        windowClose.windowClose();
        client.pause(2000)
        return windowClose
    });

});