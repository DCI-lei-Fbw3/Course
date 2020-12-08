export default function hoverHeader() {
    const header = document.querySelector(".header");
    const modal = document.getElementById("myModal");
    /* in development */
    header.addEventListener("mouseover", e => {
        modal.style.display = "block";
    });
    /*    doesnt work
           header.addEventListener('mouseleave', e => {
          header.classList.add('no-modal');
          console.log('mouseleave fired');
      }) */

    modal.addEventListener("click", (e) => {
        switch (e.target.className) {
            case "close":
            case "modal":
                modal.style.display = "none";
                break;
        }
    })
}
