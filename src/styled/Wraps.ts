import styled from 'styled-components';

const FULL = 100;

export const Wraps = styled.div`
  display: flex;
`;

export const CenteredFullSizeWrap = styled.div`
  display: flex;
  width: ${FULL}%;
  height: ${FULL}%;
  justify-content: center;
  align-items: center;
`;
