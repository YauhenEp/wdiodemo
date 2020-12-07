Feature: Check search functionality

  Background:
    Given Open application

  Scenario Outline: Enter a search for "stripy leggings", filtered by girls
    When I search for "<search>"
    And I set "=>Department" filter to "=>Girls"
    Then Field search result should contain "<search>"
    And Filter "=>Department" should be set to "=>Girls"

    Examples:
      | search             |
      | =>stripy leggings  |
      | =>wool dress       |
      | =>sweatshirt dress |
      | =>neck jumper      |
      | =>pull-on shorts   |