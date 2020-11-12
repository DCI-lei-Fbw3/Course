var roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
  ];
  
  function buildGraph(edges) {        // buildGraph = a road network;  // edges = roads/paths;
    let graph = Object.create(null);  // The Object.create() method creates a new object, using an existing object as the prototype of the newly created object. 
                                      // Object(null) creates an object that does not inherit anything i.e creates an empty object whose prototype is null.

    function addEdge(from, to) {      // The parameters of this function represent an item from the obj.arr split into two items called: "from" and "to"  
      if (graph[from] == null) {      // addEdge = adding a path/road; 
        graph[from] = [to];
      } else {
        graph[from].push(to);
       // console.log(graph[from]);
      }
    }
    for (let [from, to] of edges.map(road => road.split("-"))) {  //for example: "Alice's house-Post Office" splits into "Alice's House" & "Post Office"
      addEdge(from, to);                                          //the function is called twice for: "a" to "b" 
      addEdge(to, from);                                                                         // & "b" to "a"
      //console.log("first")
      //console.log(from, to);
      //console.log("second")
      //console.log(to, from);
      //console.log(from);          // prints the first part of the string, or: "from"
      //console.log(to);            // prints the second part of the string, or: "to"
    }
    return graph;    
  }
  
  var roadGraph = buildGraph(roads);          //inside this variable the FIRST function is called, using the roads array as a parameter; 
//  console.log("this is roadGraph");
//  console.log(roadGraph);
  
  var VillageState = class VillageState {    // Classes are a template for creating objects. They encapsulate data with code to work on that data. 
    constructor(place, parcels) {            // this is the first property of the VillageState class 
      this.place = place;                    //this.place is the current location of the robot
      this.parcels = parcels;               // the value is assigned on line 50 and below; parcels means movement/delivery
    }    
  
    move(destination) {                                    //This is the second property (method) of the VillageState class // this is to move the parcels to the destination, destination here can refer to either pickup or dropoff location 
      if (!roadGraph[this.place].includes(destination)) {  //roadGraph(the road network) 
        return this; //if the given address is not included in the destination, return this means the robot stays in its current location, nothing moves
      } else {
        let parcels = this.parcels.map(p => {              // parcels is an empty array defined on line 83; p = pickup place 
          if (p.place != this.place) return p;             // if pickupPlace(name of place) is NOT the current place, return a different place from the current location of the robot 
          return {place: destination, address: p.address}; // destination is the first different location from the current location, whereas parcel generates the second different location from the current location of the robot. So the destination becomes a possible pickup point, address a possible dropoff point
        }).filter(p => p.place != p.address);
        
        return new VillageState(destination, parcels);     //here we call the class that is on line 40; 
      }
    }
  }
  
  //This function makes the robot run and tell in how many turns made
  function runRobot(state, robot, memory) { //state=VillageState, robot, memory
    for (let turn = 0;; turn++) {//how many turns does the robot make, since we do not know how many turns we do not set an upper limit in for loop
      if (state.parcels.length == 0) {//when there is no more pick-up location to go to.
        console.log(`Done in ${turn} turns`);//print out how many time this robot make a turn
        break;//come out of the for loop
      }
      let action = robot(state, memory);     // what the hell robot comes from ?!!
      state = state.move(action.direction); //state.move refers to the move method in VillageState Object, move(destination) destination=delivery
      memory = action.memory; //When the robot picks up a parcel, it remembers where to deliver to. Then after the delivery, the memory will be blank.
      console.log(`RobotMemory: ${memory}`); //we added this line to print out what robot memory looks like.
      console.log(`Moved to ${action.direction}`);//print out the delivery point
    }
  }
  
  //this function is called in Village.random to random a number from 0-4
  function randomPick(array) {//array is the address in VillageState.random, which is the keys of the roadGraph 
    let choice = Math.floor(Math.random() * array.length);//use Math.random function to generate a random number between 0-4, which is the length of array
    return array[choice];
  }
  
  //! Version 1 robot: it goes around randomly
  function randomRobot(state) {//state refers back to the VillageState
    return {direction: randomPick(roadGraph[state.place])};//using randomPick function to randomly generate values (delivery point)extracted from roadGraph using bracket notation
  }
  
//a random function is written inheriting all properties from Object VillageState as a method, but is used only once
  VillageState.random = function(parcelCount = 5) {//5 times to deliver the parcel is hard-coded here, but we can always change that or re-write to be not hard-coded
    let parcels = []; //this empty array will hold all the parcels which have been delivered.
    for (let i = 0; i < parcelCount; i++) {//to go from 0 to 5, <0,1 2,3,4>
      let address = randomPick(Object.keys(roadGraph)); //an address will be randomly created using Object.keys method to determine the pickup point
      let place; //place refers to the drop-off point
      do {
        place = randomPick(Object.keys(roadGraph));//a place will be randomly created using Object.keys method to determine the dropoff point
      } while (place == address); //when the pickup point and drop off point are the same, the delivery is done.     
      parcels.push({place, address});//do... while loop makes sure the loop runs at least once.
    }
    return new VillageState("Post Office", parcels); //create a new VillageState using the object template.
  };
  
  //this is a set route for the route robot to run
  var mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
  ];
  
  //! version 2 robot: it picks up and drops of based on the mail Route
  //this robot is not a smart robot, it follows the route to deliver all parcels until it is done. It does not choose or find a shorter route.
  function routeRobot(state, memory) { //state is the VillageState, memory is the mailRoute.
    if (memory.length == 0) {
      memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};//when the robot goes to one node on the mail route, it drops off/forgets the node by using slice method.
    //when a whole route is run once, the memory becomes empty, then it goes back to if statement until all parcels are delivered
  }

  //this is the route for goalOrientedRobot because this helps the robot to find a better route.
  function findRoute(graph, from, to) {//the graph is from buildGraph function, so are from and to
    let work = [{at: from, route: []}];
     //a new variable is initialised called work to get key and value pairs
    for (let i = 0; i < work.length; i++) { //use for loop to get through all elements in work
      let {at, route} = work[i]; //use destructuring method to assign what work[i] is
      for (let place of graph[at]) { //define a new local variable called place to loop through graph[at], which is the location of the robot
        if (place == to) return route.concat(place); //if the location of robot and the destination ( pickup or drop-off) point are the same, return place using concat method. This is to tell the robot to remember the route by having the string pushed into the empty array
        if (!work.some(w => w.at == place)) {//use some function to 
         //The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
          work.push({at: place, route: route.concat(place)});//keep updating the start point before the pickup point and the drop-off point are the same, then push all the routes out to the array for the robot to remember.
        }
      }
    }
  } 
  
  //! version 3 robot: it picks up and drops off using the findRoute function
  function goalOrientedRobot({place, parcels}, route) { //This robot takes 
    if (route.length == 0) { //route.length is zero means the robot has not run yet
      let parcel = parcels[0]; //parcels is ready to be picked up but not yet
      if (parcel.place != place) {//place is the pickup point, parcel is the drop-off point, when the pickup and drop-off points are not the same, we do the following
        route = findRoute(roadGraph, place, parcel.place); //place is the location of the robot, parcel.place is the pickup point
      } else {
        route = findRoute(roadGraph, place, parcel.address); //parcel.address is drop-off point
      }
    }
    return {direction: route[0], memory: route.slice(1)}; //tell the robot to not to remember the route taken
  }

//This is how to make the whole program work and make 3 types of robots run.
  

// # first exercise

//refactoring the runRobot function from above to be runTest 
function runTest(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      //console.log(`Done in ${turn} turns`);
      return turn;
      //break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    //console.log("turn = ", turn)
    //console.log(`Moved to ${action.direction}`);    
  }
}

//call the runTest function, make each robot run 100 times to compare how many turns each robot makes before finishing the 100 times tasks.
//randomRobot is not to be compared because there is no point to compare since it randomly goes around. 
//number of turn will be divided by the number of task to check which robot takes fewer turn to complate a delivery
//do a multiple times of the console.log to check the number of turn at each stage.
function compareRobots(robot1, memory1, robot2, memory2) {
  
  let robot1Total = 0;
  let robot2Total = 0;
  let numberOfTasks = 100;
  let numberOfTurns = 0;
  
   for (let i = 0; i < numberOfTasks; i++){
     //console.log("Task number: ", i+1)
    let village = VillageState.random();
    //console.log("Parcels: ", village.parcels[0])
    numberOfTurns = runTest(village, robot1, []);
    robot1Total += numberOfTurns;
    //console.log("Robot 1 tasks: ", numberOfTurns);
    numberOfTurns = runTest(village, robot2, []);
    //console.log("Robot 2 tasks: ", numberOfTurns);
    robot2Total += numberOfTurns;
    //console.log("Robot 1: ", robot1Total)
    //console.log("Robot 2: ", robot2Total)
   }

   let r1avg = robot1Total/numberOfTasks;
   let r2avg = robot2Total/numberOfTasks;

   console.log("Grand totals");
   console.log("Number of tasks: ", numberOfTasks)
   console.log("Robot 1 Average: ", r1avg)
   console.log("Robot 2 Average: ", r2avg)
    if ( r1avg > r2avg) {
      console.log("Robot 2 performed more efficiently")
    }
    else if (r1avg < r2avg){
      console.log("Robot 1 performed more efficiently")
    }
    else if(r1avg == r2avg){
      console.log("The robots were the same efficiency")
    }   
}

//call the compareRobots function to compare
console.log("routeRobot vs goalOrientedRobot")
compareRobots(routeRobot, [], goalOrientedRobot, []);
