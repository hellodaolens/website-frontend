import { HeadSeo } from '../components/common';
import {
  Hero,
  Features,
  FeaturesThree,
  Reviews,
} from '../components/communitymanager';
import { TopBar } from '../components/home';

const CommunityTool = ({
  data: { data },
  topBarInfo,
  navItems,
}) => {
  const {
    heroHeading,
    heroDescription,
    heroCTAText,
    heroCTADestination,
    heroImg,
    TopBar: topBar,
    section1,
    section2,
  } = data.attributes;
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
        heroImg={heroImg.data}
      />
      <Features
        title={section1.name}
        description={section1.description}
        accordian={section1.accordian}
        heroCTAText={heroCTAText}
        heroCTADestination={heroCTADestination}
      />
      <FeaturesThree
        title={section2.name}
        description={section2.description}
        content={section2.content}
        heading={section2.heading}
        heroCTAText={heroCTAText}
        heroCTADestination={heroCTADestination}
      />
    </>
  );
};

export default CommunityTool;

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/communitymanager-page?populate[1]=heroImg&populate[2]=section1.accordian.image&populate[3]=section2.content`
  );
  const data = await res.json();

  // home-page data (topbar info)
  const homeRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/home-page`
  );
  const homeData = await homeRes.json();

  // nav data
  const navRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/header?populate[0]=navLinks&populate[1]=navLinks.navLinks2&populate[2]=logo`
  );
  const navData = await navRes.json();

  // reviews data
  const reviewsRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/contributiontool-testimonials?populate=*`
  );
  const reviewsData = await reviewsRes.json();

  // users data
  const usersRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/contributiontool-customers?populate=*`
  );
  const usersData = await usersRes.json();

  return {
    props: {
      data,
      topBarInfo: homeData?.data?.attributes?.topBarInfo,
      navItems: navData?.data?.attributes,
      reviews: reviewsData?.data,
      users: usersData?.data,
    },
    revalidate: 1,
  };
}
