import styled from 'styled-components';

import { TextInputProps } from './types';

const VERTICAL_PADDINGS = 10;
const TEXT_COLOR = '#333333';
const PLACEHOLDER_COLOR = 'rgba(51, 51, 51, 0.3)';
const BACKGROUND = '#F2F2F2';
const ERROR_BACKGROUND = '#ffc7c2';

const BORDER_WIDTH = 1;
const BORDER_COLOR = '#BDBDBD';
const BORDER_RADIUS = 8;

const LABEL_COLOR = '#828282';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextInput = styled.input<TextInputProps>`
  font-family: Inter, sans-serif;
  padding: ${VERTICAL_PADDINGS}px ${({ theme }) => theme.spaces.m}px;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  color: ${TEXT_COLOR};
  border-radius: ${BORDER_RADIUS}px;
  background: ${({ error }) => (error ? ERROR_BACKGROUND : BACKGROUND)};
  border: ${BORDER_WIDTH}px solid ${BORDER_COLOR};

  &::placeholder {
    font-weight: bold;
    color: ${PLACEHOLDER_COLOR};
  }
`;

export const Label = styled.label`
  font-family: Inter, sans-serif;
  margin: 0 0 ${({ theme }) => theme.spaces.s}px 0;
  color: ${LABEL_COLOR};
`;

export const ErrorMessageWrap = styled.p`
  color: ${({ theme }) => theme.colors.errorText};
  font-size: 15px;
`;
