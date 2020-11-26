Feature: Check search functionality

  Background:
    Given Open application

  Scenario: Enter a search for "stripy leggings", filtered by women
    When I search for "stripy leggings"
    And  I set filter to "Women"
    Then Field search result should contain "stripy leggings"
    And Filter should be set to "Women"
