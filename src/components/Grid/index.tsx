import { useRef, useState } from 'react';
import { duplicateRegenerateSortArray } from '../../utils/arrayFunctions';

import { Card, CardProps } from '../Card';
import * as S from './styles';

export type GridProps = {
  cards: CardProps[];
};

export function Grid({ cards }: GridProps) {
  const [stateCards, setStatesCards] = useState(() => {
    return duplicateRegenerateSortArray(cards);
  });

  const first = useRef<CardProps | null>(null);
  const second = useRef<CardProps | null>(null);
  const unflip = useRef(false);

  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);

  const handleReset = () => {
    setStatesCards(duplicateRegenerateSortArray(cards));
    first.current = null;
    second.current = null;
    unflip.current = false;

    setMatches(0);
    setMoves(0);
  };

  const handleClick = (id: string) => {
    const newStateCards = stateCards.map((card) => {
      if (card.id !== id) return card;

      if (card.flipped) return card;

      if (unflip.current && first.current && second.current) {
        first.current.flipped = false;
        second.current.flipped = false;

        first.current = null;
        second.current = null;
        unflip.current = false;
      }

      card.flipped = true;

      if (first.current === null) {
        first.current = card;
      } else if (second.current === null) {
        second.current = card;
      }

      if (first.current && second.current) {
        if (first.current.back === second.current.back) {
          first.current = null;
          second.current = null;

          setMatches((match) => match + 1);
        } else {
          unflip.current = true;
        }

        setMoves((move) => move + 1);
      }

      return card;
    });

    setStatesCards(newStateCards);
  };

  return (
    <>
      <div className="text">
        <h1>Memory Game</h1>
        <p>
          Moves: {moves} | matches {matches} |{' '}
          <button onClick={handleReset}>Reset</button>
        </p>
      </div>
      <S.Wrapper>
        {stateCards.map((card, index) => (
          <Card key={index} {...card} handleClick={handleClick} />
        ))}
      </S.Wrapper>
    </>
  );
}
