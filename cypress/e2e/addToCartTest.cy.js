/// <reference types="cypress"/>
import{HomePage} from "../pageObjects/homePage/homepage"
import{productData} from "../fixtures/productData.json"

var homePage
describe('Add To Cart Module', () => {
  homePage = new HomePage()
 
  it('Add To Cart Product', () => {
    cy.visit('/')

    homePage.addToCartProduct("Fusion Backpack")
  })
})