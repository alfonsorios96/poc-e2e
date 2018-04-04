Feature: Test
  Scenario: Verify the shopping cart add no. of items
    Given Go to the route "list/mens_outerwear"
    Then total no of items on the page are "16"
    When I click item 3
    Then the item "heading" is "Green Flex Fleece Zip Hoodie"
    And the item "price" is "$45.65"
    When I select "Size" from the "L" dropdown
    And I select "Quantity" from the "5" dropdown
    And I click "Add to Cart" button
    Then I should see "5" items in shopping Cart
