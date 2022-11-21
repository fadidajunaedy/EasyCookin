import './detail-recipe.js';

class DetailContainer extends HTMLElement {
    set details(details) {
        this._details = details;
        this.render();
    }

    render() {
        this.innerHTML = '';
        this._details.forEach(detail => {
            const detailRecipe = document.createElement('detail-recipe');
            detailRecipe.detail = detail;
            this.appendChild(detailRecipe);
        });
    }

}

customElements.define('detail-container', DetailContainer);