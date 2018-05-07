 @CookieSaveSettings @CookieSaveSettings
 Feature: TestFlow Cookies
 As an Author I want to be able retrieve Cookies on the intial stage for testing save settings
 
 @CookieSaveSettings
 Scenario: Open the page
  Given   CookieSaveSettings: User is on landing page
  When    CookieSaveSettings: User is on cookie popup
  Then    CookieSaveSettings: User is on setting button


  Given   CookieSaveSettings: User clicks on Save Settings Button
  When   CookieSaveSettings: Reload the page to get updated cookies
  Then    CookieSaveSettings: Get Cookie values after Accept

  Given    CookieSaveSettings: User close langing page

  # Then No Consent provided by user