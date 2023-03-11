import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const BUTTON_MIN_WIDTH = 200;
const BUTTON_MIN_WIDTH_TABLET = 120;
const BUTTON_MIN_HEIGHT = 60;
const BUTTON_MIN_HEIGHT_TABLET = 40;

const BUTTON_BORDER_WIDTH = 3;
const BUTTON_BORDER_COLOR = '#CCF1FF7F';

const BUTTON_BORDER_RADIUS = 30;

const BUTTON_BACKGROUND = 'linear-gradient(90deg, #6FBCFE 0%, #998DFF 51%, #6FBCFE 100%)';

export const GradientLink = styled(NavLink)`
  min-width: ${BUTTON_MIN_WIDTH}px;
  min-height: ${BUTTON_MIN_HEIGHT}px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.textWithBackground};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  background: ${BUTTON_BACKGROUND};
  border: ${BUTTON_BORDER_WIDTH}px solid ${BUTTON_BORDER_COLOR};
  border-radius: ${BUTTON_BORDER_RADIUS}px;
  text-decoration: none;

  @media screen and ${({ theme }) => theme.device.tablet} {
    min-width: ${BUTTON_MIN_WIDTH_TABLET}px;
    min-height: ${BUTTON_MIN_HEIGHT_TABLET}px;
  }
`;
