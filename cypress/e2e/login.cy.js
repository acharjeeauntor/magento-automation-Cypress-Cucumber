describe('Login module', () => {
  it('navigate to the login', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get(':nth-child(4) > .product-item-info').click()
  })
})