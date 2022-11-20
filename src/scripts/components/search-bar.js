class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
    
    get value() {
        return this.querySelector('#search-input').value;
    }

    render() {
        this.innerHTML = `
            <div class="search-container mb-4 rounded-3 overflow-hidden shadow">
                <div class="input-group">
                    <input type="search" class="form-control p-4" placeholder="Type food name..." aria-label="Search" id="search-input" aria-describedby="search-addon" />
                    <button type="button" class="btn btn-outline-primary p-2" id="search-button"><box-icon name='search' ></box-icon></button>
                </div>
            </div>
        `;
        this.querySelector('#search-button').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);

{/* <div class="d-flex my-3 p-5 shadow border-0">
            <input class="form-control form-control-lg me-2" type="search" placeholder="Type food name.." aria-label="Search" id="search-input">
            <button class="btn btn-lg btn-warning" type="submit" id="search-button">Search</button>
            </div> */}