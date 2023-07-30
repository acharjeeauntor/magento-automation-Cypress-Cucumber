/// <reference types="cypress"/>

export class HomePage {
    productItemSelector = ".product-item";
    productNameSelector = ".product-item-name a";
  
    addToCartProduct(productName) {
        let productFound = false;
      cy.get(this.productItemSelector).each((product) => {
        cy.wrap(product)
          .find(this.productNameSelector)
          .then((nameElement) => {
            const currentProductName = nameElement.text().trim();
            if (currentProductName === productName) {
              // Perform your action here, for example, click the "Add to Cart" button
              cy.wrap(product).click();
              productFound=true
            }
            
          }).then(()=>{
            if (productFound) {
                //throw new Error("Product found. Breaking the loop.");
                console.log("Found")
              }
          })
      });
    }
  }
  