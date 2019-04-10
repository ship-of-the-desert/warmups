# Fallout Hacking Game

![](https://www.mobygames.com/images/shots/l/335300-fallout-3-windows-screenshot-hacking-a-computer-and-yes-i.jpg)


The popular video games Fallout 3 and Fallout: New Vegas have a computer "Hacking" minigame where the player must correctly guess the correct password from a list of same-length words. Your challenge is to implement this game yourself.

The game operates similarly to the classic board game [Mastermind](http://en.wikipedia.org/wiki/Mastermind_(board_game)). The player has only 4 guesses and on each incorrect guess the computer will indicate how many letter positions are correct.

For example, if the password is MIND and the player guesses MEND, the game will indicate that 3 out of 4 positions are correct (M_ND). If the password is COMPUTE and the player guesses PLAYFUL, the game will report 0/7. While some of the letters match, they're in the wrong position.

Present the player with 10 words of the same length. The length can be 4 to 15 letters. The player then has 4 guesses, and on each incorrect guess indicate the number of correct positions.

Your program should completely ignore case when making the position checks.

Here's an example game:

```ruby
#Output:
"SCORPION"
"FLOGGING"
"CROPPERS"
"MIGRAINE"
"FOOTNOTE"
"REFINERY"
"VAULTING"
"CONTINUE"
"PROTECTS"
"DESCENTS"
"Guess (4 left)? "
migraine
"0/8 correct"
"Guess (3 left)?"
protects
"3/8 correct"
"Guess (2 left)?" 
croppers
"8/8 correct"
"You win!"
```

