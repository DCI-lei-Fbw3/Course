/*

1) write a program that outputs a chessboard (width * height = 8 * 8), like:
"# # # # "
" # # # #"
"# # # # "
" # # # #"
"# # # # "
" # # # #"
"# # # # "
" # # # #"*/

//Shih-chen
var result = " ";
var size= 10;

for (let row=0; row<size; row++){
  
  for(let col=0; col<size; col++){
    if ((row%2==0 && col%2==0)||(row%2!=0 && col%2!=0)){
        result=result+"   ";
        }
    else {
      result=result+" # ";
    }
  }
  result=result+"\n";
}

console.log(result); 


/* Ilya
const chessBoard = (width, height) => {
  let row;
  for(i = 0; i < height; i++) {
      row = '';
      if(i % 2 === 0) {
          for(j = 0; j < width; j++) {
              j % 2 === 0 ? row += '   ' : row += ' # ';
          }
      } else {
          for(j = 0; j < width; j++) {
              j % 2 === 0 ? row += ' # ' : row += '   ';
          }
      }
     
      console.log(row);
   }
}
chessBoard(8,8);
 
/*

2) make the height and width configurable

*/
