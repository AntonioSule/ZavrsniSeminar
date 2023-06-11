let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", () => {
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu")
    });
}