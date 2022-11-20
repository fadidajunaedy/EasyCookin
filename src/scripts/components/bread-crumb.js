class BreadCrumb extends HTMLElement {
    connectedCallback() {
        this.setAttribute('class', 'd-none');
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav aria-label="breadcrumb" id="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a id="btn-close-detail"> < Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Recipe Detail</li>
            </ol>
        </nav>
        `;
    }
}

customElements.define('bread-crumb', BreadCrumb);