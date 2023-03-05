import styled from 'styled-components';

import pc from 'assets/images/pc.png';

import { FlexWrap, GradientLink } from 'styled';

const QUOTE_CONTAINER_MAX_WIDTH = 650;
const QUOTE_CONTAINER_MARGIN_TOP = 130;

const QUOTE_FONT_WEIGHT = 300;
const QUOTE_FONT_SIZE = 35;

const AUTHOR_FONT_WEIGHT = 400;

export const EvenlyFlexWrap = styled(FlexWrap)`
  justify-content: space-evenly;
`;

export const QuoteContainer = styled.div`
  max-width: ${QUOTE_CONTAINER_MAX_WIDTH}px;
  margin: ${QUOTE_CONTAINER_MARGIN_TOP}px 0 0 0;
  display: flex;
  flex-direction: column;
`;

export const Quote = styled.q`
  font-style: italic;
  font-weight: ${QUOTE_FONT_WEIGHT};
  font-size: ${QUOTE_FONT_SIZE}px;
`;

export const GradientLinkWithMargin = styled(GradientLink)`
  width: 50%;
  margin: ${({ theme }) => theme.spaces.xl}px 0 0 0;
`;

export const Author = styled.p`
  margin: ${({ theme }) => theme.spaces.l}px 0 0 0;
  font-weight: ${AUTHOR_FONT_WEIGHT};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  color: ${({ theme }) => theme.colors.heading};
`;

export const PCImage = styled.img.attrs(() => ({
  src: pc,
  alt: 'PC image'
}))`
  display: flex;
`;
