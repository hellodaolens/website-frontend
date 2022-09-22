import { HeadSeo } from '../components/common';
import {
  Hero,
  Features,
  FeaturesThree,
  Reviews,
} from '../components/contribution';

const Contribution = ({ data: { data } }) => {
  const {
    heroHeading,
    heroDescription,
    heroCTAText,
    heroCTADestination,
    heroImg1,
    heroImg2,
    usedByHeading,
    featuresHeading,
    features1,
    features2,
    features2CTAtext,
    features2Destination,
    features3Heading,
    features3,
    features3CTAText,
    features3CTADestination,
  } = data.attributes;

  return (
    <>
      <HeadSeo title={heroHeading} description={heroDescription} />
      <Hero
        heroHeading={heroHeading}
        heroDescription={heroDescription}
        heroCTAText={heroCTAText}
        heroCTADestination={heroCTADestination}
        heroImg1={heroImg1}
        heroImg2={heroImg2}
        usedByHeading={usedByHeading}
      />
      <Features
        featuresHeading={featuresHeading}
        features1={features1}
        features2={features2}
        features2CTAtext={features2CTAtext}
        features2Destination={features2Destination}
      />
      <FeaturesThree
        features3Heading={features3Heading}
        features3={features3}
        features3CTAText={features3CTAText}
        features3CTADestination={features3CTADestination}
      />
      <Reviews />
    </>
  );
};

export default Contribution;

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/contributiontool-page?populate[0]=heroImg1&populate[1]=heroImg2&populate[2]=features1&populate[3]=features1.image&populate[4]=features2&populate[5]=features2.image&populate[6]=features3&populate[7]=features3.image`
  );
  const data = await res.json();

  return {
    props: { data },
    revalidate: 1,
  };
}
