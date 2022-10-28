import React from 'react';
import styled from 'styled-components';

const LayoutStyled = styled.div`
  min-height: 100vh;
  width: 90%;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;

  @media screen and (max-width: 1024px) {
      border: none;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <LayoutStyled>{children}</LayoutStyled>
);
