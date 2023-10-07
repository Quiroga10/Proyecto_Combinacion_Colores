const searchForm = document.querySelector(".container-search form");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value.toLowerCase();

    colorContainers.forEach((colorContainer) => {
        const colorName = colorContainer.querySelector("p").textContent.toLowerCase();
        if (colorName.includes(searchTerm)) {
        colorContainer.style.display = "block";
        } else {
        colorContainer.style.display = "none";
        }
    });
});
