// import { title } from 'process';

import React from 'react';

// import { List } from 'components/List';

import { SearchInput, SidebarCategoryItem, SidebarCategoryNames, SidebarContainer, SidebarTagsNames, SidebarTagsWraper, TagsButton, Title } from './styled';

// import { sideBarMock } from '../types';

export const Sidebar = () => (
  <SidebarContainer>
    <SearchInput type="text" placeholder="Search" />
    <Title> Категории </Title>
    <SidebarCategoryNames>
      {/* <List
        container={SidebarCategoryItem}
        data={sideBarMock}
      /> */}
      <SidebarCategoryItem>Программирование</SidebarCategoryItem>
      <SidebarCategoryItem>Дизайн</SidebarCategoryItem>
      <SidebarCategoryItem>Аналитика</SidebarCategoryItem>
      <SidebarCategoryItem>Маркетинг</SidebarCategoryItem>
      <SidebarCategoryItem>Управление</SidebarCategoryItem>
      <SidebarCategoryItem>Бэкенд</SidebarCategoryItem>
    </SidebarCategoryNames>
    <SidebarTagsNames>
      <Title> Tags </Title>
      <SidebarTagsWraper>
        <TagsButton> Phyton </TagsButton>
        <TagsButton> Java </TagsButton>
        <TagsButton> PhP </TagsButton>
        <TagsButton> Laravel </TagsButton>
        <TagsButton> React </TagsButton>
        <TagsButton> Psql </TagsButton>
        <TagsButton> MySQL </TagsButton>
      </SidebarTagsWraper>

    </SidebarTagsNames>
  </SidebarContainer>
);
