 @CookiePerformaceAndTargeting @CookiePerformaceAndTargeting
 Feature: TestFlow Cookies
 As an Author I want to be able retrieve Cookies on the intial stage for testing save settings
 
 @CookiePerformaceAndTargeting
 Scenario: Open the page
    Given   Performace And Targeting: User is on landing page
    When    Performace And Targeting: User is on cookie popup
    Then    Performace And Targeting: User is on setting button

    Given   Performace And Targeting: User clicks on Targeting Cookie tab
    When    Performace And Targeting: User activate Targeting Cookie

    Given   Performace And Targeting: User clicks on Performance Cookie tab
    When    Performace And Targeting: User activate Performance Cookie


    Given   Performace And Targeting: User clicks on Save Settings Button
    When    Performace And Targeting: Reload the page to get updated cookies
    Then    Performace And Targeting: Get Cookie values after Accept

    Given   Performace And Targeting: User close langing page

  