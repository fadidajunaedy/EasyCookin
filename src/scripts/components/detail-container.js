import './detail-modal.js';

class DetailContainer extends HTMLElement {
    set details(details) {
        this._details = details;
        this.render();
    }

    render() {
        this.innerHTML = '';
        this._details.forEach(detail => {
            const detailModal = document.createElement('detail-modal');
            detailModal.detail = detail;
            this.appendChild(detailModal);
        });
    }

}

customElements.define('detail-container', DetailContainer);