Feature: BBC news articles comment feature

        @automated
        Scenario: Verify the comment section of an article for a non-logged-in user
                Given Non logged-in user opens the BBC news page
                When The user navigates to the first article which has a comment icon
                Then The non-signed-in user has 'Sign-in or Register' in the comment section

        @automated
        Scenario: Verify the comment section of an article for a logged-in user
                Given User logs in to the BBC news page
                When The user navigates to the first article which has a comment icon
# Then The signed-in user has 'Sign-in or Register' in the comment section





