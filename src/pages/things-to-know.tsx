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
        <h2>Things to Know</h2>
        <h3>How Long Do Dried Flowers Last?</h3>
        <p>
          Caring for your dried flowers can preserve their lifespan longer. The longevity of your
          preserved and dried flowers hinges on their storage conditions. When kept out of direct
          sunlight, wind and humidity, dried flowers last for 1 to 5 years.{' '}
        </p>
        <h3>How do I care for Dried Flowers?</h3>
        <p>
          Here are our foremost recommendations for preserving the pristine appearance of your
          blooms:
        </p>
        <ul>
          <li>Abstain from watering, as it's unnecessary.</li>
          <li>
            Exercise gentle handling, given their delicate nature and propensity for shedding.
          </li>
          <li>Shield them from direct sunlight, high humidity, and gusts of wind.</li>
          <li>
            Keep them dust-free (a gentle, cool, and low setting on a hairdryer can be used for this
            purpose).
          </li>
        </ul>
        <h3>Do Dried Flowers go mouldy?</h3>
        <p>
          Regrettably, that's a possibility. Improper storage can lead to mold developing on your
          dried flowers.
        </p>
        <p>
          While they demand very little maintenance, exposure to moisture and high humidity can
          result in mold growth.
        </p>
        <p>
          We understand the desire to adorn your home with an array of dried floral arrangements (we
          share that sentiment), but we strongly advise against placing them in areas prone to
          dampness.
        </p>
        <p>
          Avoid locations like your bathroom or a windowsill during the peak of winter when
          condensation tends to form on the glass.
        </p>
        <p>
          Should you choose to decorate your bathroom with dried blooms, bear in mind that over
          time, they may succumb to mold due to their inability to withstand the humidity and
          condensation (we've tested it).
        </p>
        <h3>Do Dried Flowers lose their colour?</h3>
        <p>
          When stored properly in your home, your dried flowers should maintain their vibrant colors
          over an extended period. However, after a few years, if the flowers have not been dyed,
          their colors may begin to fade. The best way to avoiding fading is to place your flowers
          away from direct sunlight.
        </p>
      </div>
    </Layout>
  );
};

export default ShippingReturnsPage;

export const Head = () => <title>Things to Know</title>;
