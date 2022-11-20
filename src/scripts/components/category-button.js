class CategoryButton extends HTMLElement {
    connectedCallback() {
        this.setAttribute('class', 'btn btn-outline-primary btn-category shadow');
        this.setAttribute('type', 'button');
        this.setAttribute('data-id', this._type.strCategory);
        this.render();
    }

    set type(type) {
        this._type = type;
        this.render();
    }
    
    render() {
        this.innerHTML = `
            ${this._type.strCategory}
        `;
    }
    
}

customElements.define('category-button', CategoryButton);