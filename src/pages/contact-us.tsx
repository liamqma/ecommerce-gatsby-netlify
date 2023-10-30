import Layout from '../components/layout';

const ContactUsPage = () => {
  return (
    <Layout>
      <div
        css={{
          textAlign: 'center',
          margin: '7rem auto',
          padding: '0 2rem',
          maxWidth: 'var(--page-width)',
        }}>
        <p>
          Your feedback is highly valuable to us, and we are here to assist you with any concerns.
        </p>
        <p>
          Please feel free to reach out to us via email anytime at:
          <br />
          <a href="mailto:info@mysaandco.com.au">info@mysaandco.com.au</a>
        </p>
      </div>
    </Layout>
  );
};

export default ContactUsPage;

export const Head = () => <title>Contact us</title>;
