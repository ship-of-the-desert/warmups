# Robot Factory

You run a robot factory. As robots are created, they roll off the conveyor belt as empty, mindless husks of machinery -- until you boot them up.

The first time you boot them up, a random name is generated, and assigned to itself by the robot.

Names typically take the format of things like "Robot34" or "Robot23".

For instance:

```js
let robot1 = new Robot();

console.log(robot1.name);
=> "Robot34"

let robot2 = new Robot();

console.log(robot2.name);
=> "Robot23"

console.log(robot1.name);
=> "Robot34"
```

Every once in a while we need to reset a robot to its factory settings, which means that their name gets wiped, and they get assigned a new name. 

if I say:

```js
let robot3 = new Robot();

console.log(robot3.name);
=> "Robot59"

robot3.reset();

console.log(robot3.name);
=> "Robot43"
```

### Counters

It's important that we not overwork our robots. 
While resetting to factory defaults is great, the wear and tear on the robot mechanisms doesn't go away. 

For every action our robot takes, we should keep track of it.

```js
let robot3 = new Robot();
console.log(robot3.name);
console.log(robot3.name);

robot3.reset();
console.log(robot3.name);
console.log(robot3.name);

console.log(robot3.counter);
=> 5
```

### How to start
- Create an empty class
- Start with a constructor
- Add more methods as you go
- Test each method once you implement it
- Use JS classes [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)