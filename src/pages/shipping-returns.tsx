import Layout from '../components/layout';

const ShippingReturnsPage = () => {
  return (
    <Layout>
      <div
        css={{
          margin: '7rem auto',
          padding: '0 5rem',
          maxWidth: 'var(--page-width)',
        }}>
        <h2>Shipping Information</h2>
        <p>
          At MYSA AND CO, we proudly deliver our products across Australia (excluding Tasmania),
          utilizing the reliable services of Australia Post. To make things clear and convenient for
          you, here's a breakdown of our shipping options and associated fees:
        </p>
        <p>
          <b>Express Post for orders under $200 (1-3 business days): $10</b>
          <br />
          <b>Express Post for orders over $200 (1-3 business days): FREE</b>
        </p>
        <p>
          Each parcel is equipped with tracking capabilities, and rest assured, we'll furnish you
          with a tracking number when your order is ready for dispatch.
        </p>
        <p>
          For your peace of mind, please note that MYSA & CO doesn't mandate a signature upon
          delivery. However, Australia Post will reach out to you via SMS or Email to secure your
          permission for either safe delivery or collection at your local post office. If you wish
          to elevate your shipping experience by adding extra protection against loss or opting for
          a signature on delivery before your order heads out, kindly send us an email immediately
          after placing your order. Please be aware that this enhancement will incur additional
          charges.
        </p>
        <h2>Returns & Refunds Policy</h2>
        <p>
          At MYSA & CO, we regret to inform you that, given the nature of our products, we cannot
          facilitate returns or exchanges for cases of a change of mind. However, if your item
          arrives in a damaged condition, we kindly request you to share a photo of the damaged
          product along with your order number. This information will enable us to assess the
          situation before proceeding with sending a new product. For the replacing process to
          proceed, we will need a valid receipt, purchase order, or any other substantiating proof
          of purchase. Without this essential proof, regrettably, we won't be able to issue a
          replacement.
        </p>
        <p>
          Please bear in mind that we cannot accept responsibility in the event of your parcel going
          missing during transit. Once we dispatch your orders, the shipping timeline, any delays,
          and unforeseen errors fall beyond our sphere of control. Nonetheless, we remain committed
          to providing our best support within our capacity should such a situation arise.
        </p>
      </div>
    </Layout>
  );
};

export default ShippingReturnsPage;

export const Head = () => <title>Shipping and Returns</title>;
