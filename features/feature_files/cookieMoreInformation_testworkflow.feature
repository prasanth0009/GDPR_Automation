 @CookieFunctional @CookieMoreInformation
 Feature: TestFlow Cookies
 As an Author I want to be able retrieve functional cookies
 
 @CookieMoreInformation
 Scenario: Open the page
    Given   Cookie More Information: User is on landing page
    When    Cookie More Information: User is on cookie popup
    Then    Cookie More Information: User is on setting button

    Given   Cookie More Information: User clicks on More Information tab
    When    Cookie More Information: Switch back to Initial Page

    Given   Cookie More Information: User clicks on Save Settings Button
    When   Cookie More Information: User close langing page

  