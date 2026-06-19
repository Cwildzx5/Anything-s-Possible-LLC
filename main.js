const topButton = document.querySelector("#topBtn");

topButton.addEventListener("click", () => {
window.scrollTo({
top: 0,
behavior: "smooth"
});
});
