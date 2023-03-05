import React from 'react';
import { StyledComponent } from 'styled-components';

export interface ListProps<T> {
  data: Array<T>;
  renderItem: (itemProps: T) => React.ReactElement;
  container?: StyledComponent<any, any>;
  containerStyle?: React.CSSProperties;
}
