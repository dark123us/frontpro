import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Python news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://zsfond.ru/wp-content/uploads/2021/03/piton-1-1024x578.jpg',
    userId: '3',
    views: 1040,
    createdAt: '27.02.2022',
    type: [
        'IT',
    ],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: { Authorization: 'asdfl' },
        body: article ?? defaultArticle,
    }).then((resp) => {
        return resp.body;
    });
};

export const removeArticle = (articleId: string) => {
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'asdfl' },

    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>
            removeArticle(articleId: string): Chainable<void>
        }
    }
}
