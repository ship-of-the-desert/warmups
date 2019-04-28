
// ** 1. ** Pick a penguin from Wikipedia's [List of Fictional Penguins](https://en.wikipedia.org/wiki/List_of_fictional_penguins) and create an object named `myPenguin` with properties that represent the information listed in each column on that Wikipedia page (for example: the character's name, origin, and author).

var myPenguin = {
    character: "Tootsie the Penguin",
    origin: "Donald Duck",
    notes: "A baby penguin in the classic 1939 cartoon \"Donald's Penguin\"."
};

// ** 2. ** Use`console.log()` to print the penguin's name to the console as part of a welcome message, like `"Hello, I'm a penguin and my name is[NAME HERE]!"`

console.log("Hello, I'm a penguin and my name is " + myPenguin.character + "!");

// ** 3. ** Write another line of code that adds a new property to your penguin called`canFly` and set it to`false`. (** Note:** Don't modify your penguin-creation code that you wrote above! Do this step in a separate line of code.)

myPenguin.canFly = false;


// ** 4. ** Add a method to your penguin called`chirp` that prints to the console: `"CHIRP CHIRP! Is this what penguins sound like?"`(** Note:** Again, don't modify your previous code! Do this step by writing a new line of code.)

myPenguin.chirp = function () {
    console.log("CHIRP CHIRP! Is this what penguins sound like?");
};

// ** 5. ** Add another method to your penguin called`sayHello` that prints to the console the same message from step 2 above.But this time, be sure to use the mystical, magical, all - powerful`this` keyword to access your penguin's name, so that way the `sayHello` method could potentially work for _any_ penguin that has a name!

myPenguin.sayHello = function () {
    console.log("Hello, I'm a penguin and my name is " + this.character + "!");
};

// ** 6. ** Next, call your penguin's `sayHello()` method and make sure that it works! 

myPenguin.sayHello();

// ** 7. ** Without modifying any of your previous code, change the penguin's name to `"Penguin McPenguinFace"` and then call your penguin's`sayHello()` function one more time to make sure it still works.

myPenguin.character = "Penguin McPenguinFace";
myPenguin.sayHello();

// ** 8. ** Write another method called`fly`, and inside that method, use an`if / else` statement to print`"I can fly!"` to the console if your penguin's `canFly` property is true, or `"No flying for me!"` if its `canFly` property is false.

myPenguin.fly = function () {
    if (this.canFly) {
        console.log("I can fly!");
    } else {
        console.log("No flying for me!");
    }
};

// ** 9. ** Call your penguin's `fly()` method and make sure it works!

myPenguin.fly();

// ** 10. ** Change the`canFly` property to`true` -- again, without modifying any of your previous code!

myPenguin.canFly = true;

// ** 11. ** Now call your penguin's `fly()` method again and make sure it works as expected!

myPenguin.fly();

// ** 12. ** Write a _ **for ... in** _ loop to print each ** key ** to the console. (** Hint:** See[this page](https://www.w3schools.com/jsref/jsref_forin.asp) for an example of this special type of loop.)

for (property in myPenguin) {
    console.log(property);
}

// ** 13. ** Write another _ **for ... in** _ loop to print the ** value ** of each key to the console. (** Hint:** You'll need to use _bracket notation_ to access the values this way, instead of _dot notation_!)

for (property in myPenguin) {
    console.log(myPenguin[property]);
}

// ** 14. ** Add a new property to your penguin called`favoriteFoods` and set it equal to an _ ** array ** _ containing a list of three strings.

myPenguin.favoriteFoods = ["fish", "ice cream", "hot chocolate"];

// ** 15. ** Access your penguin's second favorite food and print it to the console using `console.log()`

console.log(myPenguin.favoriteFoods[1]);

// ** 16. ** Create a new variable called`firstFavFood` and set it equal to the first item in your penguin's array of favorite foods.

var firstFavFood = myPenguin.favoriteFoods[0];

// ** 17. ** Add another food to the end of the list.

myPenguin.favoriteFoods.push("sushi");

// ** 18. ** Print the ** length ** of your penguin's `favoriteFoods` array to the console with `console.log()`

console.log(myPenguin.favoriteFoods.length);

// ** 19. ** Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to`"pineapples"`(overwriting the previous value).

myPenguin.favoriteFoods[myPenguin.favoriteFoods.length - 1] = "pineapples";

// ** 20. ** Create a new variable named`lastFavFood` that will always point to the _ ** last ** _ element of your penguin's `favoriteFoods` array, no matter how many items are in the list. (**Hint:** this is essentially the same problem as step 18 from above.)

var lastFavFood = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length - 1];

// ** 21. ** Write a _ **for loop ** _ to iterate through every food in your penguin's `favoriteFood` property and print each one to the console. (**Hint:** This loop will look exactly the same as the one you wrote for step 16 above, except now you're accessing the array as a property of an object.)

for (let food of myPenguin.favoriteFoods) {
    console.log(food);
}

// ** 22. ** Add a new property to your penguin called`outfit` and set it equal to _ ** another object ** _ with the following properties: `hat`, `shirt`, `pants`, and`shoes` -- each property should have a string as its value!(I suggest you give it a baseball cap, Hawaiian shirt, cargo shorts, and flip - flops, because wouldn't that be ridiculous?)

myPenguin.outfit = {
    hat: "baseball cap",
    shirt: "Hawaiian shirt",
    pants: "cargo shorts",
    shoes: "flip-flops"
};

// ** 23. ** Create a new variable called`penguinHatType` and set it equal to the value of the`hat` in your penguin's `outfit`! Then print your new variable to the console.

var penguinHatType = myPenguin.outfit.hat;
console.log(penguinHatType);

// ** 24. ** Without modifying any of your previous code, write one new line of code to add an`accessory` property to your penguin's `outfit` and set it equal to the string `"pocket watch"` -- because penguins are classy like that!

myPenguin.outfit.accessory = "pocket watch";

// ** 25. ** Write one more line of code to change the`hat` in your penguin's `outfit` to `"top hat"` and override the previous value. (Again, because penguins are classy!)

myPenguin.outfit.hat = "top hat";

// ** 26. ** This penguin is a freelancer who always works from home, so it doesn't actually need to wear any pants! Let's delete the`pants` property from this penguin's `outfit` property. (**Hint:** see [this page on the `delete` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) for examples.)

delete myPenguin.outfit.pants;

// ** 27. ** Write a _ **for ... in** _ loop to print the ** value ** of each piece of clothing in your penguin's `outfit` so you can see a list of clothing items in the console. (**Hint:** This is the same as step 13 from above, only now we're accessing values from a _nested_ object!)

for (property in myPenguin.outfit) {
    console.log(myPenguin.outfit[property]);
}