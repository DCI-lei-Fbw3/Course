function hoverHeader () {
    const header = document.querySelector(".header");
    const modal = document.getElementById("myModal");
    /* in development */
    header.addEventListener("mouseover", e => {
       if(header.classList.contains('no-modal')) modal.style.display = "block";
       header.classList.remove('no-modal');
    });
  /*    doesnt work
         header.addEventListener('mouseleave', e => {
        header.classList.add('no-modal');
        console.log('mouseleave fired');
    }) */

     modal.addEventListener("click", (e) => {
        switch(e.target.className) {
            case "close":
            case "modal":
            modal.style.display = "none";
            break;
        }
    }) 
}
export { hoverHeader };