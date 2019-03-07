function checkWord(word, arr) {
    sortedWord = word.split("").sort().join();
    for (let secondWord of arr) {
        sortedSecondWord = secondWord.split("").sort().join();
        if (sortedWord === sortedSecondWord) {
            console.log(secondWord);
        }
    }
}

checkWord("listen", ["enlists", "google", "inlets", "banana", "istlen"])