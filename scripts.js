const recipes = [
    {
        title: "Spaghetti Bolognese",
        ingredients: "Spaghetti, Ground Beef, Tomato sauce, Garlic, Onions, Olive oil",
        steps: "1. Boil pasta. 2.Cook ground beef. 3.Add sauce and garlic. 4.Mix with pasta."
    }, 

    
    {
        title: "Chicken Curry",
        ingredients: "Chicken, Curry Powder, Tomato sauce, Garlic, Onions, ginger",
        steps:"1. Cook chicken.2. Add onios, garlic, ginger, 3. Add coconut milk and powder. 4.simmer"
    },
    
    {
        title: "Vegetable stir-fry",
        ingredients: "Broccoli, Carrots, Bell Peppers, Soy sauce, Garlic, Olive oil",
        steps: "1.Stir-fry vegetables in olive oil. 2.Add garlic and soy sauce. 3.serve with rice."
    }
    ];

    const displayRecipes = () => {
        const recipelist = document.querySelector("#recipelist");
       recipelist.innerHTML = "";

       recipes.forEach((recipe) => {
            const recipeCard = document.createElement("div");
            recipeCard.classList.add("bg-white", "p-4", "rounded", "shadow", "mb-4");

            recipeCard.innerHTML = `
                <h2 class="text-lg font-bold">${recipe.title}</h2>
                <p class="text-sm text-gray-500"><strong>Ingredients: &emsp;</strong>${recipe.ingredients}</p>
                <p class="text-sm"><strong>Steps:  &emsp;</strong>${recipe.steps}</p>
                
            `;
            recipelist.appendChild(recipeCard);
        })
    } 

    constaddRecipe = () => {
        const recipeTitleInput = document.querySelector("#recipeTitle");
        const recipeIngredientsInput = document.querySelector("#recipeIngredients");
        const recipeStepsInput = document.querySelector("#recipeSteps");

        const recipeTitle = recipeTitleInput.Value.trim();
        const recipeIngredients = recipeIngredientsInput.Value.trim();
        const recipeSteps = recipeStepsInput.Value.trim();

        if (recipeTitle.trim() !== "" && recipeIngredients.trim() !== "" && recipeSteps.trim() !== "") {
           
                const newRecipes = {
                    title:recipeTitle,
                    ingredient: recipeIngredients,
                    steps: recipeSteps,

                }
            }
            recipes.push(newRecipe);

            recipeTitleInput.value = "";
            recipeIngredientsInput.value = "";
            recipesStepsInput.value = "";


            displayRecipes();

        } else {
            alert("Please fill out fields");
        }
    }
      
    const addRecipesBtn = document.querySelector("#addRecipeBtn");
     addRecipesBtn.addEventListener("click", addRecipe);

    