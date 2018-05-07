 @CookieNoConsent @CookieNoConsent
 Feature: TestFlow Cookies
 Cookie Banner - No Consent provided by user [OWTEST - 1995]
 
 @CookieNoConsent
 Scenario: Open the page
  Given   CookieNoConsent: User is on landing page
  When    CookieNoConsent: User is on cookie popup
  Then    CookieNoConsent: Close the Cookie Popup

  Given   CookieNoConsent: Reload the page to get updated cookies
  When    CookieNoConsent: Get Cookie values after close
  Then    CookieNoConsent: User is on cookie popup for accept cookies
  Then    CookieNoConsent: User close langing page