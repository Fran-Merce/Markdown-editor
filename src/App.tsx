import { useEffect, useState } from 'react';
import {
  AppContainer,
  Title,
  EditorContainer,
  AppTitle,
  Divider,
} from './components/AppStyled';

import { MarkedInput } from './components/MarkedInput/MarkedInput';
import { Output } from './components/Output/Output';
import EditorContext from './context/editorContext';
import './global.css';
import { placeHolder } from './constanst/placeHolder';
import { CheetsheetStyled } from './components/CheetshetStyled';

const App = () => {
  const [markdownText, setMarkdownText] = useState<string>('');

  const contextValue = {
    markdownText,
    setMarkdownText,
    placeHolder,
  };

  return (
    <EditorContext.Provider value={contextValue}>
      <AppContainer>
        <AppTitle>Markdown Editor</AppTitle>
        <EditorContainer>
          <MarkedInput />
          <Divider />
          <Output />
        </EditorContainer>
        <CheetsheetStyled>
          <a href='https://www.markdownguide.org/cheat-sheet/' target='_blanck'>
            no sabes markdown ?{' '}
          </a>
        </CheetsheetStyled>
      </AppContainer>
    </EditorContext.Provider>
  );
};
export default App;
