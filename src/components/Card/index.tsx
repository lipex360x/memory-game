import { useState } from 'react';
import * as S from './styles';

export type CardProps = {
  id: string;
  back: string;
};

export function Card({ id, back }: CardProps) {
  const [flipped, setFlipped] = useState(false);

  function handleClick() {
    setFlipped(!flipped);
  }

  return (
    <S.Wrapper flipped={flipped} onClick={handleClick}>
      <div className="face front">?</div>
      <div className="face back">{back}</div>
    </S.Wrapper>
  );
}
