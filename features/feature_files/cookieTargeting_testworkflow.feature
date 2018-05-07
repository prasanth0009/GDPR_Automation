 @CookieTargeting @CookieTargeting
 Feature: TestFlow Cookies
 As an Author I want to be able retrieve Cookies on the intial stage for testing save settings
 
 @CookieTargeting
 Scenario: Open the page
    Given   Cookie Targeting: User is on landing page
    When    Cookie Targeting: User is on cookie popup
    Then    Cookie Targeting: User is on setting button

    Given   Cookie Targeting: User clicks on Targeting Cookie tab
    When    Cookie Targeting: User activate Targeting Cookie


    Given   Cookie Targeting: User clicks on Save Settings Button
    When    Cookie Targeting: Reload the page to get updated cookies
    Then    Cookie Targeting: Get Cookie values after Accept

    Given   Cookie Targeting: User close langing page

  