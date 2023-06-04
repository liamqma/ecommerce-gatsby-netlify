import React from "react"
import { Link } from "gatsby"
import { css } from '@emotion/css'
import Layout from '../components/layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <div css={{
        textAlign: 'center',
        margin: '7rem auto',
        maxWidth: 'var(--page-width)',
      }}>
        <h1 css={{
          margin: '3rem 0 2rem',
          "@media screen and (min-width: 990px)": {
            margin: '5rem 0 3rem'
          }
        }}>
          Page not found
        </h1>
        <Link to="/" css={{
          marginTop: '1rem',
          fontSize: '1.5rem',
          border: '0',
          padding: '1.5rem 3rem',
          cursor: 'pointer',
          textDecoration: 'none',
          color: 'var(--color-2)',
          backgroundColor: 'var(--color-3)',
          borderRadius: 'var(--buttons-radius-outset)',
          "media screen and (min-width: 750px)": {
            marginTop: '2rem',
          }
        }}>
          Continue shopping
        </Link >
      </div >
    </Layout >
  );
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
