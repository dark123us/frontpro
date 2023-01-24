export const resetProfile = (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'asdfl' },
        body: {
            id: '4',
            first: 'test',
            lastname: 'user',
            age: 465,
            currency: 'EUR',
            country: 'Ukraine',
            city: 'Moscow',
            username: 'testuser',
            avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        },
    });
};

export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditProfileCardPageHeader.EditButton').click();
    cy.getByTestId('ProfileCard.FirstName').clear().type(firstname);
    cy.getByTestId('ProfileCard.LastName').clear().type(lastname);
    cy.getByTestId('EditProfileCardPageHeader.SaveButton').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
