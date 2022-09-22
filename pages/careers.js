import {
  Hero,
  Globe,
  Features,
  CTA,
  HiringBanner,
} from '../components/careers';

const Careers = ({ data }) => {
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
  } = data.data.attributes;

  return (
    <>
      <Hero
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

  return {
    props: { data },
    revalidate: 1,
  };
}
