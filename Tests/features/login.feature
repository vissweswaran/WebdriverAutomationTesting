Feature: Login to LMJ

  Scenario: As a user, I can log into the LMJ area
    # checking
    Given Browse LMJ website
    When I click profile icon
    # Then I should see a flash message saying <message> login with <username> and <password>

    # Examples:
    #   | username | password             | message                        |
    #   | tomsmith | SuperSecretPassword! | You logged into a secure area! |
    #   | foobar   | barfoo               | Your username is invalid!      |
