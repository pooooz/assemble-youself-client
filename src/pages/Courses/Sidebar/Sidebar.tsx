import React from 'react';

import { List } from 'components/List';

import {
  SearchInput,
  SidebarCategoryItem,
  SidebarCategoryNames,
  SidebarContainer,
  SidebarTagsNames,
  SidebarTagsWraper,
  TagsButton,
  Title
} from './styled';

import { sideBarMock, sideTagsMock } from '../mocks';

export const Sidebar = () => (
  <SidebarContainer>
    <SearchInput type="text" placeholder="Search" />
    <Title> Категории </Title>
    <List
      container={SidebarCategoryNames}
      data={sideBarMock}
      renderItem={({ id, title }) => <SidebarCategoryItem key={id}>{title}</SidebarCategoryItem>}
    />
    <SidebarTagsNames>
      <Title> Tags </Title>
      <List
        container={SidebarTagsWraper}
        data={sideTagsMock}
        renderItem={({ id, title }) => <TagsButton key={id}>{title}</TagsButton>}
      />
    </SidebarTagsNames>
  </SidebarContainer>
);
