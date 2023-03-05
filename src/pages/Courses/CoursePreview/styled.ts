import styled from 'styled-components';

import courseImage from 'assets/images/course-image.jpg';

import { GradientLink } from 'styled';

const FULL = 100;
const HALF = 50;

const IMAGE_HEIGHT = 200;

const TITLE_FONT_WEIGHT = 500;

const TAG_FONT_SIZE = 12;

const DESCRIPTION_HEIGHT = 130;
const SCROLLBAR_SIZE = 3;
const SCROLLBAR_BORDER_RADIUS = 10;

export const CourseContainer = styled.li`
  display: flex;
  flex-direction: column;
`;

export const CourseImage = styled.img.attrs(() => ({
  src: courseImage,
  alt: 'Course image'
}))`
  display: flex;
  width: ${FULL}%;
  height: ${IMAGE_HEIGHT}px;
  object-fit: cover;
`;

export const InfoWrap = styled.div`
  padding: ${({ theme }) => theme.spaces.l}px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h4`
  font-weight: ${TITLE_FONT_WEIGHT};
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  color: ${({ theme }) => theme.colors.heading};
`;

export const Tag = styled.p`
  margin: ${({ theme }) => theme.spaces.s}px 0 0 0;
  font-size: ${TAG_FONT_SIZE}px;
  color: ${({ theme }) => theme.colors.dim};
`;

export const Description = styled.p`
  height: ${DESCRIPTION_HEIGHT}px;
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

export const GradientLinkWithMargin = styled(GradientLink)`
  width: ${HALF}%;
  margin: ${({ theme }) => theme.spaces.l}px 0 0 0;
`;
