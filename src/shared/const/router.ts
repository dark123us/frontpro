export const enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOTFOUND = 'notfound',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'articleDetails',
    ARTICLE_CREATE = 'articleCreate',
    ARTICLE_EDIT = 'articleEdit',
    ADMIN_PANEL = 'adminPanel',
    FORBIDDEN = 'forbidden',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/article/${id}`;
export const getRouteArticleCreate = () => '/article/new';
export const getRouteArticleEdit = (id: string) => `/article/${id}/edit/`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';

// export const RoutePath: Record<AppRoutes, string> = {
//     // [AppRoutes.MAIN]: getRouteMain(),
//     // [AppRoutes.ABOUT]: getRouteAbout(),
//     // [AppRoutes.PROFILE]: getRouteProfile(), // '/profile/', // + :id
//     // [AppRoutes.ARTICLES]: getRouteArticles(),
//     // [AppRoutes.ARTICLE_DETAILS]: getRouteArticleDetails(), // + :id
//     [AppRoutes.ARTICLE_CREATE]: '/article/new',
//     [AppRoutes.ARTICLE_EDIT]: '/article/:id/edit',
//     [AppRoutes.ADMIN_PANEL]: '/admin',
//     [AppRoutes.FORBIDDEN]: '/forbidden',
//     [AppRoutes.NOTFOUND]: '*',
// };
