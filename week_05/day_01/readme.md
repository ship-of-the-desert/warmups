# Tamagotchi

![](https://upload.wikimedia.org/wikipedia/commons/f/f2/Tamagotchi_0124_ubt.jpeg)

For those who don't remember (or chose to forget), [Tamagotchis](https://en.wikipedia.org/wiki/Tamagotchi) were "digital pets" that you could carry around with you and feed them, clean up after them, pet them, and try to keep them happy.

## Create a Tamagotchi

Make a `Tamagotchi` class. Give it the following properties:

- `hungry` - (boolean, default: **true**)
- `sick` - (boolean, default: **false**)
- `age` - (number, default: **0**)

Give it the following methods:

- `feed()` - if `hungry` is true, return "**That was yummy!**" and set `hungry` to **false**.  If `hungry` is false, return "**No thanks, I'm full.**" and set `hungry` to **true**.
- `sleep()` - returns "**zzzzzzz**"

## Keep it healthy 

- `medicate()` - if `sick` is true, return "**I feel much better!**" and set `sick` to **false**.  If `sick` is false, return "**No thanks, I feel fine.**" and set `sick` to **true**.
- `increaseAge()` - increase `age` by one and return "**Happy Birthday to me! I am " + age + " years old!**".

## Create a dog Tamagotchi

Create a `Dog` class function that inherits from `Tamagotchi`.

Add the following methods to `dog`:

- `bark()` - returns "**ruff ruff**"
- `goOutside()` - returns "**I own that tree now!**"

## Create a cat Tamagotchi 

Create a `Cat` class function that inherits from `Tamagotchi`.

Add the following methods to `cat`:

- `meow()` - returns "**Meow!**"
- `useLitterBox()` - returns "**Buried treasure!**"

## Create a fish Tamagotchi 

Create a `Fish` class function that inherits from `Tamagotchi`.  

Add the following method to `fish`:

- `swim()` - returns "**Just keep swimming...**"

## Test test test 

You should have been testing all along to make sure your functions work: But just in case try some of the following:

1. Feed the dog twice.
2. Increase the dog's age twice.
3. Make the dog bark.
4. Make the dog go outside.
5. Make the cat meow.
6. Make the cat sleep.
7. Make the cat use the litter box.
8. Give the fish medicine twice.
9. Make the fish swim.

Make sure that all of your methods work!

# Tamagotchi 2.0

Use your new found power as programmers to create a zoo of Tamagotchis.

## Create the Zoo

Make a `Zoo` class. Give each instance of `zoo` the following properties:

- `animals` - (array, default: **[]**)

Give it the following methods:

- `createTamagotchi()` - creates a new Tamagotchi and adds it to the array animals
- `addTamagotchi(tamagotchi)` - add an instance of tamagotchi to the array of animals

## Take care of the Zoo 

- `feed()` - feed all the animals
- `sleep()` - have all the animals go to sleep
- `medicate()` - medicate all the animals
- `increaseAges()` - increase the age of all animals

## Test test test 2.0 

Try the following:

- Add a new Tamagotchis to the zoo.
- Add the dog, the cat and the fish to the zoo.
- Feed all of them.
- Increase their age by 3 years.

