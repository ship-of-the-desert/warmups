// 1
// Create a class called Robot
// Each instance should have one property; name
// Each new robot should create its own name
// the name should be "RobotXX", ex. Robot42
// Math.random()

// 2
// Create a reset() function inside the Robot class
// Which renames the robot.

// 3
// Create a robot counter that increments every time we ask the robot to perform a task (such as; print the name, reset)

class Robot {
    constructor() {
        this._name = `Robot${Math.floor(Math.random() * 1000)}`;
        this.counter = 0;
    }
    reset() {
        this._name = `Robot${Math.floor(Math.random() * 1000)}`;
        this.counter++
    }
    get name() {
        this.counter++;
        return this._name;
    }
}

let robot = new Robot()

console.log(robot.counter);
console.log(robot.name)
console.log(robot.name);
robot.reset()
console.log(robot.name);
console.log(robot.counter);
