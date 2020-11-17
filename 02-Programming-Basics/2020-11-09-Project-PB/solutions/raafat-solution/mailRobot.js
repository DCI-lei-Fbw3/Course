var roads = [
	"Alice's House-Bob's House",
	"Alice's House-Cabin",
	"Alice's House-Post Office",
	"Bob's House-Town Hall",
	"Daria's House-Ernie's House",
	"Daria's House-Town Hall",
	"Ernie's House-Grete's House",
	"Grete's House-Farm",
	"Grete's House-Shop",
	"Marketplace-Farm",
	"Marketplace-Post Office",
	"Marketplace-Shop",
	"Marketplace-Town Hall",
	"Shop-Town Hall",
];

function buildGraph(edges) {
	let graph = Object.create(null);

	const addEdge = (from, to) =>
		graph[from] == null ? (graph[from] = [to]) : graph[from].push(to);

	for (let [from, to] of edges.map((r) => r.split("-"))) {
		addEdge(from, to);
		addEdge(to, from);
	}
	return graph;
}

var roadGraph = buildGraph(roads);
// console.log(roadGraph);

class VillageState {
	constructor(place, parcels) {
		this.place = place;
		this.parcels = parcels;
	}

	move(destination) {
		if (!roadGraph[this.place].includes(destination)) {
			return this;
		} else {
			let parcels = this.parcels
				.map((p) => {
					if (p.place != this.place) return p;
					return { place: destination, address: p.address };
				})
				.filter((p) => p.place != p.address);
			return new VillageState(destination, parcels);
		}
	}
}

function runRobot(state, robot, memory) {
	for (let turn = 0; ; turn++) {
		if (state.parcels.length == 0) {
			console.log(`Needed ${turn} turns to finish`);
			break;
		}
		let action = robot(state, memory);
		state = state.move(action.direction);
		memory = action.memory;
		console.log(`Moved to ${action.direction}`);
	}
}

function randomPick(array) {
	let choice = Math.floor(Math.random() * array.length);
	return array[choice];
}

function randomRobot(state) {
	return { direction: randomPick(roadGraph[state.place]) };
}

VillageState.random = function (parcelCount = 5) {
	let parcels = [];
	for (let i = 0; i < parcelCount; i++) {
		let address = randomPick(Object.keys(roadGraph));
		let place;
		do {
			place = randomPick(Object.keys(roadGraph));
		} while (place == address);
		parcels.push({ place, address });
	}
	return new VillageState("Post Office", parcels);
};

var mailRoute = [
	"Alice's House",
	"Cabin",
	"Alice's House",
	"Bob's House",
	"Town Hall",
	"Daria's House",
	"Ernie's House",
	"Grete's House",
	"Shop",
	"Grete's House",
	"Farm",
	"Marketplace",
	"Post Office",
];

function routeRobot(state, memory) {
	if (memory.length == 0) {
		memory = mailRoute;
	}
	return { direction: memory[0], memory: memory.slice(1) };
}

function findRoute(graph, from, to) {
	let work = [{ at: from, route: [] }];
	for (let i = 0; i < work.length; i++) {
		let { at, route } = work[i];
		for (let place of graph[at]) {
			if (place == to) return route.concat(place);
			if (!work.some((w) => w.at == place)) {
				work.push({ at: place, route: route.concat(place) });
			}
		}
	}
}

function goalOrientedRobot({ place, parcels }, route) {
	if (route.length == 0) {
		let parcel = parcels[0];
		if (parcel.place != place) {
			route = findRoute(roadGraph, place, parcel.place);
		} else {
			route = findRoute(roadGraph, place, parcel.address);
		}
	}
	return { direction: route[0], memory: route.slice(1) };
}

// !call stack for all the Robots
// runRobot(VillageState.random(), randomRobot);
// runRobot(VillageState.random(), routeRobot, []);
// runRobot(VillageState.random(), goalOrientedRobot, []);
// runRobot(VillageState.random(), smarterRobot, []);

// !Measuring a robot
function countTurns(state, robot, memory) {
	for (let turn = 0; ; turn++) {
		if (state.parcels.length == 0) return turn / 100;
		let action = robot(state, memory);
		state = state.move(action.direction);
		memory = action.memory;
	}
}

const compareRobots = () => {
	let theRobots = [0, 0, 0, 0];
	let state = VillageState.random();
	for (let i = 0; i < 100; i++) {
		theRobots[0] += countTurns(state, randomRobot, []);
		theRobots[1] += countTurns(state, routeRobot, []);
		theRobots[2] += countTurns(state, goalOrientedRobot, []);
		theRobots[3] += countTurns(state, smarterRobot, []);
	}
	return `the 1st Robot needed ${Math.round(
		theRobots[0]
	)} move to finish,\nthe 2nd Robot needed ${Math.round(
		theRobots[1]
	)} move to finish,\nthe 3rd Robot needed ${Math.round(
		theRobots[2]
	)} move to finish,\nthe 4th Robot needed ${Math.round(
		theRobots[3]
	)} move to finish`;
};
console.log(compareRobots());

// !Robot efficiency
function smarterRobot({ place, parcels }, memory) {
	if (memory.length == 0) {
		let parcelToPick = [];
		for (let p of parcels) {
			if (p.place != place) {
				parcelToPick.push(findRoute(roadGraph, place, p.place));
			} else {
				parcelToPick.push(findRoute(roadGraph, place, p.address));
			}
		}
		memory = shortestParcelRoad(parcelToPick);
	}
	return { direction: memory[0], memory: memory.slice(1) };
}

function shortestParcelRoad(parcelToPick) {
	let shortRoad = parcelToPick[0];
	if (parcelToPick.length > 1) {
		for (let i = 0; i < parcelToPick.length; i++) {
			if (parcelToPick[i].length < shortRoad.length) {
				shortRoad = parcelToPick[i];
			}
		}
	}
	return shortRoad;
}

// !Persistent group
class PGroup {
	constructor(item) {
		this.item = item;
	}

	has = (val) => this.item.includes(val);

	add = (val) => {
		if (this.has(val)) return this;
		return new PGroup(this.item.concat(val));
	};

	del = (val) => {
		if (!this.has(val)) return this;
		return new PGroup(this.item.filter((x) => x !== val));
	};
}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.del("a");

console.log(b.has("b"));

console.log(a.has("b"));

console.log(b.has("a"));
