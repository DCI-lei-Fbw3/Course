  /* 
  Convert the promise that handles the modal popup in the `index.js` file to use `async await` syntax.  
  */

 const modal = document.getElementById("myModal");

 /* one liner */
 const delayModal = async (time) => await (() => new Promise(resolve => setTimeout(() => resolve(modal), time)))();

 /* more readable */
 /* 
 const delayModal = async (time) =>  
     await (
             () => new Promise(  resolve => 
                                   setTimeout(
                                             ()=> resolve(modal), 
                                             time
                                   )
                                 )
     )(); 
 */

 delayModal(6000).then(function (delayedModal) {
   console.log("User has been on the page for 6 seconds");
   delayedModal.style.display = "block";
 })

 modal.addEventListener("click", (e) => {
   switch (e.target.className) {
     case "close":
     case "modal":
       modal.style.display = "none"
       break;
   }
 })

 /* 
 * In the `main.scss` there is an animation on the "Continue" button on the page. Create a promise which executes code upon the button's animation end. **You must use the `async await` syntax.** 
 * Upon the animation end, display an alert saying "Continue to subscribe", and change the background color of the button. 
 */

 const btn = document.getElementById('continue');

 /* reverse color to white after leaving the button  */ 
 btn.addEventListener('mouseleave', (e) => e.target.style.backgroundColor = 'white');

 /* .then 
 const p = new Promise ((resolve) => {
   btn.addEventListener('animationend', (e) => resolve(e.target));
 }) 
 
 p.then( (btnAnimationend) => { 
           btnAnimationend.style.backgroundColor = '#218298'
           alert('Continue to subscribe');
         }
       );
 
 btn.addEventListener('mouseleave', (e) => e.target.style.backgroundColor = 'white');
 */

/* async + await */
 btn.addEventListener('mouseenter', async () => {

   const p = new Promise ( (resolve) => {
                             btn.addEventListener('animationend', (e) => resolve(e.target));
                           }
                 );

   const animatedBtn = await p;
   animatedBtn.style.backgroundColor = '#218298';
   alert('Continue to subscribe');
 });
 


