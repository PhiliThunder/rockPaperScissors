/*
Plan:
    UI: None, for now
    Inputs:
        - Userinput in console for choice of hand
        - Randomly generated input for computers choice of hand
    Desired output:
        - Correct winner announced for each round
        - Winner of BO3 game announced

Pseudocode:
    SET starting score of player and computer
    WHILE starting score of player or computer is below 3    
        GET user input for new hand
        SET new computer hand choice
        Check which player won with wincheck function
            IF player won
                THEN give player 1 point and go back to start
            ELSE IF a tie
                Go back to start 
            ELSE
                Give 1 point to computer and go back to start
    Wincheck function
        IF computerchoice and userchoice is the same
            THEN set wincheck to tie
        ELSE IF computerchoice is Rock and userchoice is Paper
            THEN set wincheck to win
        ELSE IF computerchoice is Rock and userchoice is Scissors
            THEN set wincheck to loss
        ...
            ...
*/