import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
    max-width: 640px;
    min-width: 320px;
    margin: 0 auto;
  `}
`;
