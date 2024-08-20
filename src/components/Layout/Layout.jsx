import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import LastUpdated from '../LastUpdated/LastUpdated';
import Loader from '../Loader/Loader';
import { Body, Container, Main } from './styled';

function Layout() {
  return (
    <Body>
      <Container>
        <Header />
        <Hero />
        <LastUpdated />
        <Main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Main>
        <Footer />
      </Container>
    </Body>
  );
}

export default Layout;
