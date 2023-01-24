export const setRate = (count: number = 4, feedback: string = 'feedback') => {
    cy.getByTestId(`StarRating.${count}-false`).click();
    cy.getByTestId('RatingCard.Input').type(feedback);
    cy.getByTestId('RatingCard.Send').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(count: number, feedback: string): Chainable<void>;
        }
    }
}
