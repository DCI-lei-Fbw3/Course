### Understanding the code

It starts off with an Array of roads between the places, and the buildGraph
function creates an object from this array and with VillageState class we
specify where the Robot is and what packages it has and where to deliver it. The
VillageState random method gives us 5 random deliveries as a default. There are
3 types of Robots in this program. The first random robot picks up the packages
and deliver them randomly. The second Robot has memory array of the places,
without knowing the best road to each place (_It visits every place twice_). The
third Robot is trying to choose the road using an algorithm, in order to know
how to get a package from one place to another. These Robots are running in
runRobot function, which counts the steps the robot requires and where the Robot
is currently moving to deliver all packages.

### The goals of this program

The main goal of the program is to deliver the mail to 11 places taking 14 roads
between them with the shortest steps that can be made.

### Suggestions to improve the program

To improve the program, I created the Robot that can compare between roads and
choose the shortest way to reduce the steps.

### The concepts used in this program

**this list of concepts has been used in this program:**

-   Class prototype
-   Class methods
-   Class inheriting
-   Array methods, such as map, filter, concat
-   Deconstructing
-   High order functions and call back functions
-   Objects methods like (Object.keys, Object.create)
-   Looping
