Feature: BBC news articles comment feature

        @automated
        Scenario: Verify the comment section of an article for a non-logged-in user has Sign-in or Register button.
                Given Non logged-in user opens the BBC news page
                When The user navigates to the first article which has a comment icon
                Then The non-signed-in user has "Sign-in or Register" in the comment section

        @automated
        Scenario: Verify the comment section of an article for a logged-in user has the text "You’re signed in"
                Given User logs in to the BBC news page
                When The user navigates to the first article which has a comment icon
                Then The signed-in user has text "You’re signed in, " in the comment section





