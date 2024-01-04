let timeout = null;


document.getElementById("search").addEventListener("input",function (){

    clearInterval(timeout);
    timeout = setTimeout(function(){

        searchRecipes(document.getElementById("search").value)
    },1000)
});

async function searchRecipes(quary){

    try {
        let res = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${quary}`);

        let data = await res.json();
        
        showRecipes(data.meals)

    } catch (error) {
        console.log(error);
    }

    
}

function showRecipes(recipes){
    
    let recipeList = document.getElementById("container")
    console.log(recipes);

    if (recipes) {
        recipes.forEach(recipe => {

            recipeList.innerHTML += `
            <div>
            <h3>${recipe.strMeal}</h3>
            <img src=${recipe.strMealThumb}>

            </div>
            `
        });
    } else if (recipes == null) {
        container.innerHTML += `<p id="not-fount" > Recipe not found...</p>`
    }
}