import { useContext } from 'react';
import editorContext from '../../context/editorContext';
import { Title } from '../AppStyled';
import { Container, TextArea } from './MakedInputStyled';

type inputChangeI = React.ChangeEvent<HTMLTextAreaElement>;

export const MarkedInput = () => {
  const { setMarkdownText, placeHolder } = useContext(editorContext);

  const onInputChange = (e: inputChangeI) => {
    const newValue = e.currentTarget.value;
    setMarkdownText(newValue);
  };

  return (
    <Container>
      <Title>Markdown Input</Title>
      <TextArea onChange={onInputChange} placeholder={placeHolder} />
    </Container>
  );
};
