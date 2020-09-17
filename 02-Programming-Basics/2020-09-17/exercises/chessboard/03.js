let height = 10;
let width = 60;

for (let lineNo = 1; lineNo <= height; lineNo++) {
  let line = "";
  for (let colNo = 1; colNo <= width; colNo++) {
    if (lineNo % 2 == 0) {
      // even
      line += colNo % 2 == 0 ? "#" : " ";
    } else {
      // odd
      //line += colNo % 2 == 0 ? " " : "#";
      line += colNo % 2 != 0 ? "#" : " ";
    }
  }

  console.log(line);
}
