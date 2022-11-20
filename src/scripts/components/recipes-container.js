import './recipe-card.js';

class RecipesContainer extends HTMLElement {
    connectedCallback() {
        this.setAttribute('class', 'row align-items-md-stretch justify-content-center gx-2');
    }

    set recipes(recipes) {
        this._recipes = recipes;
        this.render();
    }

    render() {
        this.innerHTML = '';
        this._recipes.forEach(recipe => {
            const recipeCard = document.createElement('recipe-card');
            recipeCard.recipe = recipe;
            this.appendChild(recipeCard);
        });
    }

    renderError(message) {
        this.innerHTML = `
        <div class="alert alert-warning alert-dismissible alert-danger fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
    }

}

customElements.define('recipes-container', RecipesContainer);