# Scrabble

Write a program that will replicate the scoring system in Scrabble. The function should take a single argument (the word, comprised of letters/tiles) and return a score. 

## Letter Values

You'll need these:

```plain
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

So now that you've got those letter values, consider what data structure is good for mapping keys to values?

## Examples
"cabbage" should be scored as worth 14 points:

- 3 points for C
- 1 point for A, twice
- 3 points for B, twice
- 2 points for G
- 1 point for E

And to total:

- `3 + 2 * 1 + 2 * 3 + 2 + 1`
- = `3 + 2 + 6 + 3`
- = `5 + 9`
- = 14

## Double Check
http://www.dvorkin.com/scrabscor.php