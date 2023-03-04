import styled from 'styled-components';
import { Form } from 'formik';

import { TextField } from 'fields/TextField';

import { GradientButton } from 'styled';

const HALF = 50;

export const FormWrap = styled(Form)`
  display: flex;
  width: ${HALF}%;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Title = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  color: ${({ theme }) => theme.colors.textWithBackground};
`;

export const TextFieldWithMargin = styled(TextField).attrs(() => ({
  style: {
    marginTop: '10px'
  }
}))``;

export const GradientButtonWithMargin = styled(GradientButton)`
  margin: ${({ theme }) => theme.spaces.m}px 0 0 0;
`;
