import React from 'react';

import { NewsletterForm } from 'forms/NewsletterForm';

import { copyrightText, footerContent } from './constants';
import {
  CenteredWrap,
  Copyright,
  FlexWrapWithPaddings,
  FooterContainer,
  Heading,
  Text
} from './styled';

export const Footer = () => (
  <FooterContainer>
    <FlexWrapWithPaddings>
      <CenteredWrap>
        <Text>{footerContent}</Text>
      </CenteredWrap>
      <CenteredWrap>
        <NewsletterForm />
      </CenteredWrap>
    </FlexWrapWithPaddings>
    <Copyright>
      <Heading>
        {copyrightText}
      </Heading>
    </Copyright>
  </FooterContainer>
);
