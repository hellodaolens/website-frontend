import {
  Hero,
  Globe,
  Features,
  CTA,
  HiringBanner,
} from '../components/careers';
import { HeadSeo } from '../components/common';
import { TopBar } from '../components/home';

const Careers = ({ data, topBarInfo, navItems }) => {
  const {
    heroHeading,
    heroDescription,
    heroCTAText,
    heroCTADestination,
    heroImg,
    section1Heading,
    section1Description,
    section1Img,
    section2Heading,
    buildingFor,
    teamHeading,
    teamDescription,
    teamImages,
    lastSectionHeading,
    lastSectionDescription,
    lastSectionCTAText,
    lastSectionCTADestination,
    TopBar: topBar,
  } = data.data.attributes;

  return (
    <>
      <HeadSeo title={heroHeading} description={heroDescription} />
      {topBar && <TopBar topBarInfo={topBarInfo} />}
      <Hero
        navItems={navItems}
        heroHeading={heroHeading}
        heroDescription={heroDescription}
        heroCTAText={heroCTAText}
        heroCTADestination={heroCTADestination}
        heroImg={heroImg}
      />
      <Globe
        section1Heading={section1Heading}
        section1Description={section1Description}
        section1Img={section1Img}
      />
      <Features section2Heading={section2Heading} buildingFor={buildingFor} />
      <CTA
        teamHeading={teamHeading}
        teamDescription={teamDescription}
        teamImages={teamImages}
      />
      <HiringBanner
        lastSectionHeading={lastSectionHeading}
        lastSectionDescription={lastSectionDescription}
        lastSectionCTAText={lastSectionCTAText}
        lastSectionCTADestination={lastSectionCTADestination}
      />
    </>
  );
};

export default Careers;

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/careers-page?populate[0]=buildingFor&populate[1]=buildingFor.image&populate[2]=teamImages&populate[3]=section1Img&populate[4]=heroImg`
  );
  const data = await res.json();

  // home-page data (topbar info)
  const homeRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/home-page`
  );
  const homeData = await homeRes.json();

  const navRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/header?populate[0]=navLinks&populate[1]=navLinks.navLinks2&populate[2]=logo`
  );
  const navData = await navRes.json();

  return {
    props: {
      data,
      topBarInfo: homeData?.data?.attributes?.topBarInfo,
      navItems: navData?.data?.attributes,
    },
    revalidate: 1,
  };
}
