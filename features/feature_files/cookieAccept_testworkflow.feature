 @CookieAllConsent @CookieAllConsent
 Feature: TestFlow Cookies
 Cookie Banner -  All Consent provided on entry page [ OWTEST-1997 ]
 
 @CookieAllConsent
 Scenario: Open the page
 
  Given   Cookie All Consent: User is on landing page
  When    Cookie All Consent: User is on cookie popup
  Then    Cookie All Consent: Accept all cookies

  Given   Cookie All Consent: Reload the page to get updated cookies
  When    Cookie All Consent: Get Cookie values after Accept
  Then    Cookie All Consent: User close langing page
