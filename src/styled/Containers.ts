import styled from 'styled-components';

const FULL = 100;
const AUTH_FORM_WIDTH = 25;
const AUTH_FORM_WIDTH_LAPTOP_L = 40;
const AUTH_FORM_WIDTH_TABLET = 50;

const AUTH_FORM_BACKGROUND_RADIUS = 16;

const AUTH_FORM_SHADOW_OFFSET = 5;
const AUTH_FORM_SHADOW_COLOR = 'rgba(0, 0, 0, 0.5)';

export const FormContainer = styled.section`
  width: ${AUTH_FORM_WIDTH}%;
  padding:
    ${({ theme }) => theme.spaces.m}px
    ${({ theme }) => theme.spaces.xl}px
    ${({ theme }) => theme.spaces.xl}px
    ${({ theme }) => theme.spaces.xl}px;
  border-radius: ${AUTH_FORM_BACKGROUND_RADIUS}px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow:
    ${AUTH_FORM_SHADOW_OFFSET}px
    ${AUTH_FORM_SHADOW_OFFSET}px
    ${AUTH_FORM_SHADOW_OFFSET}px
    ${AUTH_FORM_SHADOW_OFFSET}px
    ${AUTH_FORM_SHADOW_COLOR};

  @media screen and ${({ theme }) => theme.device.laptopL} {
    width: ${AUTH_FORM_WIDTH_LAPTOP_L}%;
  }

  @media screen and ${({ theme }) => theme.device.tablet} {
    width: ${AUTH_FORM_WIDTH_TABLET}%;
  }
  
  @media screen and ${({ theme }) => theme.device.mobileL} {
    width: ${FULL}%;
  }
`;
