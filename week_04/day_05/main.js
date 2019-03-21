/* ACT I */

var hamlets = [
    "Laurence Olivier, 1948",
    "Grigori Kozintsev, 1964",
    "Tony Richardson, 1969",
    "Franco Zeffirelli, 1990",
    "Kenneth Branagh, 1996",
    "Michael Almereyda, 2000"
];

console.log("Scene I ---------------------------");
hamlets.forEach(function (hamlet) {
    var splitHamlet = hamlet.split(", ");
    console.log(`O! the venerable ${splitHamlet[0]} starred as Hamlet in ${splitHamlet[1]}`);
});

console.log("Scene II ---------------------------");
var hamletArrays = hamlets.map(function (hamlet) {
    var splitHamlet = hamlet.split(", ");
    splitHamlet[1] = parseInt(splitHamlet[1]);
    return splitHamlet;
});
console.log(hamletArrays);

console.log("Scene III ---------------------------");
var hamletObjects = hamlets.map(function (hamlet) {
    var splitHamlet = hamlet.split(", ");
    return {
        name: splitHamlet[0],
        year: splitHamlet[1],
    };
});
console.log(hamletObjects);

console.log("Scene IV ---------------------------");
var swingingHamlets = hamletObjects.filter(function (hamlet) {
    return hamlet.year >= 1960 && hamlet.year < 1970;
});
console.log(swingingHamlets);

console.log("Scene V ---------------------------");
var futureHamlets = hamletObjects.filter(function (hamlet) {
    return hamlet.year >= 2000
});
console.log(futureHamlets);

/* ACT II */
var quotesArray = [
    ["To be, or not to be: that is the question", "Hamlet-(Act III,Scene I)."],
    ["A little more than kin, and less than kind", "Hamlet-(Act I,Scene II)."],
    ["And it must follow, as the night the day, thou canst not then be false to any man", "Hamlet-(Act I,Scene III)."],
    ["This is the very ecstasy of love", "Hamlet-(Act II,Scene I)."],
    ["Brevity is the soul of wit", "Hamlet-(Act II,Scene II)."],
    ["Do you think I am easier to be played on than a pipe?", "Hamlet-(Act III,Scene II)."],
    ["Doubt that the sun doth move, doubt truth to be a liar, but never doubt I love", "Hamlet-(Act II,Scene II)."],
    ["I will speak daggers to her, but use none", "Hamlet-(Act III,Scene II)."],
    ["In my mind's eye", "Hamlet-(Act I,Scene II)."],
    ["Neither a borrower nor a lender be; For loan oft loses both itself and friend, and borrowing dulls the edge of husbandry", "Hamlet-(Act I,Scene III)."],
    ["Rich gifts wax poor when givers prove unkind", "Hamlet-(Act III,Scene I)."],
    ["That it should come to this!", "Hamlet-(Act I,Scene II)."],
    ["The lady doth protest too much, methinks", "Hamlet-(Act III,Scene II)."],
    ["The plays the thing wherein I'll catch the conscience of the king", "Hamlet-(Act II,Scene II)."],
    ["There is nothing either good or bad, but thinking makes it so", "Hamlet-(Act II,Scene II)."],
    ["This above all: to thine own self be true", "Hamlet-(Act I,Scene III)."],
    ["Though this be madness, yet there is method int.", "Hamlet-(Act II,Scene II)."],
    ["What a piece of work is man! how noble in reason! how infinite in faculty! in form and moving how express and admirable! in action how like an angel! in apprehension how like a god! the beauty of the world, the paragon of animals! ", "Hamlet-(Act II,Scene II)."],
    ["When sorrows come, they come not single spies, but in battalions", "Hamlet-(Act IV,Scene V)."]
];

// there are many ways to do this one, here is a solution:
console.log("Act II ---------------------------")
var quoteObjArr = quotesArray.map(function (quote) {
    var quoteObj = {};

    quoteObj.quote = quote[0];
    quoteObj.play = quote[1].split('-', 1)[0];
    var actScene = quote[1].split('Act ')
    actScene = actScene[1].split(',');
    quoteObj.act = actScene[0];
    quoteObj.scene = actScene[1].split('Scene ')[1].split(')')[0];

    return quoteObj;
});
console.log(quoteObjArr);