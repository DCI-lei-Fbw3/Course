let numbers = [1, 2, 3, 4, 5];
let strings = ["a", "b", "c", "d", "e", "f"];

for (let i = 0; i < strings.length; i++) {
  // i = 0
  // i = 1
  let line = "";

  for (let j = 0; j < numbers.length; j++) {
    // i = 0
    // i = 1
    line += strings[i] + numbers[j] + " "; // append to line
    //j=0   a            1     => "a1 "
    //j=1   a            2     => "a1 a2 "
    //j=2   a            3     => "a1 a2 a3 "
    //j=3   a            4     => "a1 a2 a3 a4"
    //j=4   a            5     => "a1 a2 a3 a4 a5 "
  }

  console.log(line);
  // i=0 "a1 a2 a3 a4 a5 "
  // i=1 "b1 b2 b3 b4 b5 "
  // i=....
  // i=5 "f1 f2 f3 f4 f5 "
}
