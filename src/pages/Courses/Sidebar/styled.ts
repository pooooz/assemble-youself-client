import styled from 'styled-components';

const FULL = 100;
const TITLE_FONT_WEIGHT = 500;
const SCROLLBAR_SIZE = 3;
const SCROLLBAR_BORDER_RADIUS = 10;

export const SidebarContainer = styled.div`
margin-left: 65px;
  display: flex;
  flex-direction: column;
`;
export const SearchInput = styled.input`
height: 30px;
margin-bottom: 44px;
border: none;
border-bottom: 1px solid ${({ theme }) => theme.colors.dim};
background-color: transparent;
color: inherit;
outline: none;

`;
export const SidebarCategoryNames = styled.div`
  margin-top: 15px
`;
export const SidebarTagsNames = styled.div`
  margin-top: 15px
`;
export const SidebarTagsWraper = styled.div`
grid-gap: 20px;
display: grid;
grid-template-columns: 4fr 4fr;
`;
export const TagsButton = styled.button`
  width: ${FULL}%;
  height: ${FULL}%;
  margin: ${({ theme }) => theme.spaces.l}px 0 0 0;
  color: ${({ theme }) => theme.colors.dim};
  background-color: lightgrey;      
`;
export const Title = styled.h3`
  font-weight: ${TITLE_FONT_WEIGHT};
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  color: ${({ theme }) => theme.colors.heading};
`;
export const SidebarCategoryItem = styled.p`

margin: ${({ theme }) => theme.spaces.m}px 0 0 0;
font-size: ${({ theme }) => theme.fontSizes.s}px;
line-height: ${({ theme }) => theme.fontSizes.s + 10}px;
color: ${({ theme }) => theme.colors.dim};
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
