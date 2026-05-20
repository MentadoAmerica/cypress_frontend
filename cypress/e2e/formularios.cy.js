describe('U5A4: Automatización de formularios y validaciones', () => {
  it('Debe interactuar con distintos elementos y validarlos', () => {
    
    cy.visit('https://example.cypress.io')

    cy.contains('Commands').click()
    cy.contains('Actions').click()

    cy.get('.action-email')
      .type('correo@ejemplo.com')
      .should('have.value', 'correo@ejemplo.com') 

    cy.get('.action-checkboxes [type="checkbox"]')
      .first()
      .check()
      .should('be.checked') 
    cy.get('.action-radios [type="radio"]')
      .first()
      .check()

    cy.get('.action-select')
      .select('apples')

    cy.get('.action-btn')
      .click()
      
  })
})