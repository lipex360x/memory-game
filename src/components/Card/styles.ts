import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .content {
      position: relative;
      width: 100px;
      height: 100px;
      background: red;
      font-size: ${theme.font.sizes.medium}
    }

    .face {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .front {
      background: blue;
    }

    .back {
      background: pink;
    }
  `}
`;
