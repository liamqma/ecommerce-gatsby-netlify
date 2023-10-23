import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/css';
import Layout from '../components/layout';
import { useCart } from '../hooks/cart';

const ThankYouPage = () => {
  const [, { removeItems }] = useCart();

  useEffect(() => {
    removeItems();
  }, [removeItems]);

  return (
    <Layout>
      <div
        css={{
          textAlign: 'center',
          margin: '7rem auto',
          maxWidth: 'var(--page-width)',
        }}>
        <h1
          css={{
            margin: '3rem 0 2rem',
            '@media screen and (min-width: 990px)': {
              margin: '5rem 0 3rem',
            },
          }}>
          Thank you for your order.
        </h1>
        <p>We are processing your oder. We will be sending you a receipt via email shortly.</p>
      </div>
    </Layout>
  );
};

export default ThankYouPage;

export const Head = () => <title>Thank you for your purchase</title>;
