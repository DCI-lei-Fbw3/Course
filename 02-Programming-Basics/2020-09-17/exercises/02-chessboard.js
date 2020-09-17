/*

1) write a program that outputs a chessboard (width * height = 8 * 8), like:
"# # # # "
" # # # #"
"# # # # "
" # # # #"
"# # # # "
" # # # #"
"# # # # "
" # # # #"

*/
for (let i=0; i<=7; i++)
{
    for (let j=0; j<=7; j++)
    {
       if (i==0 && j%2!=0){
        console.log("!!!");
    }
       if (i%2==0 && j==7){
        console.log("???");
       }

        console.log(i*j); 
    }
}
/*

2) make the height and width configurable

*/
