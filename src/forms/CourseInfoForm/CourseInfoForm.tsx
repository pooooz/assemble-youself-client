import React from 'react';
import { Formik } from 'formik';

import { validationSchema } from './validationSchema';
import {
  FormWrap,
  GradientButtonWithMargin,
  Heading,
  TextAreaFieldWithMargin,
  TextFieldWithMargin
} from './styled';
import { CourseInfoFormValues } from './types';

import { CenteredFullSizeWrap, FormContainer } from 'styled';

export const CourseInfoForm = () => {
  const initialValues: CourseInfoFormValues = {
    course_name: '',
    tag: '',
    cover_url: '',
    description: '',
    start_date: new Date(),
    end_date: new Date(),
    course_program: []
  };

  const handleSubmit = (values: CourseInfoFormValues) => {
    console.log(JSON.stringify(values, null, 2));
  };

  return (
    <CenteredFullSizeWrap>
      <FormContainer>
        <Formik<CourseInfoFormValues>
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors }) => (
            <FormWrap>
              <Heading>Информация о курсе</Heading>
              <TextFieldWithMargin
                label="Имя"
                name="course_name"
                placeholder="Введите название курса"
                error={Boolean(touched.course_name && errors.course_name)}
                errorMessage={errors.course_name}
                required
              />
              <TextFieldWithMargin
                label="Тэг"
                name="tag"
                placeholder="Введите тэг курса"
                error={Boolean(touched.tag && errors.tag)}
                errorMessage={errors.tag}
                required
              />
              <TextFieldWithMargin
                label="Ссылка на обложку курса"
                name="cover_url"
                placeholder="Введите ссылку на обложку курса"
                error={Boolean(touched.cover_url && errors.cover_url)}
                errorMessage={errors.cover_url}
                required
              />
              <TextAreaFieldWithMargin
                label="Описание курса"
                name="description"
                placeholder="Введите описание курса"
                error={Boolean(touched.description && errors.description)}
                errorMessage={errors.description}
                required
              />
              <GradientButtonWithMargin
                type="submit"
              >
                Создать
              </GradientButtonWithMargin>
            </FormWrap>
          )}
        </Formik>
      </FormContainer>
    </CenteredFullSizeWrap>
  );
};
