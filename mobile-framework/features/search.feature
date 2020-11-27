Feature: Check search functionality

  Background:
    Given Open application

  Scenario: Enter a search for "stripy leggings", filtered by girls
    When I search for "=>stripy leggings"
    And I set "=>Department" filter to "=>Girls"
    Then Field search result should contain "=>stripy leggings"
    And Filter "=>Department" should be set to "=>Girls"