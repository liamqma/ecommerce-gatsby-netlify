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
        <h2>Disclaimer</h2>
        <p>
          This disclaimer outlines the general guidelines, disclosures, and terms of your use of the
          mysaandco.com.au website and any of its related products and services. This Disclaimer is
          a legally binding agreement between you and Mysa & Co. By accessing and using the Website
          and Services, you acknowledge that you have read, understood, and agree to be bound by the
          terms of this Disclaimer. If you are entering into this Disclaimer on behalf of a business
          or other legal entity, you represent that you have the authority to bind such an entity to
          this Disclaimer, in which case the terms "User," "you," or "your" shall refer to such an
          entity. If you do not have such authority, or if you do not agree with the terms of this
          Disclaimer, you must not accept this Disclaimer and may not access and use the Website and
          Services. You acknowledge that this Disclaimer is a contract between you and Mysa & Co.,
          even though it is electronic and is not physically signed by you, and it governs your use
          of the Website and Services.
        </p>
        <h3>Representation</h3>
        <p>
          Any perspectives or opinions expressed on the Website are personal in nature and are the
          sole views of Mysa & Co. They do not purport to represent the perspectives of individuals,
          institutions, or organizations, whether professionally or personally associated with Mysa
          & Co., unless explicitly stated. These perspectives and opinions are not intended to
          disparage any religion, ethnic group, club, organization, company, or individual.
        </p>
        <h3>Content and Submissions</h3>
        <ul>
          <li>
            You are prohibited from altering, printing, or duplicating any section of the Mysa & Co.
            Website and Services. Unauthorized inclusion of any part of the Mysa & Co. Website and
            Services within another work, whether in printed, electronic, or any other form, or
            inclusion on another platform through methods such as embedding, framing, or other
            means, without explicit permission from Mysa & Co., is strictly forbidden.
          </li>
          <li>
            You have the ability to submit new content and comment on existing content found on the
            Mysa & Co. Website. By uploading or making any information available to Mysa & Co., you
            grant Mysa & Co. an unrestricted, perpetual license to distribute, display, publish,
            reproduce, reuse, and copy the information therein. Impersonation of another individual
            on the Website and Services is not allowed. Posting defamatory, fraudulent, obscene,
            threatening, privacy-invading, or otherwise unlawful content is prohibited. You may not
            post content that infringes upon the intellectual property rights of any other
            individual or entity, or includes computer viruses or other malicious code intended to
            disrupt, damage, or impede the functioning of computer software or hardware. Mysa & Co.
            reserves the right to edit or remove any content submitted or posted on the Website at
            any time and for any reason.
          </li>
        </ul>
        <h3>Compensation and Sponsorship</h3>
        <p>
          Mysa & Co.'s Website and Services may feature sponsorship arrangements, paid placements,
          or other compensation methods. There may be instances where Mysa & Co. is remunerated for
          offering viewpoints on products, services, or various other subjects. Notwithstanding any
          compensation received for advertising, the opinions, discoveries, convictions, or
          experiences regarding those subjects or products are sincere and uninfluenced by
          advertisers or sponsors. The opinions expressed on the Website solely belong to Mysa & Co.
          Any assertions about products or services, including but not limited to product claims,
          statistics, quotes, or other representations, should be independently verified with the
          manufacturer, service provider, or relevant party. Sponsored content and advertising space
          will always be clearly identified as such. The Website may include "affiliate links"
          where, if you click on the link and make a purchase, Mysa & Co. will earn an affiliate
          commission.
        </p>
        <h3>Reviews and Testimonials</h3>
        <p>
          At Mysa & Co., we collect testimonials in diverse formats using a range of submission
          methods. It's important to note that these testimonials may not be fully representative of
          all individuals using our Website and Services. Mysa & Co. cannot be held accountable for
          the opinions or comments found on the Website and does not necessarily endorse them.
          Please be aware that all opinions expressed are solely those of the reviewers.
        </p>
        <p>
          The testimonials presented are displayed verbatim, except for corrections of grammatical
          or typographical errors. In some instances, testimonials may have undergone editing for
          the sake of clarity or brevity, particularly when the original testimonials contained
          irrelevant information for the general public. Please note that testimonials might be
          subject to authenticity checks before they are made publicly accessible.
        </p>
        <h3>Indemnification and Warranties</h3>
        <p>
          At Mysa & Co., we've taken extensive measures to ensure the accuracy of the information
          presented on the Website. However, we cannot be held responsible for any errors or
          omissions, or for the outcomes resulting from the utilization of this information. All
          data on the Website is provided "as is," with no assurances regarding its
          comprehensiveness, correctness, timeliness, or the outcomes derived from its use.
          Furthermore, there is no warranty, either expressed or implied, in connection with this
          information. Mysa & Co. will not, under any circumstances, be liable for any decisions or
          actions taken based on the information presented on the Website, nor for any subsequent,
          special, or related damages, even if such consequences were anticipated. The information
          available on the Website is intended for general informational purposes exclusively and
          does not constitute professional advice of any kind. If you find yourself in need of
          professional guidance, we strongly recommend seeking assistance from qualified experts.
          It's crucial to note that information on the Website is subject to change at any time and
          may be updated without prior notice.
        </p>
        <h3>Changes and Amendments</h3>
        <p>
          At Mysa & Co., we maintain the right to alter this Disclaimer or its provisions concerning
          the Website and Services at any given time. Such modifications will be effective
          immediately upon posting an updated version of this Disclaimer on the Website. To reflect
          these changes, we will revise the "updated" date at the bottom of this page.
        </p>
        <p>
          By continuing to use the Website and Services after such revisions, you indicate your
          acknowledgment and acceptance of the modified Disclaimer and its terms. It is your
          responsibility to stay informed about the most current version of this Disclaimer to
          ensure compliance with its provisions.
        </p>
        <h3>Acknowledgment of this Disclaimer</h3>
        <p>
          By utilizing the Website and Services, you admit to having perused this Disclaimer and
          consenting to its complete terms and conditions. Your access to and use of the Website and
          Services constitutes your consent to be legally bound by this Disclaimer. If you do not
          concur with the stipulations outlined in this Disclaimer and opt not to comply with them,
          you are not granted the authority to access or utilize the Website and Services.
        </p>
      </div>
    </Layout>
  );
};

export default ShippingReturnsPage;

export const Head = () => <title>Shipping and Returns</title>;
