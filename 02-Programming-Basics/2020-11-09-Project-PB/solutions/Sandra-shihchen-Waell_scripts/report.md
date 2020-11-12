# Part 1: a rough picture about what this program does

There are 5 sections in the program:

1. using graph theory to build routes using buildGraph function.
2. creating an Object template called VillageState.
3. creating to function to initiate the robot to run (simulation).
4. building three types of robots:
   a. randomRobot (the robot goes to different nodes randomly).
   b. routeRobot (the robot strictly follows the mailRoute to get to different nodes to pick up and drop off parcels)
   c. getOrientedRobot (the robot uses find route function to determine its current location, pickup point and drop off point to perform the delivery).
5. at the end of the program, users call the function to make the whole program  
   run. As for how to make the program run, see Part 2.

# Part 2: Here is how to make the program works

console.log("Robot one: routeRobot")//this is extra, we just want to know which robot is which
runRobot(VillageState.random(), routeRobot, []);
console.log("Robot two: goalOrientedRobot")
runRobot(VillageState.random(), goalOrientedRobot, []);
console.log("Robot three: randomRobot")
runRobot(VillageState.random(), randomRobot, []);

first argument of VillageState.random():
When the runRobot function is called, the first argument "VillageState.random()" will make a new object of VillageState, then using this particularly created method called random() once. Inside the VillageState.random(), parcels are generated randomly using randomPick function.

second argument of is different type of robot (randomRobot, routeRobot, and goalOrientedRobot):
Different type of robot will initiate runRobot function, and the different type of robot itself will follow the kind of route it is linked to. For example, for the routeRobot, once it starts running, it will only follow the mailRoute. for the goalOrientedRobot, it will use the findRoute function to find the route. As for how the route is decided, it is based on the routes generated from the buildGraph function.

third argument of is an empty array for the parameter of memory. This is where a smarter robot can have a better-written argument to be passed here.

While executing the program various functions call each other. For more information please see our comment on the robot.js file.

# Part 3:

Any feedback?
