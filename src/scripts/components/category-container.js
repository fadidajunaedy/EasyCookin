import './category-button.js';

class CategoryContainer extends HTMLElement {
    connectedCallback() {
        this.setAttribute('class', 'd-flex justify-content-center flex-wrap mt-2 mb-4 gap-2');

    }

    set category(category) {
        this._category = category;
        this.render();
    }

    render() {
        this._category.forEach(c => {
            
        });
        this.innerHTML = `
            <p>${this._category.strCategory}</p>
        `;
    }

    render() {
        this.innerHTML = '';
        this._category.forEach(type => {
            const categoryButton = document.createElement('category-button');
            categoryButton.type = type;
            this.appendChild(categoryButton);
        });
    }

}

customElements.define('category-container', CategoryContainer);