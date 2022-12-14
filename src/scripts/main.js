import './components/bread-crumb.js';
import './components/jumbotron-hero.js';
import './components/search-bar.js';
import './components/category-container.js';
import './components/category-button.js';
import './components/letter-button.js';
import './components/recipes-container.js';
import './components/recipe-card.js';
import './components/detail-container.js'
import DataRecipes from './data-recipes.js';

const main = () => {
    const searchInput = document.querySelector('search-bar');
    const recipesContainer = document.querySelector('recipes-container');
    const categoryContainer = document.querySelector('category-container');
    const detailContainer = document.querySelector('detail-container');
    const breadCrumb = document.querySelector('bread-crumb');
    const jumbotronHero = document.querySelector('jumbotron-hero');
    const letterButton = document.querySelector('letter-button');

    // Search Recipes
    const getRecipeByKeyword = async () => {
        try {
            const results = await DataRecipes.searchRecipe(searchInput.value);
            recipesContainer.recipes = results;
        } catch (e) {
            recipesContainer.renderError(e);
        }
    };
    searchInput.clickEvent = getRecipeByKeyword;

    //Show Detail Element
    const showDetailElement = () => {
        searchInput.classList.add('d-none');
        jumbotronHero.classList.add('d-none');
        categoryContainer.classList.add('d-none');
        letterButton.classList.add('d-none');
        recipesContainer.classList.add('d-none');
        detailContainer.classList.remove('d-none');
        breadCrumb.classList.remove('d-none');
    }

    //Close Detail Element
    const closeDetailElement = () => {
        searchInput.classList.remove('d-none');
        jumbotronHero.classList.remove('d-none');
        categoryContainer.classList.remove('d-none');
        letterButton.classList.remove('d-none');
        recipesContainer.classList.remove('d-none');
        breadCrumb.classList.add('d-none');
        detailContainer.classList.add('d-none');
    }

    // Show Category    
    const getCategory = async () => {
        try {
            const result = await DataRecipes.showCategory();
            categoryContainer.category = result;
        } catch (e) {
            console.log(e);
        }
    };

    // Show Recipes by Category
    const showRecipesByCategory = async categoryId => {
        try {
            const results = await DataRecipes.searchByCategory(categoryId);
            recipesContainer.recipes = results;
            document.getElementById('search-input').value = '';
        } catch (e) {
            console.log(e);
        }
    }

    // Show Recipes by Letter
    const showRecipesByLetter = async letter => {
        try {
            const result = await DataRecipes.searchByLetter(letter);
            recipesContainer.recipes = result;
            document.getElementById('search-input').value = '';
        } catch (e) {
            console.log(e);
        }
    }

    // Get Detail Recipe
    const getDetailRecipe = async recipeId => {
        try {
            const result = await DataRecipes.showDetail(recipeId);
            detailContainer.details = result;
            showDetailElement();
            setTimeout(function () {
                window.scrollTo(0, 0);
            },2);
        } catch (e) {
            console.log(e);
        }
    }

    // Close Detail
    const closeDetail = document.getElementById('btn-close-detail');
    closeDetail.addEventListener('click', () => {
        closeDetailElement();
    });
    
    // Click Event
    document.addEventListener('click', e => {
        if (e.target.classList.contains('btn-detail')) {
            const recipeId = e.target.dataset.id;
            getDetailRecipe(recipeId);
        } else if (e.target.classList.contains('btn-category')){
            const categoryId = e.target.dataset.id;
            showRecipesByCategory(categoryId);
        } else if (e.target.classList.contains('btn-letter')) {
            const letter = e.target.dataset.id;
            showRecipesByLetter(letter);
        }
    });

    getCategory();

};

export default main;