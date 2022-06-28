import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.2rem;
  `}
`;
