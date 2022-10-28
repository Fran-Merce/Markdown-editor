import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: 40vh;
  }
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

export const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  border: none;

`;
