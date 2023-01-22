let articleId = '';

describe('Пользователь заходит на страницу статей', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            articleId = article.id;
            cy.visit(`article/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(articleId);
    });

    it('И статьи успешно подгружаются', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.gt', 3);
    });
});
