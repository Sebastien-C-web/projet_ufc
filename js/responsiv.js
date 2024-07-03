document.addEventListener("DOMContentLoaded", (event) => {

    let nav = document.getElementById("boutons");
    let icon = document.getElementById("icon");

    display = icon.addEventListener("click", () => {
        if (nav.classList.contains("max-md:hidden")) {
            nav.classList.remove("max-md:hidden");
        } else {
            nav.classList.add("max-md:hidden");
        }
    })

});