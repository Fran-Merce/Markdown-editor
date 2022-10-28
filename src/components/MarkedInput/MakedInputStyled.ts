import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  min-height: max-content;
  padding: 13px;

  @media screen and (max-width: 768px) {
    min-height: 40vh;
    width: 100%;
  }
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
`;
