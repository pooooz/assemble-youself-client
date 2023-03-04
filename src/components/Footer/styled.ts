import styled from 'styled-components';

import footerBackground from 'assets/images/footer-background.jpg';

import { FlexWrap } from 'styled';

const CENTERED_WRAP_MAX_WIDTH = 350;

const TEXT_LINE_HEIGHT = 30;

const COPYRIGHT_BACKGROUND = '#11173B';
const COPYRIGHT_COLOR = '#2A2F56';

export const FlexWrapWithPaddings = styled(FlexWrap)`
  padding: ${({ theme }) => theme.spaces.xl}px;
`;

export const FooterContainer = styled.footer`
  background-image: url(${footerBackground});
`;

export const CenteredWrap = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  justify-items: center;
`;

export const Text = styled.p`
  max-width: ${CENTERED_WRAP_MAX_WIDTH}px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textWithBackground};
  line-height: ${TEXT_LINE_HEIGHT}px;
`;

export const Copyright = styled.section`
  padding: ${({ theme }) => theme.spaces.m}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COPYRIGHT_BACKGROUND};
`;

export const Heading = styled.h4`
  text-transform: uppercase;
  color: ${COPYRIGHT_COLOR};
`;
