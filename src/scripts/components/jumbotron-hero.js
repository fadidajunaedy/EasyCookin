class JumbotronHero extends HTMLElement {
    connectedCallback() {
        this.title = this.getAttribute('title') || null;
        this.subtitle = this.getAttribute('subtitle') || null;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="p-5 mb-4 rounded-3 jumbotron overflow-hidden shadow">
            <div class="container-fluid py-5">
                <h1 class="display-1 fw-bold">${this.title}</h1>
                <p class="col-md-8 fs-4">${this.subtitle}</p>
            </div>
        </div>
        `;
    }
}

customElements.define('jumbotron-hero', JumbotronHero);