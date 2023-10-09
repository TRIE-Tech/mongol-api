describe('Should test Header', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('1. Should navigate to Home page when clicks on the Home button on header', () => {
    cy.get('[data-cy="Header-Docs-Button"]').click();
    cy.url().should('include', '/docs');
    cy.get('[data-cy="Header-Home-Button"]').click();
    cy.url().should('include', '/');
  });

  it('2. Should navigate to Docs page when clicks on the Docs button on header', () => {
    cy.get('[data-cy="Header-Docs-Button"]').click();
    cy.url().should('include', '/docs');
  });

  it('3. Should navigate to Home page when clicks on the mongol-api icon button on header', () => {
    cy.get('[data-cy="Header-Docs-Button"]').click();
    cy.url().should('include', '/docs');
    cy.get('[data-cy="Header-Logo"]').click();
    cy.url().should('include', '/');
  });
});
