 @CookiePerformanceAndTargetAndFunctional @CookiePerformanceAndTargetAndFunctional
 Feature: TestFlow Cookies
 As an Author I want to be able retrieve Cookies on the intial stage for testing save settings
 
 @CookiePerformanceAndTargetAndFunctional
 Scenario: Open the page
    Given   Performance And Target And Functional: User is on landing page
    When    Performance And Target And Functional: User is on cookie popup
    Then    Performance And Target And Functional: User is on setting button

    Given   Performance And Target And Functional: User clicks on Performance Cookie tab
    When    Performance And Target And Functional: User activate Performance Cookie

    Given   Performance And Target And Functional: User clicks on Target Cookie tab
    When    Performance And Target And Functional: User activate Target Cookie

    Given   Performance And Target And Functional: User clicks on Functional Cookie tab
    When    Performance And Target And Functional: User activate Functional Cookie


    Given   Performance And Target And Functional: User clicks on Save Settings Button
    When    Performance And Target And Functional: Reload the page to get updated cookies
    Then    Performance And Target And Functional: Get Cookie values after Accept

    Given   Performance And Target And Functional: User close langing page

  