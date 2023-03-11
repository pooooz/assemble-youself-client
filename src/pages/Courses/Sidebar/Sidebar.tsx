import React, { useState } from 'react';

import { List } from 'components/List';

import { categoriesMock, tagsMock } from './mocks';
import {
  Category,
  CategoryList,
  SearchInput,
  SidebarContainer,
  Tag,
  TagList,
  Title,
  WrapWithMargin
} from './styled';

export const Sidebar = () => {
  const [selectedCategories, setSelectedCategories] = useState<Array<number>>([]);
  const [selectedTags, setSelectedTags] = useState<Array<number>>([]);

  const handleSelectToggle = (
    id: number,
    setState: React.Dispatch<React.SetStateAction<Array<number>>>
  ) => () => {
    setState(
      (prevState) => (prevState.includes(id)
        ? prevState.filter((item) => item !== id)
        : [...prevState, id])
    );
  };

  return (
    <SidebarContainer>
      <SearchInput type="text" placeholder="Search" />
      <WrapWithMargin>
        <Title>Категории</Title>
        <List
          container={CategoryList}
          data={categoriesMock}
          renderItem={({ id, title }) => (
            <Category
              key={id}
              isSelected={selectedCategories.includes(id)}
              onClick={handleSelectToggle(id, setSelectedCategories)}
            >
              {title}
            </Category>
          )}
        />
      </WrapWithMargin>
      <WrapWithMargin>
        <Title>Tags</Title>
        <List
          container={TagList}
          data={tagsMock}
          renderItem={({ id, title }) => (
            <Tag
              key={id}
              isSelected={selectedTags.includes(id)}
              onClick={handleSelectToggle(id, setSelectedTags)}
            >
              {title}
            </Tag>
          )}
        />
      </WrapWithMargin>
    </SidebarContainer>
  );
};
