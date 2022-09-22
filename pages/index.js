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

export default function Home({ data }) {
  const {
    DAOResourcesHeading,
    DAOResources,
    adminHeading,
    adminImg1,
    adminImg2,
    adminCTAText,
    adminCTADestination,
    adminPoints,
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
      <TopBar topBarInfo={topBarInfo} />
      <Hero
        heroHeading={heroHeading}
        heroDesription={heroDesription}
        heroCTAText={heroCTAText}
        heroCTADestination={heroCTADestination}
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
      />
      <Customers
        customersHeading={customersHeading}
        customersSubHeading={customersSubHeading}
      />
      <Resources
        DAOResourcesHeading={DAOResourcesHeading}
        DAOResources={DAOResources}
      />
      <Reviews />
      <CTA
        lastSectionSubHeading={lastSectionSubHeading}
        lastSectionHeading={lastSectionHeading}
        lastSectionDescription={lastSectionDescription}
        lastSectionImg={lastSectionImg}
        lastSectionCTAText={lastSectionCTAText}
        lastSectionCTADestination={lastSectionCTADestination}
      />
      <Investors />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/home-page?populate[0]=adminImg1&populate[1]=adminImg2&populate[2]=adminPoints&populate[3]=adminPoints.img&populate[4]=lastSectionImg&populate[5]=DAOResources&populate[6]=DAOResources.logo`
  );
  const data = await res.json();

  return {
    props: { data },
    revalidate: 1,
  };
}
