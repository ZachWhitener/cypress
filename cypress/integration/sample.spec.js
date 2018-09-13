

describe("Cypress Sample Test", () => {
    context('when the homepage loads', () => {
        beforeEach(() => {
           cy.visit("https://google.com");
        });

        it('should have all the important elements', () => {
            cy.get('img#hplogo')
                .should('exist')
                .and('have.attr', 'src');
            cy.get("#searchform .SDkEP input").should('exist');
            cy.get('.fbar').should('exist');
            cy.get('#gb_70')
                .should("have.attr", "href")
                .and("include", "accounts.google");
        });

        it('should search a term', () => {
            cy.get("#searchform .SDkEP input")
                .type("Ford Commercial Solutions {enter}"); // key modifier
            cy.get('#resultStats').should('contain', 'results');
            cy.screenshot();
        });
    });

});