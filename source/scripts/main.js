// Recipes to fetch 
const recipes = [
    'https://introweb.tech/assets/json/ghostCookies.json',
    'https://introweb.tech/assets/json/birthdayCake.json',
    'https://introweb.tech/assets/json/chocolateChip.json',
    './assets/recipes/cha-siu.json',
    './assets/recipes/chicken-pho.json',
    './assets/recipes/eggplant_unagi.json'
  ];
  
  // Once all of the recipes that were specified above have been fetched, their
  // data will be added to this object below. You may use whatever you like for the
  // keys as long as it's unique, one suggestion might but the URL itself
  const recipeData = {}
  
  window.addEventListener('DOMContentLoaded', init);
  
  // This is the first function to be called, so when you are tracing your code start here.
  async function init() {
    // fetch the recipes and wait for them to load
    let fetchSuccessful = await fetchRecipes();
    //console.log(recipeData);
    // if they didn't successfully load, quit the function
    if (!fetchSuccessful) {
      console.log('Recipe fetch unsuccessful');
      return;
    };
    // Add the first three recipe cards to the page
    createRecipeCards();
    // Make the "Show more" button functional
    bindShowMore();
  }
  
  async function fetchRecipes() {
    return new Promise((resolve, reject) => {
      // This function is called for you up above
      // From this function, you are going to fetch each of the recipes in the 'recipes' array above.
      // Once you have that data, store it in the 'recipeData' object. You can use whatever you like
      // for the keys. Once everything in the array has been successfully fetched, call the resolve(true)
      // callback function to resolve this promise. If there's any error fetching any of the items, call
      // the reject(false) function.
  
      // For part 2 - note that you can fetch local files as well, so store any JSON files you'd like to fetch
      // in the recipes folder and fetch them from there. You'll need to add their paths to the recipes array.
  
      // Part 1 Expose - TODO
      for (let i = 0; i < recipes.length; i++) {
        fetch(recipes[i])
        .then(response=>response.json())
        .then(data => {recipeData[recipes[i]] = data;
        if(Object.keys(recipeData).length == recipes.length){
            resolve(true);}
          })
        .catch((err) => reject(false));
      }
    });
  }
  
  function createRecipeCards() {
    // This function is called for you up above.
    // From within this function you can access the recipe data from the JSON 
    // files with the recipeData Object above. Make sure you only display the 
    // three recipes we give you, you'll use the bindShowMore() function to
    // show any others you've added when the user clicks on the "Show more" button.
    let main_html = document.querySelector("main");
    // Part 1 Expose - TODO
    for (let i = 0; i < 3; i ++){
        let re = document.createElement('recipe-card');
        re.data = recipeData[recipes[i]];
        //console.log(re);
        main_html.appendChild(re);
    }
  }