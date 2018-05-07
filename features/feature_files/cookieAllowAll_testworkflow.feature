 @CookieAllowAll @CookieAllowAll
 Feature: TestFlow Cookies
 As an Author I want to be able retrieve Cookies on the intial stage for testing Accept Cookie 
 
 @CookieAllowAll
 Scenario: Open the page
  Given   CookieAllowAll: User is on landing page
  When    CookieAllowAll: User is on cookie popup
  Then    CookieAllowAll: User is on setting button


  Given   CookieAllowAll: User clicks on Allow All Button
  When   CookieAllowAll: Reload the page to get updated cookies
  Then    CookieAllowAll: Get Cookie values after Accept
  Then    CookieAllowAll: User close langing page

  # Then No Consent provided by user