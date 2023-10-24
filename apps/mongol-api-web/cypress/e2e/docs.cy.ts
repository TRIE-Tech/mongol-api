describe('Should test Docs page', () => {
  beforeEach(() => {
    cy.visit('/docs');
  });

  it('1. Should render Docs page ', () => {
    cy.get('[data-cy="Docs-Page-Container"]').should('be.visible');
  });

  it('2. Should change docs tab', () => {
    cy.get('[data-cy="Docs-Tabs-Provinces"]').click();
    cy.get('[data-cy="Docs-Tabs-Home"]').click();
    cy.get('[data-cy="Docs-Page-Home-Panel"]').should('be.visible');
  });

  it('3. Should render provinces tab', () => {
    cy.get('[data-cy="Docs-Tabs-Provinces"]').click();
    cy.get('[data-cy="Docs-Page-Provinces-Tab"]').should('be.visible');
  });

  it('3. Should change graphql code snippet to rest code snippet', () => {
    cy.get('[data-cy="Docs-Tabs-Provinces"]').click();
    cy.get('[data-cy="Docs-Page-Provinces-Tab"]').should('be.visible');
    cy.get('[data-cy="Docs-Tabs-Rest-Query-Button"]').click();
  });

  it('4. Should rest code snippet to graphql code snippet', () => {
    cy.get('[data-cy="Docs-Tabs-Provinces"]').click();
    cy.get('[data-cy="Docs-Page-Provinces-Tab"]').should('be.visible');
    cy.get('[data-cy="Docs-Tabs-Rest-Query-Button"]').click();
    cy.get('[data-cy="Docs-Tabs-Graphql-Query-Button"]').click();
  });

  it('5. Should copy graphql code snippets', () => {
    cy.get('[data-cy="Docs-Tabs-Provinces"]').click();
    cy.get('[data-cy="Docs-Page-Provinces-Tab"]').should('be.visible');
    cy.get('[data-cy="Docs-Tabs-Graphql-Query-Button"]').click();
    cy.get('[data-cy="Docs-Page-Provinces-Panel-Copy-Icon-Button"]').click();
  });

  it('6. Should copy rest code snippets', () => {
    cy.get('[data-cy="Docs-Tabs-Provinces"]').click();
    cy.get('[data-cy="Docs-Page-Provinces-Tab"]').should('be.visible');
    cy.get('[data-cy="Docs-Tabs-Rest-Query-Button"]').click();
    cy.get('[data-cy="Docs-Page-Provinces-Panel-Copy-Icon-Button"]').click();
  });

  it('7. Should catch when clicks on the copy icon on provinces code snippets', () => {
    cy.get('[data-cy="Docs-Tabs-Provinces"]').click();
    cy.get('[data-cy="Docs-Page-Provinces-Tab"]').should('be.visible');
    cy.window().then((win) => {
      cy.stub(win.navigator.clipboard, 'writeText').throws(
        new Error('Clipboard writeText error')
      );
    });

    cy.window().then((win) => {
      cy.spy(win.console, 'error').as('consoleError');
    });

    cy.get('[data-cy="Docs-Page-Provinces-Panel-Copy-Icon-Button"]').click();

    cy.get('@consoleError').should(
      'be.calledWith',
      'Failed to copy to clipboard:'
    );
  });
});
