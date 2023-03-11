import styled from 'styled-components';

import { IsSelected } from './types';

const SCROLLBAR_SIZE = 3;
const SCROLLBAR_BORDER_RADIUS = 10;

const SEARCH_UNDERLINE_WIDTH = 1;

const GRID_GAP = 20;

const CATEGORY_LIST_MAX_HEIGHT = 250;

const TAG_BORDER_RADIUS = 15;
const TAG_BORDER_WIDTH = 1;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchInput = styled.input`
  padding: ${({ theme }) => theme.spaces.s}px 0;
  outline: none;
  border: none;
  border-bottom: ${SEARCH_UNDERLINE_WIDTH}px solid ${({ theme }) => theme.colors.dim};
`;

export const WrapWithMargin = styled.div`
  margin: ${({ theme }) => theme.spaces.xl}px 0 0 0;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  color: ${({ theme }) => theme.colors.heading};
`;

export const CategoryList = styled.ul`
  max-height: ${CATEGORY_LIST_MAX_HEIGHT}px;
  overflow-y: scroll;
  
  &::-webkit-scrollbar {
    width: ${SCROLLBAR_SIZE}px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.dim};
    border-radius: ${SCROLLBAR_BORDER_RADIUS}px;
  }
`;

export const Category = styled.li<IsSelected>`
  margin: ${({ theme }) => theme.spaces.m}px 0 0 0;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  line-height: ${({ theme }) => theme.fontSizes.s + 10}px;
  color: ${({ theme, isSelected }) => (isSelected ? theme.colors.heading : theme.colors.dim)};
  cursor: pointer;
`;

export const TagList = styled.ul`
  margin: ${({ theme }) => theme.spaces.m}px 0 0 0;
  display: grid;
  grid-gap: ${GRID_GAP}px;
  grid-template-columns: 1fr 1fr;
  list-style-type: none;
`;

export const Tag = styled.li<IsSelected>`
  padding: ${({ theme }) => theme.spaces.s}px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme, isSelected }) => (isSelected ? theme.colors.heading : theme.colors.dim)};
  cursor: pointer;
  
  border-radius: ${TAG_BORDER_RADIUS}px;
  outline: ${TAG_BORDER_WIDTH}px solid ${({ theme, isSelected }) => (isSelected ? theme.colors.heading : theme.colors.dim)};
`;
