describe('Flujo completo de navegación e interacción', () => {

  it('Debe navegar, completar acciones y validar correctamente', () => {

    cy.visit('https://example.cypress.io')

    cy.get('h1').should('contain.text', 'Kitchen Sink')
    cy.wait(2000)
    cy.screenshot('01-pagina-principal-kitchen-sink')

    cy.contains('Commands').click()
    cy.wait(1000)

    cy.contains('Actions').click()
    cy.wait(2000)

    cy.get('.action-email')
      .type('ejemplo@test.com')
      .should('have.value', 'ejemplo@test.com')

    cy.wait(1000)

    cy.get('.action-checkboxes [type="checkbox"]')
      .eq(0)
      .check()
      .should('be.checked')

    cy.wait(1000)

    cy.get('.action-checkboxes [type="checkbox"]')
      .eq(2)
      .check()
      .should('be.checked')

    cy.wait(1000)

    cy.get('.action-radios [type="radio"]:not([disabled])')
      .first()
      .check()
      .should('be.checked')

    cy.wait(1000)

    cy.get('.action-select')
      .select('oranges')
      .should('have.value', 'fr-oranges')

    cy.wait(2000)
    cy.screenshot('02-acciones-completadas')

    cy.visit('https://example.cypress.io/commands/traversal')

    cy.get('h1').should('contain.text', 'Traversal')
    cy.wait(2000)
    cy.screenshot('03-seccion-traversal')

    cy.visit('https://example.cypress.io')

    cy.get('h1').should('contain.text', 'Kitchen Sink')
    cy.wait(2000)
    cy.screenshot('04-regreso-pagina-principal')

  })

})