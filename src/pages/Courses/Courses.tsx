import React from 'react';

import { List } from 'components/List';

import { Sidebar } from './Sidebar';
import { CoursePreview } from './CoursePreview';
import { CoursesContainer, GridContainer, Heading, ListContainer } from './styled';
import { coursesMock } from './mocks';

import { FlexWrap } from 'styled';

export const Courses = () => (
  <CoursesContainer>
    <Heading>Курсы</Heading>
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
