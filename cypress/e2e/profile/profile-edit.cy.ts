let profileId: string = '';

describe('Пользователь заходит на страницу профила', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('И профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.FirstName').should('have.value', 'test');
    });

    it('И редактирует его', () => {
        const newName = 'newName';
        const newLastName = 'newLastName';
        cy.updateProfile(newName, newLastName);
        cy.getByTestId('ProfileCard.FirstName').should('have.value', newName);
        cy.getByTestId('ProfileCard.LastName').should(
            'have.value',
            newLastName,
        );
    });
});
