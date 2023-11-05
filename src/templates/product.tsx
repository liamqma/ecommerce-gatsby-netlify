import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import { navigate } from 'gatsby';

import Layout from '../components/layout';
import { type Product } from '../data/products';
import { useCart } from '../hooks/cart';
import meta from '../data/meta';

function ProductTemplate({ pageContext }: { pageContext: { product: Product } }) {
  const [_, { addItem }] = useCart();
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const { product } = pageContext;
  const [selectedPriceId, setSelectedPriceId] = useState(product?.prices[0].id);
  if (!product) throw new Error('Product not found');

  const price = product.prices.find((p) => p.id === selectedPriceId);
  if (!price || !selectedPriceId) throw new Error('Price not found');

  const onAddToCartClick = () => {
    addItem(selectedPriceId);
    Swal.fire({
      text: `${product.name} has been added to your cart.`,
      icon: 'success',
      confirmButtonColor: '#545454',
      confirmButtonText: 'VIEW MY CART',
      cancelButtonText: 'CONTINUE SHOPPING',
      cancelButtonColor: '#a2a28a',
      showCancelButton: true,
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/cart');
      }
    });
  };

  const onSelectPrice = (priceId: string) => {
    const selectedPrice = product.prices.find((p) => p.id === priceId);
    if (selectedPrice) {
      const selectedImageIndex = product.images.findIndex((image) =>
        image.includes(selectedPrice.nickname)
      );
      if (selectedImageIndex >= 0) {
        setImageIndex(selectedImageIndex);
      }
    }

    setSelectedPriceId(priceId);
  };

  return (
    <Layout>
      <section
        css={{
          paddingTop: '30px',
          paddingBottom: '0px',
          maxWidth: 'var(--page-width)',
          margin: '0 auto',
          padding: '0 1.5rem',
          '@media screen and (min-width: 750px)': {
            padding: '40px 5rem 0',
          },
        }}>
        <div
          ref={imageWrapperRef}
          css={{
            display: 'flex',
            flexWrap: 'wrap',
          }}>
          <div
            css={{
              maxWidth: '100%',
              width: '100%',
              '@media screen and (min-width: 750px)': {
                width: 'calc(50% - var(--grid-desktop-horizontal-spacing)/2)',
              },
              '@media screen and (min-width: 990px)': {
                maxWidth: '65%',
                width: 'calc(65% - var(--grid-desktop-horizontal-spacing)/2)',
              },
            }}>
            <div
              onMouseMove={(e) => {
                if (imageWrapperRef.current && imageRef.current) {
                  const transformOrigin =
                    ((e.pageX - imageWrapperRef.current.offsetLeft) /
                      imageWrapperRef.current.getBoundingClientRect().width) *
                      100 +
                    '% ' +
                    ((e.pageY - imageWrapperRef.current.offsetTop) /
                      imageWrapperRef.current.getBoundingClientRect().height) *
                      100 +
                    '%';
                  imageRef.current.style.transformOrigin = transformOrigin;
                }
              }}
              css={{
                width: '100%',
                overflow: 'hidden',
                borderRadius: '10px',
                border: '2px solid var(--color-1)',
              }}>
              <img
                ref={imageRef}
                src={product.images[imageIndex]}
                loading="lazy"
                alt={`${product.name} main`}
                css={{
                  display: 'block',
                  width: '100%',
                  transition: 'transform 0.5s ease-out 0.2s',
                  ':hover': {
                    transform: 'scale(1.6)',
                  },
                }}
              />
            </div>
            <ul
              css={{
                display: 'flex',
                flexWrap: 'wrap',
                margin: 0,
                marginBottom: '2rem',
                marginTop: 'var(--grid-mobile-vertical-spacing)',
                padding: '0',
                listStyle: 'none',
                columnGap: 'var(--grid-mobile-horizontal-spacing)',
                rowGap: 'var(--grid-mobile-vertical-spacing)',
                '@media screen and (min-width: 750px)': {
                  columnGap: '38px',
                  rowGap: 'var(--grid-desktop-vertical-spacing)',
                  marginTop: 'var(--grid-desktop-vertical-spacing)',
                },
              }}>
              {product.images.map((image, index) => (
                <li
                  key={index}
                  onClick={() => setImageIndex(index)}
                  css={{
                    width: 'calc((100% - 38px * 3) / 4)',
                  }}>
                  <div
                    css={{
                      paddingTop: '130%',
                      width: '100%',
                      position: 'relative',
                    }}>
                    <img
                      src={image}
                      loading="lazy"
                      css={{
                        display: 'block',
                        maxWidth: '100%',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        cursor: 'pointer',
                        borderRadius: '10px',
                        border: '2px solid var(--color-1)',
                        ...(index === imageIndex && { borderColor: 'var(--color-3)' }),
                      }}
                      alt={`${product.name} (${index + 1})`}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div
            css={{
              maxWidth: '100%',
              width: '100%',
              paddingLeft: '0',
              paddingBottom: '0',
              flexGrow: '1',
              flexShrink: '0',
              '@media screen and (min-width: 750px)': {
                width: 'calc(50% - var(--grid-desktop-horizontal-spacing) / 2)',
                paddingLeft: '5rem',
                maxWidth: 'calc(50% - var(--grid-desktop-horizontal-spacing) / 2)',
              },
              '@media screen and (min-width: 990px)': {
                paddingLeft: '4rem',
                maxWidth: '35%',
                width: 'calc(35% - var(--grid-desktop-horizontal-spacing) / 2)',
              },
            }}>
            <div
              css={{
                '@media screen and (min-width: 750px)': {
                  display: 'block',
                  position: 'sticky',
                  top: '3rem',
                  zIndex: '2',
                  maxWidth: '60rem',
                },
              }}>
              <h1
                css={{
                  wordBreak: 'break-word',
                  marginBottom: '0',
                  '@media screen and (min-width: 750px)': {
                    marginTop: '0',
                  },
                }}>
                {product.name}
              </h1>
              <div
                css={{
                  fontSize: '1.6rem',
                  lineHeight: 'calc(1 + 0.5 / var(--font-body-scale))',
                  letterSpacing: '0.13rem',
                  margin: '1.5rem 0',
                  '@media screen and (min-width: 750px)': {
                    fontSize: '1.8rem',
                  },
                }}>
                ${price.unit_amount.toFixed(2)} AUD
              </div>
              {product.prices.length > 1 && (
                <select
                  defaultValue={selectedPriceId}
                  onChange={(event) => onSelectPrice(event.target.value)}
                  css={{
                    width: '100%',
                    borderRadius: '40px',
                    padding: '1.6rem 2rem',
                    fontSize: '1.4rem',
                    appearance: 'none',
                    color: 'var(--color-1)',
                    border: 0,
                    backgroundImage:
                      'linear-gradient(45deg, transparent 50%, var(--color-3) 50%), linear-gradient(135deg, var(--color-3) 50%, transparent 50%), linear-gradient(to right, var(--color-4), var(--color-4))',
                    backgroundPosition:
                      'calc(100% - 20px) calc(1.5em + 2px), calc(100% - 15px) calc(1.5em + 2px),100% 0',
                    backgroundSize: '5px 5px, 5px 5px, 2.5em 3.5em',
                    backgroundRepeat: 'no-repeat',
                  }}>
                  {product.prices.map((price) => (
                    <option value={price.id} key={price.id}>
                      {price.nickname || price.unit_amount.toFixed(2)}
                    </option>
                  ))}
                </select>
              )}
              <button
                onClick={onAddToCartClick}
                type="button"
                css={{
                  margin: '1.5rem 0',
                  marginBottom: '1rem',
                  display: 'flex',
                  width: '100%',
                  fontSize: '1.5rem',
                  letterSpacing: '0.1rem',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: 0,
                  cursor: 'pointer',
                  font: 'inherit',
                  color: 'var(--color-3)',
                  backgroundColor: 'var(--color-4)',
                  minHeight: 'calc(4.5rem + var(--buttons-border-width) * 2)',
                  borderRadius: 'var(--buttons-radius-outset)',
                  transition: 'transform .5s ease',
                  ':hover': {
                    transform: 'scale(1.02)',
                  },
                }}>
                Add to cart
              </button>
              <div
                css={{
                  margin: '2.5rem 0',
                }}
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
              {product.metadata && (
                <ul>
                  {Object.entries(product.metadata).map((metadata) => {
                    const [key, value] = metadata;
                    return (
                      <li key={key}>
                        {key}: {value}
                      </li>
                    );
                  })}
                </ul>
              )}
              <p>
                At times, particular flowers or foliage may be temporarily unavailable. We then will
                introduce alternative natural wonders in their stead.
              </p>
              <p>Photos and meaurements are for reference only.</p>
            </div>
          </div>
        </div>
      </section>
      <div
        css={{
          maxWidth: 'var(--page-width)',
          margin: '0 auto',
          padding: '42px 1.5rem 27px 1.5rem',
          '@media screen and (min-width: 750px)': {
            padding: '56px 5rem 36px 5rem',
          },
        }}>
        <ul
          css={{
            margin: '0',
            padding: '0',
            display: 'flex',
            listStyle: 'none',
            columnGap: 'var(--grid-mobile-horizontal-spacing)',
            rowGap: 'var(--grid-mobile-vertical-spacing)',
            '@media screen and (min-width: 750px)': {
              columnGap: 'var(--grid-desktop-horizontal-spacing)',
              rowGap: 'var(--grid-desktop-vertical-spacing)',
            },
          }}>
          <li
            css={{
              flexBasis: '50%',
            }}>
            <div
              css={{
                padding: '2.5rem',
              }}>
              <h3>Shipping</h3>
              <p>
                At Mysa & Co., we proudly deliver our products across Australia（excluding
                Tasmania）, utilizing the reliable services of Australia Post. To make things clear
                and convenient for you, here's a breakdown of our shipping options and associated
                fees:
              </p>
              <p>
                <b>Express Post for orders under $200: $10</b>
                <br />
                <b>Express Post for orders over $200: FREE</b>
              </p>
              <p>
                Each parcel is equipped with tracking capabilities, and rest assured, we'll furnish
                you with a tracking number when your order is ready for dispatch.
              </p>
            </div>
          </li>
          <li
            css={{
              flexBasis: '50%',
            }}>
            <div
              css={{
                padding: '2.5rem',
              }}>
              <h3>Returns</h3>
              <p>
                At Mysa & Co., we regret to inform you that, given the nature of our products, we
                cannot facilitate returns or exchanges for cases of a change of mind. However, if
                your item arrives in a damaged condition, we kindly request you to share a photo of
                the damaged product along with your order number. This information will enable us to
                assess the situation before proceeding with sending a new product. For the replacing
                process to proceed, we will need a valid receipt, purchase order, or any other
                substantiating proof of purchase. Without this essential proof, regrettably, we
                won't be able to issue a replacement.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export default ProductTemplate;

export function Head({ pageContext }: { pageContext: { product: Product } }) {
  return <title>{`Buy ${pageContext.product.name} | ${meta.title}`}</title>;
}
