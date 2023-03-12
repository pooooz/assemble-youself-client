import styled from 'styled-components';

import { FlexWrap } from 'styled';

const CONTAINER_HORIZONTAL_OFFSET = 100;
const GRID_CONTAINER_COLUMN_GAP = 40;

const HEADING_FONT_SIZE = 40;

const COURSES_COLUMN_GAP = 100;
const COURSES_COLUMN_GAP_LAPTOP_L = 50;
const COURSES_ROW_GAP = 30;

export const FlexWrapWithSpaceBetween = styled(FlexWrap)`
  justify-content: space-between;
`;

export const CoursesContainer = styled.section`
  padding: 0 ${CONTAINER_HORIZONTAL_OFFSET}px;
  display: flex;
  flex-direction: column;
`;

export const GridContainer = styled.div`
  margin: ${({ theme }) => theme.spaces.xl}px 0 0 0;
  display: grid;
  grid-template-columns: 5fr 1fr;
  column-gap: ${GRID_CONTAINER_COLUMN_GAP}px;
`;

export const Heading = styled.h1`
  font-size: ${HEADING_FONT_SIZE}px;
  color: ${({ theme }) => theme.colors.heading};
`;

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${COURSES_COLUMN_GAP}px;
  row-gap: ${COURSES_ROW_GAP}px;

  @media screen and ${({ theme }) => theme.device.laptopL} {
    column-gap: ${COURSES_COLUMN_GAP_LAPTOP_L}px;
  }

  @media screen and ${({ theme }) => theme.device.tablet} {
    grid-template-columns: 1fr;
  }
`;
