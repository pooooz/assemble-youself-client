import React from 'react';

import {
  Author,
  EvenlyFlexWrap,
  GradientLinkWithMargin,
  PCImage,
  Quote,
  QuoteContainer
} from './styled';
import { quoteAuthor, quoteText } from './constants';

export const Home = () => (
  <EvenlyFlexWrap>
    <QuoteContainer>
      <Quote>{quoteText}</Quote>
      <Author>{quoteAuthor}</Author>
      <GradientLinkWithMargin
        to="/courses"
      >
        Перейти к курсам
      </GradientLinkWithMargin>
    </QuoteContainer>
    <PCImage />
  </EvenlyFlexWrap>
);
