import * as S from './styles';

export type CardProps = {
  id: string;
  back?: string;
  flipped?: boolean;
  handleClick: (id: string) => void;
};

export function Card({ id, flipped = false, handleClick, back }: CardProps) {
  const handleClickFn = () => handleClick(id);

  return (
    <S.Wrapper flipped={flipped} onClick={handleClickFn}>
      <div className="face front">?</div>
      <div className="face back">{back}</div>
    </S.Wrapper>
  );
}
