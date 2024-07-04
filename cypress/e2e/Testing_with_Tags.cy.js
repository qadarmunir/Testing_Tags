describe('Example to demonstrate handling of Basic Auth in Cypress', () => {

  it('Successfully login by appending username and password in URL', function () {
      cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
  })

  it('Successfully login using headers', function () {
      cy.visit("https://the-internet.herokuapp.com/basic_auth")
  })
})

