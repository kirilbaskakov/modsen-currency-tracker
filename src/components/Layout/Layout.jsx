import React, { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import LastUpdated from '../LastUpdated/LastUpdated';
import { Body, Container, Main } from './styled';
import Loader from '../Loader/Loader';

const Layout = () => {
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
};

export default Layout;
