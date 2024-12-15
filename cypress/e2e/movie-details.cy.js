describe('Movie Details Flow', () => {
  it('should allow a user to select a movie and view its details', () => {
    // Visit the home page
    cy.visit('/');

    // Wait for the movies to load
    cy.get('[data-testid="movie-card"]').should('have.length.gt', 0);

    // Click on the first movie
    cy.get('[data-testid="movie-card"]').first().click();

    // Check if we're on the movie details page
    cy.url().should('include', '/movie/');

    // Verify that the movie details are displayed
    cy.get('[data-testid="movie-title"]').should('be.visible');
    cy.get('[data-testid="movie-poster"]').should('be.visible');
    cy.get('[data-testid="movie-genres"]').should('be.visible');

    // Verify that the "Back to search" link exists
    cy.get('[data-testid="back-to-search"]').should('be.visible');

    // Click on the "Back to search" link
    cy.get('[data-testid="back-to-search"]').click();

    // Verify that we're back on the home page
    cy.url().should('not.include', '/movie/');
    cy.get('[data-testid="search-input"]').should('be.visible');
  });
});
