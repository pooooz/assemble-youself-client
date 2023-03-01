export const publicRoutePaths = {
  home: 'home',
  logIn: 'login',
  signUp: 'signUp'
};

export const privateRoutePaths = {
  home: 'home',
  courses: 'courses',
  aboutUs: 'about'
};

type RouteKeys = keyof typeof publicRoutePaths;

export const routeLabelsMap = new Map<RouteKeys, string>([
  ['logIn', 'Вход'],
  ['signUp', 'Регистрация'],
  ['home', 'Главная']
]);
