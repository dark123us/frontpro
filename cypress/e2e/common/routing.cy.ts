import { selectByTestId } from '../../helpers/selectByTestId';

describe('empty spec', () => {
    describe('Пользовалель НЕ авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('Переход отакрывает страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('Переход отакрывает несуществующий маршрут', () => {
            cy.visit('/unknown');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
    describe('Пользовалель авторизован', () => {
        beforeEach(() => {
            cy.login('admin', '123');
        });
        it('Открываем страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Открываем страницу списка статей', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
