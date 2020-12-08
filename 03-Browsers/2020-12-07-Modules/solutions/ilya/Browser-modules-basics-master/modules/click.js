export default function clickImages() {
    const allImgs = document.querySelectorAll("#content img");
    allImgs.forEach(img => img.addEventListener("click", () => {
            alert("All of the yarn is available in our shop!")
        })
    );
}