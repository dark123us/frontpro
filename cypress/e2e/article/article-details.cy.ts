let articleId = '';

describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            articleId = article.id;
            cy.visit(`article/${articleId}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(articleId);
    });

    it('И видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetailsPage').should('exist');
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('И видит список рекомендаций', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('И оставляет коментарии', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
        cy.getByTestId('CommentCard.Content').should('exist');
    });
    it('И ставить оценку', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.getByTestId('StarRating.4-true').should('exist');
        cy.getByTestId('StarRating.5-false').should('exist');
    });
});
