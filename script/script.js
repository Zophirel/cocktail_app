putIngredientsInGlass = (ingredients) => {
    let ingredientsElements = document.getElementById("ingredients");
    ingredientsElements.style.gridTemplateRows = "";
    console.log(ingredientsElements);
    
    ingredientsElements.innerHTML = "";
    
    let delay = 0.5;
    ingredients.forEach(ingredient => {
        let ingredientElement = document.createElement("div");
        ingredientElement.id = "ingredient";
        ingredientElement.innerHTML = `<p>${ingredient.part} part of ${ingredient.name}</p>`;
        ingredientElement.style.backgroundColor = ingredient.color;
        ingredientsElements.append(ingredientElement);
        ingredientElement.offsetHeight;
        ingredientElement.style.height = 30 * ingredient.part > 15 ? `${30 * ingredient.part}px` : "15px";
        ingredientElement.style.transitionDelay = delay + "s";
        delay += 0.5;
    });
    
}
 
(()=>{ 
    let cocktailsBtns = document.getElementById("cocktails");
    let request = new XMLHttpRequest();
    request.open("GET", "../assets/data.json", false);
    request.send(null)
    let cocktailsJson = JSON.parse(request.responseText);
    console.log(cocktailsBtns);
    console.log(cocktailsJson);
    
    cocktailsJson.forEach(cocktail => {
        let newBtn = document.createElement("div");
        newBtn.className = "cocktail";
        newBtn.innerHTML = `<p>${cocktail.name}</p>`;
            
        cocktailsBtns.append(newBtn);

       
        newBtn.addEventListener("click", () => {
            putIngredientsInGlass(cocktail.ingredients);
            let cocktails = document.getElementsByClassName("cocktail");
            for(i = 0; i < cocktails.length; i++){ 
                console.log(cocktails[i]);            
                if(cocktails[i].innerHTML == newBtn.innerHTML){
                    console.log("colore cambiato");
                    cocktails[i].firstChild.style.color = "#60b1a7";
                }else{
                    cocktails[i].firstChild.style.color = "#5f6766";
                }
            
            }
        });
    });

})();   
