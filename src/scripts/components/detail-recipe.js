class DetailRecipe extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set detail(detail) {
        this._detail = detail;
        this.render();
    }

    render() {
        this.innerHTML = `     
        <div class="row gy-4" id="detail-modal">
            <div class="col-lg-12">
                <div class="image rounded-3">
                    <img src="${this._detail.strMealThumb}" class="w-100 mb-4" alt="">
                </div>
            </div>
            <div class="col-lg-4">
                <h3 class="text-start mb-2">${this._detail.strMeal} <i>(${this._detail.strArea})</i></h3>
                <h4 class="text-start mb-4">Category : <i>${this._detail.strCategory}</i></h4>
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Ingredient</th>
                            <th scope="col">Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${this._detail.strIngredient1}</td>
                            <td>${this._detail.strMeasure1}</td>
                        </tr>
                        <tr>
                            <td>${this._detail.strIngredient2}</td>
                            <td>${this._detail.strMeasure2}</td>
                        </tr>
                        <tr>
                            <td>${this._detail.strIngredient3}</td>
                            <td>${this._detail.strMeasure3}</td>
                        </tr>
                        <tr>
                            <td>${this._detail.strIngredient4}</td>
                            <td>${this._detail.strMeasure4}</td>
                        </tr>
                        <tr>
                            <td>${this._detail.strIngredient5}</td>
                            <td>${this._detail.strMeasure5}</td>
                        </tr>
                        <tr>
                            <td>${this._detail.strIngredient6}</td>
                            <td>${this._detail.strMeasure6}</td>
                        </tr>
                        <tr>
                            <td>${this._detail.strIngredient7}</td>
                            <td>${this._detail.strMeasure7}</td>
                        </tr>
                        <tr>
                            <td>${this._detail.strIngredient8}</td>
                            <td>${this._detail.strMeasure8}</td>
                        </tr>
                        <tr>
                            <td>${this._detail.strIngredient9}</td>
                            <td>${this._detail.strMeasure9}</td>
                        </tr>
                        <tr>
                            <td>${this._detail.strIngredient10}</td>
                            <td>${this._detail.strMeasure10}</td>
                        </tr>
                        <tr>
                            <td>${this._detail.strIngredient11}</td>
                            <td>${this._detail.strMeasure11}</td>
                        </tr>
                        <tr>
                            <td>${this._detail.strIngredient12}</td>
                            <td>${this._detail.strMeasure12}</td>
                        </tr>
                        <tr>
                            <td>${this._detail.strIngredient13}</td>
                            <td>${this._detail.strMeasure13}</td>
                        </tr>
                        <tr>
                            <td>${this._detail.strIngredient14}</td>
                            <td>${this._detail.strMeasure14}</td>
                        </tr>
                        <tr>
                            <td>${this._detail.strIngredient15}</td>
                            <td>${this._detail.strMeasure15}</td>
                        </tr>
                        <tr>
                            <td>${this._detail.strIngredient16}</td>
                            <td>${this._detail.strMeasure16}</td>
                        </tr>
                        <tr>
                            <td>${this._detail.strIngredient17}</td>
                            <td>${this._detail.strMeasure17}</td>
                        </tr>
                        <tr>
                            <td>${this._detail.strIngredient18}</td>
                            <td>${this._detail.strMeasure18}</td>
                        </tr>
                        <tr>
                            <td>${this._detail.strIngredient19}</td>
                            <td>${this._detail.strMeasure19}</td>
                        </tr>
                        <tr>
                            <td>${this._detail.strIngredient20}</td>
                            <td>${this._detail.strMeasure20}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-lg-8">
                <h4 class="mb-4">Instruction</h4>
                <p style="word-wrap:break-word; white-space:pre-wrap;" class="mb-4">${this._detail.strInstructions}</p>
                <h4 class="mb-4">Watch video tutorial for more detail</h4>
                <a href="${this._detail.strYoutube}" target="_blank" type="button" class="btn btn-outline-primary shadow">Watch Tutorial</a>
            </div>
        </div>
        `;
    }
}

customElements.define('detail-recipe', DetailRecipe);