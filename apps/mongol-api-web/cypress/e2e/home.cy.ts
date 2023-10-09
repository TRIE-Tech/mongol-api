describe('Should test Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('1. Should render Home page intro section', () => {
    cy.get('[data-cy="Home-Intro-Container"]').scrollIntoView();
    cy.get('[data-cy="Home-Intro-Container"]').should('be.visible');
  });

  it('2. Should render Home Page Example section', () => {
    cy.get('[data-cy="Home-Example-Container"]').scrollIntoView();
    cy.get('[data-cy="Home-Example-Container"]').should('be.visible');
  });

  it('3. Should change code snippet when clicks on it', () => {
    cy.get('[data-cy="Home-Example-Container"]').scrollIntoView();
    cy.get('[data-cy="Home-Example-Container"]').should('be.visible');
    cy.get('[data-cy="Loading-Code-Snippet"]').should('be.visible');
    cy.get('[data-cy="Home-Example-Try-Button"]').click();
    cy.get('[data-cy="Example-Code-Snippet"]').should('be.visible');
  });
});
