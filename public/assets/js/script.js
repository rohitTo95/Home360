console.log("script loaded");

const searchField = document.getElementById("search-field");
const closeBtn = document.getElementById("close-btn");


searchField.addEventListener("click", (e) => {
    document.getElementById("search-section").style.display = "flex";
})
closeBtn.addEventListener("click", (e) => {
    document.getElementById("search-section").style.display = "none";
})

