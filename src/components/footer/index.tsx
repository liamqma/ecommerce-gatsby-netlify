import React from 'react';
import { css } from '@emotion/css';
import { Link } from 'gatsby';

const linkStyle = css({
  fontSize: '1.4rem',
  color: 'var(--color-1)',
});

const ulStyle = css({
  margin: 0,
  marginBottom: '4rem',
  padding: '0',
  listStyle: 'none',
  '@media screen and (min-width: 750px)': {
    marginBottom: '0',
  },
});

const h2Style = css({
  marginBottom: '2rem',
  marginTop: '0',
  fontSize: 'calc(var(--font-heading-scale) * 1.6rem)',
  '@media screen and (min-width: 990px)': {
    fontSize: 'calc(var(--font-heading-scale) * 1.8rem)',
  },
});

function Footer() {
  return (
    <footer
      css={{
        padding: '33px 25px 24px 25px',
        '@media screen and (min-width: 750px)': {
          paddingBottom: '32px',
          paddingTop: '44px',
        },
      }}>
      <div
        css={{
          maxWidth: 'var(--page-width)',
          margin: '0 auto',
          padding: '0 1.5rem 5rem 1.5rem',
          '@media screen and (min-width: 750px)': {
            padding: '0 5rem 5rem 5rem',
          },
        }}>
        <div
          css={{
            display: 'grid',
            marginBottom: '2rem',
            gridTemplateColumns: '1fr 1fr',
            '@media screen and (min-width: 750px)': {
              gridTemplateColumns: '1fr 1fr 2fr',
            },
          }}>
          <div
            css={{
              gridColumnStart: 1,
              gridColumnEnd: 2,
              gridRowStart: 1,
              gridRowEnd: 2,
            }}>
            <h2 className={h2Style}>Shop</h2>
            <ul className={ulStyle}>
              <li>
                <Link to="/collection/garden-frames" className={linkStyle}>
                  Garden Frames
                </Link>
              </li>
              <li>
                <Link to="/collection/posies" className={linkStyle}>
                  Posies
                </Link>
              </li>
              <li>
                <Link to="/collection/art-frames" className={linkStyle}>
                  Art Frames
                </Link>
              </li>
            </ul>
          </div>
          <div
            css={{
              gridColumnStart: 2,
              gridColumnEnd: 3,
              gridRowStart: 1,
              gridRowEnd: 2,
            }}>
            <ul className={css([ulStyle, { marginTop: '52px' }])}>
              <li>
                <Link to="/contact-us" className={linkStyle}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/#" className={linkStyle}>
                  Caring tips
                </Link>
              </li>
              <li>
                <Link to="/#" className={linkStyle}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div
            css={{
              gridColumnStart: 1,
              gridColumnEnd: 3,
              gridRowStart: 2,
              gridRowEnd: 3,
              '@media screen and (min-width: 750px)': {
                gridColumnStart: 3,
                gridColumnEnd: 5,
                gridRowStart: 1,
                gridRowEnd: 2,
              },
            }}>
            <h2 className={h2Style}>Info</h2>
            <ul className={ulStyle}>
              <li>
                <Link to="/shipping-returns" className={linkStyle}>
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className={linkStyle}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-condition" className={linkStyle}>
                  Service Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        css={{
          borderTop: 'solid 0.1rem var(--color-4)',
          paddingTop: '3rem',
          fontSize: '1.8rem',
          textAlign: 'center',
          width: '100%',
          fontFamily: 'var(--font-heading-family)',
        }}>
        <small>© 2023 MYSA & CO. Sydney, Australia</small>
      </div>
    </footer>
  );
}

export default Footer;
