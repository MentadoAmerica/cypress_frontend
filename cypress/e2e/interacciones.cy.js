describe('U5A3: Automatización de interacciones', () => {
  it('Debe navegar, escribir, dar clic y validar', () => {
    
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    cy.get('.action-email').type('alumno@universidad.edu')

    cy.get('.action-btn').click()

    cy.contains('This popover shows up on click')
    
  })
})