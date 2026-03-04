const slider = document.getElementById("slider");
const btnWeb = document.getElementById("btn-web");
const btnGame = document.getElementById("btn-game");

btnWeb.addEventListener("click", () => {
    slider.style.transform = "translateX(0%)";
    btnWeb.classList.add("active");
    btnGame.classList.remove("active");
});

btnGame.addEventListener("click", () => {
    slider.style.transform = "translateX(-50%)";
    btnGame.classList.add("active");
    btnWeb.classList.remove("active");
});