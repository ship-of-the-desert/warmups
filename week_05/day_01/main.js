class Tamagotchi {
    constructor() {
        this.hungry = true;
        this.sick = false;
        this.age = 0
    }
    feed() {
        if (this.hungry) {
            console.log("That was yum");
            this.hungry = false;
        } else {
            console.log("No thanks, I'm full");
            this.hungry = true;
        }
    }
    sleep() {
        console.log("zzzzzz")
    }
    medicate() {
        if (this.sick) {
            console.log("I feel much better!");
            this.sick = false;
        } else {
            console.log("No thanks, I'm fine");
            this.sick = true;
        }
    }
    increaseAge() {
        this.age += 1;
        console.log("Happy birthday to me! I am " + this.age + " years old!");
    }
}

class Dog extends Tamagotchi {
    bark() {
        console.log("ruff ruff")
    }
    goOutside() {
        console.log("I own that tree now!")
    }
}

class Cat extends Tamagotchi {
    meow() {
        console.log("Meow!")
    }
    useLitterBox() {
        console.log("Buried Treasure!")
    }
}

class Fish extends Tamagotchi {
    swim() {
        console.log("Just keep swimming...")
    }
}

let spock = new Dog()
let loki = new Cat()
let nimo = new Fish()

spock.feed()
spock.increaseAge()
spock.increaseAge()
spock.bark()
spock.goOutside()
loki.meow()
loki.sleep()
loki.useLitterBox()
nimo.medicate()
nimo.medicate()
nimo.swim()

class Zoo {
    constructor() {
        this.animals = []
    }
    createTamagotchi() {
        this.animals.push(new Tamagotchi())
    }
    addTamagotchi(tamagotchi) {
        this.animals.push(tamagotchi)
    }
    feed() {
        this.animals.forEach(animal => {
            animal.feed()
        })
    }
    sleep() {
        this.animals.forEach(animal => {
            animal.sleep()
        })
    }
    medicate() {
        this.animals.forEach(animal => {
            animal.medicate()
        })
    }
    increaseAges() {
        this.animals.forEach(animal => {
            animal.increaseAge()
        })
    }
}

let zoo = new Zoo()
zoo.createTamagotchi()
zoo.addTamagotchi(spock)
zoo.addTamagotchi(loki)
zoo.addTamagotchi(nimo)
zoo.feed()
zoo.increaseAges()
zoo.increaseAges()
zoo.increaseAges()
