import React from 'react';

import {
  CourseContainer,
  CourseImage,
  Description,
  GradientLinkWithMargin,
  InfoWrap,
  Tag,
  Title
} from './styled';

import { CourseData } from '../types';

export const CoursePreview = ({
  title,
  tag,
  description,
  startDate
}: CourseData) => (
  <CourseContainer>
    <CourseImage />
    <InfoWrap>
      <Title>{title}</Title>
      <Tag>{tag}</Tag>
      <Description>{description}</Description>
      <GradientLinkWithMargin to="/courses/1">
        Перейти к курсу
      </GradientLinkWithMargin>
    </InfoWrap>
  </CourseContainer>
);
