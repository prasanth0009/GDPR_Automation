const { client } = require('nightwatch-cucumber');
const {session} = require('express-session');
const { defineSupportCode } = require('cucumber');


//Add Required Pages
const landingpage = require('../../pages/landingpage');
const cookie = require('../../pages/cookie');
const cookieClose = require('../../pages/cookieClose');
const reloadCookie = require('../../pages/reloadCookie');
const cookieSettings = require('../../pages/cookieSettings'); 
const cookieAllowAll = require('../../pages/cookieAllowall'); 


const cookieValidate = require('../../pages/cookieValidate'); 
const windowClose = require('../../pages/closepage'); 

// const reloadpage = require('../../pages/reloadCookie'); 

// const reloadpage = require('../../pages/reloadCookie'); 
// const allowAll = require('../../pages/cookieAllowall'); 
// const performanceCookie = require('../../pages/performance_cookie'); 
  

defineSupportCode(({ After, Given, Then, When, setDefaultTimeout }) => {

    setDefaultTimeout(-1);

    Given(/^CookieAllowAll: User is on landing page$/, () => {
        const landingpage = client.page.landingpage();
         client.url(landingpage.url).waitForElementVisible('body', 3000);
         return landingpage;
    });

    When(/^CookieAllowAll: User is on cookie popup$/, () => {
        const cookiePopup = client.page.cookie()
        cookiePopup.getCookie();
        client.pause(2000)
        return cookiePopup
    });

    Then(/^CookieAllowAll: User is on setting button$/, () => {
        const cookieSettings = client.page.cookieSettings()
        cookieSettings.settingsCookie();
        client.pause(2000)
        return cookieSettings
    });


    Given(/^CookieAllowAll: User clicks on Allow All Button$/, () => {
        const cookieAllowAll = client.page.cookieAllowAll()
        cookieAllowAll.allowAll();
        client.pause(2000)
        return cookieAllowAll
    });


    When(/^CookieAllowAll: Reload the page to get updated cookies$/, () => {
        const reloadCookie = client.page.reloadCookie()
        reloadCookie.reloadPage();
        client.pause(2000)
        return reloadCookie
    });


    Then(/^CookieAllowAll: Get Cookie values after Accept$/, () => {   
        const cookieValidate = client.page.cookieValidate();                
        cookieValidate.validateCookie('OptanonConsent | OptanonAlertBoxClosed | aam_uuid')
        client.pause(2000)
        return cookieValidate       
    });


    Then(/^CookieAllowAll: User close langing page$/, () => {
        const windowClose = client.page.closepage()
        windowClose.windowClose();
        client.pause(2000)
        return windowClose
    });

});