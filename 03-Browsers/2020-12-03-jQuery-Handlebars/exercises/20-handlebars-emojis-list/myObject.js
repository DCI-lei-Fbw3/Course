let nameList = ["div1", "div2", "div3", "div4", "div5", "div6", "div7"];
let emojiList = ["&#128175;", "&#128290;", "&#128077;", "&#128078;", "🥇", "🥈", "🥉"];
let sloganList = ["100", "1234", "+1", "-1", "1st_place_metal", "2nd_place_metal", "3rd_place_metal"];
 
function createObject(num) {
    let theObject = [];
    for(let i=0; i<num; i++){
        nameList[i] = new Object();
        nameList[i].emoji = emojiList[i];
        nameList[i].slogan = sloganList[i];
        theObject.push(nameList[i]);
    } return theObject;
}

console.log(createObject(7));