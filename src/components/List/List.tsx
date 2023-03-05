import React from 'react';

import { ListContainer } from './styled';
import { ListProps } from './types';

export const List = <T, >({
  data,
  renderItem,
  container: Container,
  containerStyle
}: ListProps<T>) => {
  console.log('there');

  if (Container) {
    return (
      <Container style={containerStyle}>
        {data.map((itemProps) => renderItem(itemProps))}
      </Container>
    );
  }

  return (
    <ListContainer style={containerStyle}>
      {data.map((itemProps) => renderItem(itemProps))}
    </ListContainer>
  );
};
