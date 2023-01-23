describe('Profile edit', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit(`profile/${data.id}`);
        });
    });
});
