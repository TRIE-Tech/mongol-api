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

  it('4. Should copy provinces code snippets', () => {
    cy.get('[data-cy="Docs-Tabs-Provinces"]').click();
    cy.get('[data-cy="Docs-Page-Provinces-Tab"]').should('be.visible');
    cy.get('[data-cy="Docs-Page-Provinces-Panel-Copy-Icon-Button"]').click();
  });

  it('5. Should catch when clicks on the copy icon on provinces code snippets', () => {
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
