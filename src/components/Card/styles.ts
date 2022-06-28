import styled, { css } from 'styled-components';
import { CardProps } from '../Card';

const WrapperModifier = {
  rotate: () => css`
    transform: rotateY(180deg);
  `,
};

type WrapperProps = Pick<CardProps, 'flipped'>;

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, flipped }) => css`
    width: 100%;
    aspect-ratio: 1/1;
    position: relative;
    font-size: ${theme.font.sizes.large};
    transform-style: preserve-3d;
    transition: transform 600ms ease-in-out;
    cursor: pointer;

    ${flipped && WrapperModifier.rotate()}
    
    .face {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${theme.font.sizes.huge}
    }
    
    .front {
      background: ${theme.colors.darkGray};
      color: ${theme.colors.white};
    }

    .back {
      background: ${theme.colors.secondary};
      color: ${theme.colors.black};
      transform: rotateY(180deg)
    }
  `}
`;
