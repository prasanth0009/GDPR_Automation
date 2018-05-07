 @CookiePerformance @CookiePerformance
 Feature: TestFlow Cookies
 As an Author I want to be able retrieve Cookies on the intial stage for testing save settings
 
 @CookiePerformance
 Scenario: Open the page
    Given   Cookie Performance: User is on landing page
    When    Cookie Performance: User is on cookie popup
    Then    Cookie Performance: User is on setting button

    Given   Cookie Performance: User clicks on Perfomace Cookie tab
    When    Cookie Performance: User activate Perfomace Cookie


    Given   Cookie Performance: User clicks on Save Settings Button
    When    Cookie Performance: Reload the page to get updated cookies
    Then    Cookie Performance: Get Cookie values after Accept

    Given   Cookie Performance: User close langing page

  