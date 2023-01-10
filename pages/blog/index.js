import { HeadSeo } from '../../components/common';
import {
  Hero,
  CTA,
  TwitterFeed,
  PageBannerSmall,
} from '../../components/content';
import { TopBar } from '../../components/home';

const Content = ({
  data,
  topBarInfo,
  navItems,
  bannerArticle,
  bannerArticle2,
  featuredArticles,
  pageBanner,
  pageBanner2,
  allArticles,
  podcasts,
  videos,
}) => {
  const {
    heading,
    description,
    CTAText,
    CTADestination,
    image,
    points,
    modalBtnText,
    modalHeading,
    modalPara,
    inputBoxFieldName1,
    inputBoxFieldName2,
    inputBoxFieldName3,
    TopBar: topBar,
  } = data.data.attributes;

  return (
    <>
      <HeadSeo title="Content" />
      {topBar && <TopBar topBarInfo={topBarInfo} />}
      <Hero
        navItems={navItems}
        bannerArticle={bannerArticle}
        bannerArticle2={bannerArticle2}
        featuredArticles={featuredArticles}
        pageBanner={pageBanner}
        allArticles={allArticles}
        podcasts={podcasts}
        videos={videos}
        modalBtnText={modalBtnText}
        modalHeading={modalHeading}
        modalPara={modalPara}
        inputBoxFieldName1={inputBoxFieldName1}
        inputBoxFieldName2={inputBoxFieldName2}
        inputBoxFieldName3={inputBoxFieldName3}
      />
      <section className="section-center">
        <PageBannerSmall banner={pageBanner2} />
      </section>
      {/* <CTA
        heading={heading}
        description={description}
        CTAText={CTAText}
        CTADestination={CTADestination}
        image={image}
        points={points}
      /> */}
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

  // page banners
  const pageBannersRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blog-page-banner`
  );
  const pageBannersData = await pageBannersRes.json();

  const pageBannerRes2 = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blog-page-banner2`
  );
  const pageBannerData2 = await pageBannerRes2.json();

  // hero
  const heroRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?sort=updatedAt:desc&pagination[limit]=1&filters[isHighLight][$eq]=True&filters[showCTAinHighlight][$eq]=False&populate=*`
  );
  const heroData = await heroRes.json();

  // second highlight article
  const secondHeroRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?sort=updatedAt:desc&pagination[limit]=1&filters[isHighLight][$eq]=True&filters[showCTAinHighlight][$eq]=True&populate=*`
  );
  const secondHeroData = await secondHeroRes.json();

  // featured articles
  const featuredRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?sort=updatedAt:desc&pagination[limit]=3&filters[isFeaturedSide][$eq]=True&populate=*`
  );
  const featuredData = await featuredRes.json();

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
      topBarInfo: homeData?.data?.attributes?.topBarInfo,
      navItems: navData?.data?.attributes,
      bannerArticle: heroData?.data[0],
      bannerArticle2: secondHeroData?.data[0],
      featuredArticles: featuredData?.data,
      pageBanner: pageBannersData?.data,
      pageBanner2: pageBannerData2?.data,
      allArticles: articlesData?.data,
      podcasts: spotifyData?.data,
      videos: videosData?.data,
    },
    revalidate: 1,
  };
}

export default Content;
