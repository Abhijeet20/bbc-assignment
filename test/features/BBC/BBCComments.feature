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

        @manual
        Scenario: Verify the comment icon available on the article which includes comment functionality
                Given User logs in to the BBC news page
                When The user navigates to the article which has a comment icon
                Then The user can view the comment icon on the article page

        @manual
        Scenario: Verify the non-logged-in user can sign in to BBC news from the comment section.
                Given User logs in to the BBC news page
                When The user navigates to the article which has a comment icon
                And The non-signed-in user has "Sign-in or Register" in the comment section
                Then The user can sign-in from the comment section by clicking on the sign-in button

        @manual
        Scenario: Verify comment box is enabled for the signed-in user.
                Given User logs in to the BBC news page
                When The user navigates to the first article which has a comment icon
                And The signed-in user has text "You’re signed in, " in the comment section
                Then The comment box is enabled for the signed-in user

        @manual
        Scenario: Verify comment box is disabled for the non-signed-in user.
                Given User logs in to the BBC news page
                When The user navigates to the article which has a comment icon
                And The non-signed-in user has "Sign-in or Register" in the comment section
                Then The comment box is disabled for the non-signed-in user

        @manual
        Scenario: Verify select box is available in the comment section to sort the comments.
                Given User logs in to the BBC news page
                When The user navigates to the article which has a comment icon
                And The user navigates to the comment section
                Then The select box is available in the comment section to sort the comments.

        @manual
        Scenario: Verify the signed-in user can see the "Post" and "Cancel" button once the user fills in the comment.
                Given User logs in to the BBC news page
                When The user navigates to the article which has a comment icon
                And The user navigates to the comment section
                And The user fills in the comment
                Then The signed-in user can see the "Post" and "Cancel" button

        @manual
        Scenario: Verify the signed-in user can post the comment
                Given User logs in to the BBC news page
                When The user navigates to the article which has a comment icon
                And The user navigates to the comment section
                And The user fills in the comment
                And The user clicks on the "Post" button
                Then The user can see the posted comment in the comment section

        @manual
        Scenario: Verify the signed-in user can cancel the comment
                Given User logs in to the BBC news page
                When The user navigates to the article which has a comment icon
                And The user navigates to the comment section
                And The user fills in the comment
                And The user clicks on the "Cancel" button
                Then The user can see the comment section is cleared from the comment text area




