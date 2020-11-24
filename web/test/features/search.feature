Feature: Check search functionality

  Background:
    Given Go to applications https://www.boden.co.uk

  Scenario: Enter a search for "stripy leggings", filtered by women
    When I search stripy leggings
    And I add Women filter
    Then Filter Women is active
    And Field search result is equal stripy leggings
