 @CookieFunctional @CookieFunctional
 Feature: TestFlow Cookies
 As an Author I want to be able retrieve functional cookies
 
 @CookieFunctional
 Scenario: Open the page
    Given   Cookie Functional: User is on landing page
    When    Cookie Functional: User is on cookie popup
    Then    Cookie Functional: User is on setting button

    Given   Cookie Functional: User clicks on Functional Cookies tab
    When    Cookie Functional: User activate Functional Cookies


    Given   Cookie Functional: User clicks on Save Settings Button
    When    Cookie Functional: Reload the page to get updated cookies
    Then    Cookie Functional: Get Cookie values after Accept

    Given   Cookie Functional: User close langing page

  