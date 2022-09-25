import { HeadSeo } from '../components/common';
import {
  Hero,
  Banner,
  Tabs,
  Customers,
  Resources,
  Reviews,
  CTA,
  Investors,
  TopBar,
} from '../components/home';

export default function Home({
  data,
  navItems,
  reviews,
  customers,
  investors,
}) {
  const {
    DAOResourcesHeading,
    DAOResources,
    adminHeading,
    adminCTAText,
    adminCTADestination,
    adminImg1,
    adminImg2,
    adminPoints,
    contributorHeading,
    contributorCTAText,
    contributorCTADestination,
    contributorImg1,
    contributorImg2,
    contributorPoints,
    customersHeading,
    customersSubHeading,
    heroCTADestination,
    heroCTAText,
    heroDesription,
    heroHeading,
    lastSectionDescription,
    lastSectionHeading,
    lastSectionSubHeading,
    lastSectionImg,
    lastSectionCTAText,
    lastSectionCTADestination,
    section1MainHeading,
    section1SubHeading,
    topBarInfo,
  } = data.data.attributes;

  return (
    <>
      <HeadSeo title="Personalised DAO Onboarding" />
      <TopBar topBarInfo={topBarInfo} />
      <Hero
        heroHeading={heroHeading}
        heroDesription={heroDesription}
        heroCTAText={heroCTAText}
        heroCTADestination={heroCTADestination}
        navItems={navItems}
      />
      <Banner
        section1MainHeading={section1MainHeading}
        section1SubHeading={section1SubHeading}
      />
      <Tabs
        adminHeading={adminHeading}
        adminImg1={adminImg1}
        adminImg2={adminImg2}
        adminPoints={adminPoints}
        adminCTAText={adminCTAText}
        adminCTADestination={adminCTADestination}
        contributorHeading={contributorHeading}
        contributorCTAText={contributorCTAText}
        contributorCTADestination={contributorCTADestination}
        contributorImg1={contributorImg1}
        contributorImg2={contributorImg2}
        contributorPoints={contributorPoints}
      />
      <Customers
        customersHeading={customersHeading}
        customersSubHeading={customersSubHeading}
        customers={customers}
      />
      <Resources
        DAOResourcesHeading={DAOResourcesHeading}
        DAOResources={DAOResources}
      />
      <Reviews reviews={reviews} />
      <CTA
        lastSectionSubHeading={lastSectionSubHeading}
        lastSectionHeading={lastSectionHeading}
        lastSectionDescription={lastSectionDescription}
        lastSectionImg={lastSectionImg}
        lastSectionCTAText={lastSectionCTAText}
        lastSectionCTADestination={lastSectionCTADestination}
      />
      <Investors investors={investors} />
    </>
  );
}

export async function getStaticProps() {
  // page data
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/home-page?populate[0]=adminImg1&populate[1]=adminImg2&populate[2]=adminPoints&populate[3]=adminPoints.img&populate[4]=lastSectionImg&populate[5]=DAOResources&populate[6]=DAOResources.logo&populate[7]=contributorImg1&populate[8]=contributorImg2&populate[9]=contributorPoints&populate[10]=contributorPoints.img`
  );
  const data = await res.json();

  // nav data
  const navRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/header?populate[0]=navLinks&populate[1]=navLinks.navLinks2&populate[2]=logo`
  );
  const navData = await navRes.json();

  // reviews data
  const reviewsRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/testimonials?populate=*`
  );
  const reviewsData = await reviewsRes.json();

  // customers data
  const customersRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/customers?populate=*`
  );
  const customersData = await customersRes.json();

  // investors data
  const investorsRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/investors?populate=*`
  );
  const investorsData = await investorsRes.json();

  return {
    props: {
      data,
      navItems: navData?.data?.attributes,
      reviews: reviewsData?.data,
      customers: customersData?.data,
      investors: investorsData?.data,
    },
    revalidate: 1,
  };
}
