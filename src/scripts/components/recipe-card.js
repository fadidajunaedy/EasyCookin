class RecipeCard extends HTMLElement {
    connectedCallback() {
        this.setAttribute('class', 'col-md-4 p-3');
        this.render();
    }

    set recipe(recipe) {
        this._recipe = recipe;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="card btn-detail rounded-3 overflow-hidden shadow">
            <img src="${this._recipe.strMealThumb}" class="card-img-top" alt="${this._recipe.strMeal}">
            <div class="card-body">
            <h3 class="mb-4">${this._recipe.strMeal}</h3>
            <button type="button" data-id="${this._recipe.idMeal}" class="btn btn-outline-primary btn-detail px-4 py-2">
                Detail Recipe
            </button>
            </div>
        </div>
        
        
        `;

    }
    
}

customElements.define('recipe-card', RecipeCard);