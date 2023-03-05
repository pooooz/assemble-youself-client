import React from 'react';
import Markdown from 'markdown-to-jsx';

import { mdMock } from './mocks';

export const Course = () => <Markdown>{mdMock}</Markdown>;
