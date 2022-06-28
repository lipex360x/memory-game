import { useState } from 'react';
import { duplicateRegenerateSortArray } from '../../utils/arrayFunctions';

import { Card } from '../Card';
import * as S from './styles';

export type GridProps = {
  cards: CardProps[];
};

type CardProps = {
  id: string;
  flipped: boolean;
};

export function Grid({ cards }: GridProps) {
  const [stateCards, setStatesCards] = useState(() => {
    return duplicateRegenerateSortArray(cards);
  });

  return (
    <S.Wrapper>
      {stateCards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </S.Wrapper>
  );
}
