const json = require('./data.json');
const fs = require('fs');
const isEmptyObject = require('./isEmptyObject');

function formatedJson(json){
    let tempJson = {};
    for(const establishment of json.establishments){
        const categories = json.categories;
        const products = json.products;
        tempJson[establishment.name] = {};
        for(const category of categories){
            tempJson[establishment.name][category.name] = {};
            for(const product of products){
                if(product.categoriesId.includes(category.id) && establishment.productsId.includes(product.id)){
                    const price = product.price;
                    tempJson[establishment.name][category.name][product.name] = {};
                    tempJson[establishment.name][category.name][product.name]['price'] = (price/100).toFixed(2);
                }
            }
            if(isEmptyObject(tempJson[establishment.name][category.name])){
                tempJson[establishment.name][category.name] = undefined
            }
        }
      }
      return tempJson;
}

console.log(JSON.stringify(formatedJson(json)));
