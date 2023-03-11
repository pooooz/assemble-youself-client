import { CourseData, SideBarData } from './types';

export const coursesMock: Array<CourseData> = [
  {
    id: 1,
    title: 'Python-разработчик',
    tag: 'Python',
    description: 'Научитесь работать в популярных графических редакторах — от Illustrator до Figma. Добавите в портфолио плакаты, логотипы, дизайн упаковки и другие сильные проекты.',
    startDate: '12.06.2002'
  },
  {
    id: 2,
    title: 'Графический дизайнер',
    tag: 'Дизайн',
    description: 'Научитесь работать в популярных графических редакторах — от Illustrator до Figma. Добавите в портфолио плакаты, логотипы, дизайн упаковки и другие сильные проекты.',
    startDate: '12.06.2023'
  },
  {
    id: 3,
    title: 'Java-разработчик',
    tag: 'Java',
    description: 'Научитесь программировать на языке Java и создавать веб-приложения на фреймворке Spring. За полгода получите фундаментальные навыки и соберёте портфолио,',
    startDate: '13.06.2023'
  }
];
export const sideBarMock: Array<SideBarData> = [
  {
    id: 1,
    title: 'Программирование'
  },
  {
    id: 2,
    title: 'Дизайн'
  },
  {
    id: 3,
    title: 'Аналитика'
  },
  {
    id: 4,
    title: 'Маркетинг'
  },
  {
    id: 5,
    title: 'Управление'
  },
  {
    id: 6,
    title: 'Бэкенд'
  }
];
