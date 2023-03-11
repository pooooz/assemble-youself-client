import styled from 'styled-components';

const FULL = 100;

export const FlexWrap = styled.div`
  display: flex;
`;

export const CenteredFullSizeWrap = styled.div`
  display: flex;
  width: ${FULL}%;
  height: ${FULL}%;
  justify-content: center;
  align-items: center;
`;
