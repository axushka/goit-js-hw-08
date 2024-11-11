const categoriesList = document.querySelectorAll("#categories .item");
console.log("Number of categories:",categoriesList.length);


categoriesList.forEach(categoriesList => {
    const titel = categoriesList.querySelector("h2").textContent;
    const elements = categoriesList.querySelectorAll("ul li").length;
    console.log(`Category: ${titel}`);
    console.log(`Category: ${elements}`);
    
});