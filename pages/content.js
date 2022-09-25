import { HeadSeo } from '../components/common';
import { Hero, CTA, TwitterFeed } from '../components/content';

const Content = ({
  data,
  navItems,
  bannerArticle,
  allArticles,
  podcasts,
  videos,
}) => {
  const { heading, description, CTAText, CTADestination, image, points } =
    data.data.attributes;

  return (
    <>
      <HeadSeo title="Content" />
      <Hero
        navItems={navItems}
        bannerArticle={bannerArticle}
        allArticles={allArticles}
        podcasts={podcasts}
        videos={videos}
      />
      <CTA
        heading={heading}
        description={description}
        CTAText={CTAText}
        CTADestination={CTADestination}
        image={image}
        points={points}
      />
      <TwitterFeed />
    </>
  );
};

export async function getStaticProps() {
  // page data
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/content-page?populate[0]=image&populate[1]=points&populate[2]=points.img`
  );
  const data = await res.json();

  // nav data
  const navRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/header?populate[0]=navLinks&populate[1]=navLinks.navLinks2&populate[2]=logo`
  );
  const navData = await navRes.json();

  // hero
  const heroRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?sort=updatedAt:desc&filters[isHighLight][$eq]=True&populate=*`
  );
  const heroData = await heroRes.json();

  // articles
  const articlesRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?sort=updatedAt:desc&populate=*`
  );
  const articlesData = await articlesRes.json();

  // spotify
  const spotifyRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/podcast-embeds?populate=*`
  );
  const spotifyData = await spotifyRes.json();

  // videos
  const videosRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/you-tube-embeds?populate=*`
  );
  const videosData = await videosRes.json();

  return {
    props: {
      data,
      navItems: navData?.data?.attributes,
      bannerArticle: heroData?.data[0],
      allArticles: articlesData?.data,
      podcasts: spotifyData?.data,
      videos: videosData?.data,
    },
    revalidate: 1,
  };
}

export default Content;
