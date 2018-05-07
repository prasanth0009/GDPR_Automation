const { client } = require('nightwatch-cucumber');
const {session} = require('express-session');
const { defineSupportCode } = require('cucumber');


//Add Required Pages
const landingpage = require('../../pages/landingpage');
const cookie = require('../../pages/cookie');
const cookieClose = require('../../pages/cookieClose');
const reloadCookie = require('../../pages/reloadCookie');
   
const cookieValidate = require('../../pages/cookieValidate'); 
const cookieAccept = require('../../pages/cookieAccept'); 
const windowClose = require('../../pages/closepage'); 
  
defineSupportCode(({ After, Given, Then, When, setDefaultTimeout }) => {

    setDefaultTimeout(-1);

    Given(/^Cookie All Consent: User is on landing page$/, () => {
        const landingpage = client.page.landingpage();
         client.url(landingpage.url).waitForElementVisible('body', 3000);
         return landingpage;
    });

    When(/^Cookie All Consent: User is on cookie popup$/, () => {
        const cookiePopup = client.page.cookie()
        cookiePopup.getCookie();
        client.pause(2000)
        return cookiePopup
    });

    Then(/^Cookie All Consent: Accept all cookies$/, () => {
        const cookieAccept = client.page.cookieAccept()
        cookieAccept.acceptCookie();
        client.pause(2000)
        return cookieAccept
    });


    Given(/^Cookie All Consent: Reload the page to get updated cookies$/, () => {
        const reloadCookie = client.page.reloadCookie()
        reloadCookie.reloadPage();
        client.pause(2000)
        return reloadCookie
    });


    When(/^Cookie All Consent: Get Cookie values after Accept$/, () => {   
        const cookieValidate = client.page.cookieValidate();                
        cookieValidate.validateCookie('JSESSIONID | OptanonConsent | OptanonAlertBoxClosed')
        client.pause(2000)
        return cookieValidate       
    });


    Then(/^Cookie All Consent: User close langing page$/, () => {
        const windowClose = client.page.closepage()
        windowClose.windowClose();
        client.pause(2000)
        return windowClose
    });

});