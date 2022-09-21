import { Hero, CTA, TwitterFeed } from '../components/content';

const Content = ({ data }) => {
  const { heading, description, CTAText, image, points } = data.data.attributes;

  return (
    <>
      <Hero />
      <CTA
        heading={heading}
        description={description}
        CTAText={CTAText}
        image={image}
        points={points}
      />
      <TwitterFeed />
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/content-page?populate[0]=image&populate[1]=points&populate[2]=points.img`
  );
  const data = await res.json();

  return {
    props: { data },
    revalidate: 1,
  };
}

export default Content;
