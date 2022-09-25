import { HeadSeo } from '../components/common';
import {
  Hero,
  Banner,
  Customers,
  Services,
  CTA,
} from '../components/community';

const Community = ({ data, navItems, customers }) => {
  const {
    heroSubHeading,
    heroHeading,
    heroDescription,
    heroCTAText,
    heroCTADestination,
    section1SubHeading,
    section1Heading,
    section1LastHeading,
    section2Heading,
    section3Heading,
    section2Points,
    lastSectionHeading,
    lastSectionDescription,
    lastSectionCTAText,
    lastSectionCTADestination,
  } = data.data.attributes;

  return (
    <>
      <HeadSeo title={heroHeading} description={heroDescription} />
      <Hero
        navItems={navItems}
        heroSubHeading={heroSubHeading}
        heroHeading={heroHeading}
        heroDescription={heroDescription}
        heroCTAText={heroCTAText}
        heroCTADestination={heroCTADestination}
      />
      <Banner
        section1SubHeading={section1SubHeading}
        section1Heading={section1Heading}
        section1LastHeading={section1LastHeading}
      />
      <Customers customers={customers} section2Heading={section2Heading} />
      <Services
        section3Heading={section3Heading}
        section2Points={section2Points}
      />
      <CTA
        lastSectionHeading={lastSectionHeading}
        lastSectionDescription={lastSectionDescription}
        lastSectionCTAText={lastSectionCTAText}
        lastSectionCTADestination={lastSectionCTADestination}
      />
    </>
  );
};

export default Community;

export async function getStaticProps() {
  // page data
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/community-page?populate[0]=section2Points&populate[1]=section2Points.img`
  );
  const data = await res.json();

  // nav data
  const navRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/header?populate=*`
  );
  const navData = await navRes.json();

  // customer data
  const customerRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/customers?populate=*`
  );
  const customerData = await customerRes.json();

  return {
    props: {
      data,
      navItems: navData?.data?.attributes,
      customers: customerData?.data,
    },
    revalidate: 1,
  };
}
