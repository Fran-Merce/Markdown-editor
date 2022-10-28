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

const App = () => {
  const [markdownText, setMarkdownText] = useState<string>('');



  const contextValue = {
    markdownText,
    setMarkdownText,
    placeHolder: '# Hello World From Markdown',
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
      </AppContainer>
    </EditorContext.Provider>
  );
};
export default App;
