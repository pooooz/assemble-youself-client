export const publicRoutePaths = {
  home: 'home',
  logIn: 'login',
  signUp: 'signUp',
  aboutUs: 'about'
};

export const privateRoutePaths = {
  home: 'home',
  courses: 'courses',
  aboutUs: 'about'
};

type RouteKeys = keyof typeof publicRoutePaths | keyof typeof privateRoutePaths;

export const routeLabelsMap = new Map<RouteKeys, string>([
  ['logIn', 'Вход'],
  ['signUp', 'Регистрация'],
  ['home', 'Главная'],
  ['courses', 'Курсы'],
  ['aboutUs', 'О нас']
]);
