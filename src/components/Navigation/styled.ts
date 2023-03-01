import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ANIMATION_TRANSITION_TIME = 500;

const NAVIGATION_MIN_WIDTH = 30;
const LINK_FONT_WEIGHT = 700;

export const NavigationContainer = styled.ul`
  width: ${NAVIGATION_MIN_WIDTH}%;
  display: flex;
  list-style: none;
  justify-content: space-evenly;
`;

export const NavElement = styled.li`
  margin: 0 0 0 0;
`;

export const Link = styled(NavLink)`
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${LINK_FONT_WEIGHT};
  text-decoration: none;
  text-transform: uppercase;

  transition: color ${ANIMATION_TRANSITION_TIME}ms;
  
  &.active {
    color: ${({ theme }) => theme.colors.activeLink}
  }
  
  &.active::after {
    position: absolute;
    content: '';
    height: 3px;
    bottom: -7px;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 100%;
    background: ${({ theme }) => theme.colors.activeLink}
  }
`;
