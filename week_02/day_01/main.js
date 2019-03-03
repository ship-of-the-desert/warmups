
// purpose: count score sum
//  input: word
//  output: score

const score = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10

}

// "C" - "A" - "T" (for .. of)
// 0 - 1 - 2 (for  .. in)

function wordScore(word) {
    var result = 0;
    word = word.toUpperCase(); //CAT

    for (let letter of word) { // letter is gonna be "C" in the 1st iteration - "A" in the 2nd iteration - "T" in the 3rd iteration
        result += score[letter]; // score[letter] is gonna return the value of each letter
    }

    return result;
}

console.log(wordScore("cat"));