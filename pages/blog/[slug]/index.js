import { useState } from 'react';
import { HeadSeo, Navbar } from '../../../components/common';
import styled from 'styled-components';
import moment from 'moment/moment';
import ReactMarkdown from 'react-markdown';

const SingleBlogPage = ({ article, navItems }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { author, content, name, shortDescription, createdAt } =
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
            <div className="title">
              <h3>{name}</h3>
            </div>
            <div className="author">
              <p>
                {author}, {moment(createdAt).format('ll')}
              </p>
            </div>
            <div className="content">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </div>
        </main>
      </Container>
    </>
  );
};

export const Container = styled.section`
  background-color: #12111a;

  .blog-center {
    max-width: 54rem;
    padding: 2rem 1rem;
  }

  .author {
    p {
      color: #b7b4c7;
    }
  }

  p {
    margin-left: auto;
    margin-right: auto;
    max-width: unset;
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

  return {
    props: {
      article: data?.data[0],
      navItems: navData?.data?.attributes,
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
    fallback: false,
  };
};
