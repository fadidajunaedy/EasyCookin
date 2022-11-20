class DataRecipes {
  static searchRecipe(keyword) {
    return fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.meals) {
        return Promise.resolve(data.meals);
      } else {
        return Promise.reject(`${keyword} is not found`);
      }
    });
  }

  static searchByCategory(keyword) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${keyword}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.meals) {
        return Promise.resolve(data.meals);
      } else {
        return Promise.reject(`${keyword} is not found`);
      }
    });
  }

  static searchByLetter(keyword) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${keyword}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.meals) {
        return Promise.resolve(data.meals);
      } else {
        return Promise.reject(`${keyword} is not found`);
      }
    });
  }

  static showDetail(id) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.meals) {
        return Promise.resolve(data.meals);
      } else {
        return Promise.reject(`${id} is not found`);
      }
    });
  }
  
  static showCategory(){
    return fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
        .then(response => {
          return response.json();
        })
        .then(data => {
          if (data.meals) {
            return Promise.resolve(data.meals);
          } else {
            return Promise.reject('Category is not found');
          }
        });
  }
}

export default DataRecipes;