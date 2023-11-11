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
        <h2>FAQ</h2>
        <h3>I’m after something specific, do you take custom orders?</h3>
        <p>
          We can craft a custom dried flower arrangement tailored to your preferred color scheme and
          home decor. Please email us for more details.
        </p>
        <h3>What kind of dried flowers do we use?</h3>
        <p>
          We use both naturally dried and preserved flowers. Dried flowers are naturally desiccated,
          preserving their original form and structure. Preserved flowers are dried by chemical
          treatment.
        </p>
        <h3>Do dried flowers keep their scent?</h3>
        <p>
          The duration varies depending on the flower or foliage. While most dried flowers tend to
          lose their fragrance during the drying process, specific species like lavender and
          eucalyptus leaves can retain their scent for an extended period.
        </p>
        <h3>What Happens When an Item Is Sold Out?</h3>
        <p>
          Due to the seasonal availability of flowers, our stock changes frequently. If you're
          interested in a specific flower, we recommend purchasing it as it may not return for
          months. If it's unavailable, sign up for our newsletter to be the first to know when it's
          back in stock.
        </p>
        <h3>How do I send flowers as a gift?</h3>
        <p>
          To purchase, just place the flowers in your shopping cart and proceed to the checkout.
          During checkout, there's an option to include a personalized message. We encourage you to
          utilize this feature, even if your message is brief, as it aids in identifying the order
          as a gift. Ensure you enter your recipient's information in the shipping section and your
          own details in the billing section.
        </p>
        <h3>What is your shipping method for flowers? </h3>
        <p>
          Our flowers are shipped in custom boxes with protective cushioning to guarantee the safe
          delivery of your floral arrangements.{' '}
        </p>
        <h3>What are your shipping prices and where do you ship to?</h3>
        <p>
          We ship to most of Australia. Unfortunately, due to environmental control policies, we
          can’t ship to Tasmania. For more details on pricing, please refer to Shipping & Returns.
        </p>
        <h3>How long will my order take to arrive?</h3>
        <p>
          We dispatch all our online orders every Thursday. Custom orders are dispatched within 5
          business days of completion. Please see Shipping & Returns for further information.
        </p>
        <h3>How do I know when the order has arrived to the recipient?</h3>
        <p>
          Tracking notifications can be sent to your personal email address, so that you know when
          your loved one has received their gift.
        </p>
        <h3>Will the invoice be included in the order when it’s a gift?</h3>
        <p>We don’t include an invoice when the order is a gift.</p>
        <h3>Do you offer refunds?</h3>
        <p>
          We cannot offer refunds or exchanges for change of mind due to the product nature. Please
          refer to our Shipping & Returns page for more details.
        </p>
      </div>
    </Layout>
  );
};

export default ShippingReturnsPage;

export const Head = () => <title>Frequently Asked Questions</title>;
