import { ThemeProvider } from 'styled-components';

import * as S from './styles';
import theme from '../../styles/theme';

import { Grid } from '../../components/Grid';
import { cards } from '../../data/cards';
import { GlobalStyles } from '../../styles/global';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <S.Wrapper>
        <Grid cards={cards} />
      </S.Wrapper>

      <GlobalStyles />
    </ThemeProvider>
  );
}
