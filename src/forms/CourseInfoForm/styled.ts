import styled from 'styled-components';
import { Form } from 'formik';

import { TextField } from 'fields/TextField';
import { TextAreaField } from 'fields/TextAreaField';

import { GradientButton } from 'styled';

const FIELD_TOP_OFFSET = 14;

const BUTTON_TOP_OFFSET = 30;

export const TextFieldWithMargin = styled(TextField).attrs(() => ({
  containerStyle: {
    marginTop: `${FIELD_TOP_OFFSET}px`
  }
}))``;

export const TextAreaFieldWithMargin = styled(TextAreaField).attrs(() => ({
  containerStyle: {
    marginTop: `${FIELD_TOP_OFFSET}px`
  }
}))``;

export const GradientButtonWithMargin = styled(GradientButton)`
  margin: ${BUTTON_TOP_OFFSET}px 0 0 0;
`;

export const FormWrap = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;
