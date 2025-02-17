import React from 'react';
import NavBar from '../NavBar/NavBar.tsx';
import { Container } from 'react-bootstrap';

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <>
      <header className="mb-5">
        <NavBar/>
      </header>

      <main>
        <Container>
          {children}
        </Container>
      </main>
    </>
  );
};

export default Layout;