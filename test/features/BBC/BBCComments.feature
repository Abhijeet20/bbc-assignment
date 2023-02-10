Feature: BBC news articles comment feature

    @automated
    Scenario Outline: Navigate to comment section of the first article for non signed in user
        Given User opens BBC news page
        When The user navigates to the first article which has a comment icon
        Then The non-signed-in user has 'Sign-in or Register' in the comment section

# Examples:
#     | url                        |
#     | https://www.bbc.co.uk/news |




