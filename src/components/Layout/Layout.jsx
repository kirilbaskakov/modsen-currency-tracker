import React, { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import * as S from './styled';
import LastUpdated from '../LastUpdated/LastUpdated';

const Layout = () => {
  return (
    <S.Body>
      <Header />
      <Hero />
      <LastUpdated />
      <S.Container>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Outlet />
        </Suspense>
        <Footer />
      </S.Container>
    </S.Body>
  );
};

export default Layout;
