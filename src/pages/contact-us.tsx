import Layout from '../components/layout';

const ContactUsPage = () => {
  return (
    <Layout>
      <div
        css={{
          textAlign: 'center',
          margin: '7rem auto',
          maxWidth: 'var(--page-width)',
        }}>
        <p>
          Should you desire to reach out to us for further insights into this Agreement or have any
          inquiries pertaining to its contents, <br />
          please don't hesitate to get in touch by sending an email to our provided email address.
        </p>
        <p>
          <a href="mailto:info@mysaandco.com.au">info@mysaandco.com.au</a>
        </p>
      </div>
    </Layout>
  );
};

export default ContactUsPage;

export const Head = () => <title>Contact us</title>;
