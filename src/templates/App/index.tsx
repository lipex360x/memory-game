import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

import { Card } from '../../components/Card';
import { GlobalStyles } from '../../styles/global';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Card />
      </div>

      <GlobalStyles />
    </ThemeProvider>
  );
}
