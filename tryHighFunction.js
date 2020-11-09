var rand = Math.random();

function hello(x) {
    console.log(x);
};

function two(oops) {
    oops(rand);
};

two(hello);