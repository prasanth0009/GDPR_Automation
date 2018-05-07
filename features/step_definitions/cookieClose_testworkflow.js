const { client } = require('nightwatch-cucumber');
const {session} = require('express-session');
const { defineSupportCode } = require('cucumber');


//Add Required Pages
const landingpage = require('../../pages/landingpage');
const cookieClose = require('../../pages/cookieClose');
const reloadCookie = require('../../pages/reloadCookie');
const cookieValidate = require('../../pages/cookieValidate'); 
const cookieAccept = require('../../pages/cookieAccept'); 

  
defineSupportCode(({ After, Given, Then, When, setDefaultTimeout }) => {

    setDefaultTimeout(-1);

    Given(/^CookieNoConsent: User is on landing page$/, () => {
        const landingpage = client.page.landingpage();
         client.url(landingpage.url).waitForElementVisible('body', 3000);
         return landingpage;
    });

    When(/^CookieNoConsent: User is on cookie popup$/, () => {
        const cookiePopup = client.page.cookie()
        cookiePopup.getCookie();
        client.pause(2000)
        return cookiePopup
    });

    Then(/^CookieNoConsent: Close the Cookie Popup$/, () => {   
        const cookieClose = client.page.cookieClose()
        cookieClose.closeCookie();
        client.pause(2000)
        return cookieClose
    });


    Given(/^CookieNoConsent: Reload the page to get updated cookies$/, () => {
        const landingpage = client.page.landingpage();
         client.url(landingpage.url).waitForElementVisible('body', 3000);
         return landingpage;
    });


    When(/^CookieNoConsent: Get Cookie values after close$/, () => {   
        const cookieValidate = client.page.cookieValidate();                
        cookieValidate.validateCookie('JSESSIONID | OptanonConsent | OptanonAlertBoxClosed')
        client.pause(2000)
        return cookieValidate       
    });


    Then(/^CookieNoConsent: User is on cookie popup for accept cookies$/, () => {
        const cookiePopup = client.page.cookie()
        cookiePopup.getCookie();
        client.pause(2000)
        return cookiePopup
    });


    Then(/^CookieNoConsent: User close langing page$/, () => {
        const windowClose = client.page.closepage()
        windowClose.windowClose();
        client.pause(2000)
        return windowClose
    });
    
});