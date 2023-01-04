import { useState } from 'react';
import { HeadSeo, Navbar } from '../../../components/common';
import styled from 'styled-components';
import moment from 'moment/moment';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';
import { PageBanner, PageBannerSmall } from '../../../components/content';
import Link from 'next/link';

const SingleBlogPage = ({
  article,
  navItems,
  pageBanner,
  pageBanner2,
  featuredArticles,
  highlightedArticles,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <>
        <HeadSeo title={'Blog'} />
        <Container>
          <Navbar
            navItems={navItems}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
          <main onClick={() => setShowMenu(false)} className="section">
            <div className="section-center blog-center">
              <div className="title">
                <h3>Loading...</h3>
              </div>
              <div className="author">
                <p>Loading...</p>
              </div>
              <div className="content">Loading...</div>
            </div>
          </main>
        </Container>
      </>
    );
  }

  const { author, content, name, shortDescription, date, authorSocialLink } =
    article?.attributes;

  return (
    <>
      <HeadSeo title={name} description={shortDescription} />
      <Container>
        <Navbar
          navItems={navItems}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
        <main onClick={() => setShowMenu(false)} className="section">
          <div className="section-center blog-center">
            <PageBanner banner={pageBanner} />

            <div className="top-heading">
              <p>
                <Link href="/blog">
                  <a className="back">Blog</a>
                </Link>
                &nbsp;&gt; {name}
              </p>

              <div className="author">
                <p>
                  <span>
                    <a href={authorSocialLink} target="_blank" rel="noreferrer">
                      {author}
                    </a>
                  </span>
                  , {moment(date).format('ll')}
                </p>
              </div>
            </div>

            <div className="title">
              <h3>{name}</h3>
            </div>

            <div className="content">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>

            <PageBannerSmall banner={pageBanner2} />
          </div>
        </main>
      </Container>
    </>
  );
};

export const Container = styled.section`
  background-color: #12111a;

  .section {
    padding: 3rem 0;
  }

  .top-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    gap: 1rem;
    flex-wrap: wrap;

    p {
      color: #fff;
    }

    .back {
      color: #b7b4c7;
    }
  }

  .author {
    p {
      color: #b7b4c7;
    }
  }

  .content p {
    margin-left: auto;
    margin-right: auto;
    max-width: unset;
    color: #fff;
  }

  a {
    color: rgba(206, 81, 251, 255);
  }

  .content {
    margin-bottom: 3rem;
  }
`;

export default SingleBlogPage;

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`
  );
  const data = await res.json();

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

  // featured articles
  const featuredRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?sort=updatedAt:desc&pagination[limit]=4&filters[isFeaturedSide][$eq]=True&populate=*`
  );
  const featuredData = await featuredRes.json();

  // highlighted articles
  const highlightedArticlesRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?sort=updatedAt:desc&pagination[limit]=2&filters[isHighLight][$eq]=True&filters[showCTAinHighlight][$eq]=True&filters[isFeaturedSide][$eq]=False&populate=*`
  );
  const highlightedArticlesData = await highlightedArticlesRes.json();

  return {
    props: {
      article: data?.data[0],
      navItems: navData?.data?.attributes,
      pageBanner: pageBannersData?.data,
      pageBanner2: pageBannerData2?.data,
      featuredArticles: featuredData?.data,
      highlightedArticles: highlightedArticlesData?.data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles`);
  const data = await res.json();
  const articles = data?.data;
  const slugs = articles?.map((article) => article?.attributes?.slug);
  const paths = slugs?.map((slug) => ({ params: { slug: slug } }));

  return {
    paths,
    fallback: true,
  };
};
