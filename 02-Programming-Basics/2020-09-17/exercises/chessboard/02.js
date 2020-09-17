let height = 8;
for (let lineNo = 1; lineNo <= height; lineNo++) {
  let lineOdd = "# # # # ";
  let lineEven = " # # # #";

  console.log(lineNo % 2 == 0 ? lineEven : lineOdd);
}
