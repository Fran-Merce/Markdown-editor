import styled from 'styled-components';
export const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1em;
  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const EditorContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 70vh;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    flex: 1;
  }
  /* min-height: 98vh; */
`;
export const Divider = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 1px;
  height: 100%;
  background-color: #B5B2B2;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const AppTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 3rem 0;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin: 2rem 0;
  }
`;
