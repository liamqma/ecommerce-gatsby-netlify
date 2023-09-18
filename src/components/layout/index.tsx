import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import '../../styles/theme.css';
import '../../styles/index.css';
import FullBackgroundImage from '../full-background-image';
import AnnouncementBar from '../announcement-bar';
import Header from '../header';
import Footer from '../footer';
import { useCart } from '../../hooks/cart';

const PersistCart = () => {
  const [{ items }] = useCart();
  useEffect(() => {
    Cookies.set('items', JSON.stringify(items));
  }, [items]);
  return null;
};

function Layout({ isHome = false, children }: { isHome?: boolean; children: React.ReactNode }) {
  return (
    <>
      {isHome && <FullBackgroundImage />}
      <AnnouncementBar />
      <Header isHome={isHome} />
      {children}
      <Footer />
      <PersistCart />
    </>
  );
}

export default Layout;
