/*      */
/* ИЛЬЯ */

//const modal = document.getElementById("myModal");
/* const promiseOfModal = new Promise(function (resolve) {
    window.setTimeout(function () {
        resolve(modal)
    }, (1000 * 5));
}); */



console.log('line 15:', modal);

/* works, but i don't like it
async function promiseOfModal(){
  return new Promise( function (resolve) {
                        window.setTimeout(  function () {
                              resolve(modal)
                              }, 
                              (1000 * 6)
                        )
                      }
                    );
} 
*/
/* console.log(new Promise(()=> {return resolve('hello')}));
const promiseOfModal = async () => {
   await window.setTimeout( () => console.log('hi'), (1000 * 5));
   return modal;
}; 


promiseOfModal().then(function(val) {
    console.log("User has been on the page for 60 seconds");
    val.style.display = "block";
}) */

const modal = document.getElementById("myModal");
let promiseOfModal = new Promise(function (resolve) {
    window.setTimeout(function () {
        resolve(modal)
    }, (1000 * 60));
});

promiseOfModal.then(function(val) {
    console.log("User has been on the page for 60 seconds");
    val.style.display = "block";
}) 


modal.addEventListener("click", (e) => {
    switch(e.target.className) {
        case "close":
        case "modal":
        modal.style.display = "none"
        break;
    }
})


/* 
btn.addEventListener("animationend", function() {}, false);
*/
