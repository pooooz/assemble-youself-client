import React from 'react';

import { List } from 'components/List';

import { Sidebar } from './Sidebar';
import { CoursePreview } from './CoursePreview';
import { CoursesContainer, FlexWrapWithSpaceBetween, GridContainer, Heading, ListContainer } from './styled';
import { coursesMock } from './mocks';

import { FlexWrap, GradientLink } from 'styled';

export const Courses = () => (
  <CoursesContainer>
    <FlexWrapWithSpaceBetween>
      <Heading>Курсы</Heading>
      <GradientLink to="/create-course">Создать курс</GradientLink>
    </FlexWrapWithSpaceBetween>
    <GridContainer>
      <FlexWrap style={{ flexGrow: 2 }}>
        <List
          container={ListContainer}
          data={coursesMock}
          renderItem={(item) => <CoursePreview {...item} />}
        />
      </FlexWrap>
      <Sidebar />
    </GridContainer>
  </CoursesContainer>
);
