 @CookieFunctionalAndTargeting @CookieFunctionalAndTargeting
 Feature: TestFlow Cookies
 As an Author I want to be able retrieve Cookies on the intial stage for testing save settings
 
 @CookieFunctionalAndTargeting
 Scenario: Open the page
    Given   Functional And Targeting: User is on landing page
    When    Functional And Targeting: User is on cookie popup
    Then    Functional And Targeting: User is on setting button

    Given   Functional And Targeting: User clicks on Functional Cookie tab
    When    Functional And Targeting: User activate Functional Cookie

    Given   Functional And Targeting: User clicks on Targeting Cookie tab
    When    Functional And Targeting: User activate Targeting Cookie


    Given   Functional And Targeting: User clicks on Save Settings Button
    When    Functional And Targeting: Reload the page to get updated cookies
    Then    Functional And Targeting: Get Cookie values after Accept

    Given   Functional And Targeting: User close langing page

  