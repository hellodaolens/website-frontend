import { HeadSeo } from '../components/common';
import { Hero, Banner, Feature, CTA, LiveDemo } from '../components/onboarding';
import { TopBar } from '../components/home';

const OnBoarding = ({ data, topBarInfo, navItems, users }) => {
  const {
    heroHeading,
    heroSubHeading,
    heroCTAText,
    heroCTADestination,
    heroImg1,
    heroImg2,
    usedByHeading,
    section1SubHeading,
    section1Heading,
    section1CTAText,
    section1CTADestination,
    section2SubHeading,
    section2Heading,
    section2Description,
    section2Img,
    lastSectionSubHeading,
    lastSectionHeading,
    lastSectionDescription,
    lastSectionImg,
    lastSectionCTAText,
    lastSectionCTADestination,
    Features,
    TopBar: topBar,
    section2YtLink,
    secction2ShowYtVideo,
  } = data.data.attributes;

  return (
    <>
      <HeadSeo title={heroHeading} description={heroSubHeading} />
      {topBar && <TopBar topBarInfo={topBarInfo} />}
      <Hero
        navItems={navItems}
        users={users}
        heroHeading={heroHeading}
        heroSubHeading={heroSubHeading}
        heroCTAText={heroCTAText}
        heroCTADestination={heroCTADestination}
        heroImg1={heroImg1}
        heroImg2={heroImg2}
        usedByHeading={usedByHeading}
      />
      <Banner
        section1SubHeading={section1SubHeading}
        section1Heading={section1Heading}
        section1CTAText={section1CTAText}
        section1CTADestination={section1CTADestination}
      />
      <Feature Features={Features} />
      <CTA
        section2SubHeading={section2SubHeading}
        section2Heading={section2Heading}
        section2Description={section2Description}
        section2Img={section2Img}
        section2YtLink={section2YtLink}
        secction2ShowYtVideo={secction2ShowYtVideo}
      />
      <LiveDemo
        lastSectionSubHeading={lastSectionSubHeading}
        lastSectionHeading={lastSectionHeading}
        lastSectionDescription={lastSectionDescription}
        lastSectionImg={lastSectionImg}
        lastSectionCTAText={lastSectionCTAText}
        lastSectionCTADestination={lastSectionCTADestination}
      />
    </>
  );
};

export default OnBoarding;

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/onboardingtool-page?populate[0]=heroImg1&populate[1]=heroImg2&populate[2]=section2Img&populate[3]=lastSectionImg&populate[4]=Features&populate[5]=Features.image`
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

  // users data
  const usersRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/onboardingtool-customers?populate=*`
  );
  const usersData = await usersRes.json();

  return {
    props: {
      data,
      topBarInfo: homeData?.data?.attributes?.topBarInfo,
      navItems: navData?.data?.attributes,
      users: usersData?.data,
    },
    revalidate: 1,
  };
}
