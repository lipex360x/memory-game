import * as S from './styles';

export function Card() {
  return (
    <S.Wrapper>
      <div className="content">
        <div className="face front">Front</div>
        <div className="face back">Back</div>
      </div>
    </S.Wrapper>
  );
}
