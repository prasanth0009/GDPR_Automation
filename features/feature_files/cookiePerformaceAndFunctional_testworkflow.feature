 @CookiePerformaceAndFunctional @CookiePerformaceAndFunctional
 Feature: TestFlow Cookies
 As an Author I want to be able retrieve Cookies on the intial stage for testing save settings
 
 @CookiePerformaceAndFunctional
 Scenario: Open the page
    Given   Performace And Functional: User is on landing page
    When    Performace And Functional: User is on cookie popup
    Then    Performace And Functional: User is on setting button

    Given   Performace And Functional: User clicks on Functional Cookie tab
    When    Performace And Functional: User activate Functional Cookie

    Given   Performace And Functional: User clicks on Performance Cookie tab
    When    Performace And Functional: User activate Performance Cookie


    Given   Performace And Functional: User clicks on Save Settings Button
    When    Performace And Functional: Reload the page to get updated cookies
    Then    Performace And Functional: Get Cookie values after Accept

    Given   Performace And Functional: User close langing page

  