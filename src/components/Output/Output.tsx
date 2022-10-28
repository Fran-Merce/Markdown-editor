import React from 'react';
import { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import editorContext from '../../context/editorContext';
import { Title } from '../AppStyled';
import { Container, ResultArea } from './OutputStyled';

export const Output = () => {
  const { markdownText,placeHolder } = useContext(editorContext);
  // const placeHolder = '# Hello World From Markdown';
  
  return (
    <Container>
      <Title>Converted Output</Title>
      <ResultArea>
        <ReactMarkdown>
          {markdownText ? markdownText : placeHolder}
        </ReactMarkdown>
      </ResultArea>
    </Container>
  );
};
