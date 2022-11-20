class LetterButton extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="alphabet-container d-flex justify-content-center flex-wrap mt-2 mb-4 gap-2">
            <a type="button" class="btn-letter" data-id="a">A</a> /
            <a type="button" class="btn-letter" data-id="b">B</a> /
            <a type="button" class="btn-letter" data-id="c">C</a> /
            <a type="button" class="btn-letter" data-id="d">D</a> /
            <a type="button" class="btn-letter" data-id="e">E</a> /
            <a type="button" class="btn-letter" data-id="f">F</a> /
            <a type="button" class="btn-letter" data-id="g">G</a> /
            <a type="button" class="btn-letter" data-id="h">H</a> /
            <a type="button" class="btn-letter" data-id="i">I</a> /
            <a type="button" class="btn-letter" data-id="j">J</a> /
            <a type="button" class="btn-letter" data-id="k">K</a> /
            <a type="button" class="btn-letter" data-id="l">L</a> /
            <a type="button" class="btn-letter" data-id="m">M</a> /
            <a type="button" class="btn-letter" data-id="n">N</a> /
            <a type="button" class="btn-letter" data-id="o">O</a> /
            <a type="button" class="btn-letter" data-id="p">P</a> /
            <a type="button" class="btn-letter" data-id="q">Q</a> /
            <a type="button" class="btn-letter" data-id="r">R</a> /
            <a type="button" class="btn-letter" data-id="s">S</a> /
            <a type="button" class="btn-letter" data-id="t">T</a> /
            <a type="button" class="btn-letter" data-id="u">U</a> /
            <a type="button" class="btn-letter" data-id="v">V</a> /
            <a type="button" class="btn-letter" data-id="w">W</a> /
            <a type="button" class="btn-letter" data-id="x">X</a> /
            <a type="button" class="btn-letter" data-id="y">Y</a> /
            <a type="button" class="btn-letter" data-id="z">Z</a> 
        </div>
        `;
    }
}

customElements.define('letter-button', LetterButton);