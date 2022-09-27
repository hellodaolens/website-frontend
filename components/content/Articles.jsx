import { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import articleBCG from '../../public/assets/content/article-bcg.png';
import Link from 'next/link';

const Articles = ({ allArticles }) => {
  const [articles, setArticles] = useState(allArticles);
  const [isMobile, setIsMobile] = useState(false);

  const numOfArticlesToShow = isMobile ? 2 : 6;
  const [numOfArticles, setNumOfArticles] = useState(numOfArticlesToShow);
  const articlesToShow = articles?.slice(0, numOfArticles);

  const setDimension = () => {
    const ismobile = window.innerWidth < 768;
    if (ismobile !== isMobile) setIsMobile(ismobile);
  };

  useEffect(() => {
    window.addEventListener('resize', setDimension, false);

    return () => {
      window.removeEventListener('resize', setDimension);
    };
  }, [isMobile]);

  const handleFilterArticles = (type) => {
    if (type === 'all') {
      setArticles(allArticles);
    } else {
      const tempArticles = allArticles?.filter(
        (article) =>
          article.attributes.type.trim().toLowerCase() === type.toLowerCase()
      );
      setArticles(tempArticles);
    }
  };

  return (
    <Container className="section">
      <div className="tabs-container">
        <div className="tabs">
          <button
            className="tab-btn"
            onClick={() => handleFilterArticles('all')}
          >
            All
          </button>
          <button
            className="tab-btn"
            onClick={() => handleFilterArticles('Case Study')}
          >
            Case study
          </button>
          <button
            className="tab-btn"
            onClick={() => handleFilterArticles('Trends')}
          >
            Trends
          </button>
          <button
            className="tab-btn"
            onClick={() => handleFilterArticles('DAOS')}
          >
            DAOS
          </button>
        </div>
      </div>

      <div className="content">
        {articlesToShow?.map((article) => {
          const { id, attributes } = article;
          const {
            name,
            shortDescription,
            image,
            author,
            authorDesignation,
            slug,
          } = attributes;

          return (
            <Link key={id} href={`/blog/${slug}`}>
              <article className="article">
                <Image
                  src={image?.data?.attributes?.url}
                  alt={name}
                  width={304}
                  height={156}
                  placeholder="blur"
                  blurDataURL={image?.data?.attributes?.url}
                />
                <div>
                  <h4>{name}</h4>
                  <p>{shortDescription}</p>
                </div>
                <div className="author">
                  <p>
                    - {author}, {authorDesignation}
                  </p>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
      {articles?.length === 0 && (
        <h4 style={{ textAlign: 'center' }}>No articles to display...</h4>
      )}

      {articlesToShow?.length < articles?.length && (
        <div className="btn-container">
          <button
            className="btn2"
            onClick={() =>
              setNumOfArticles(numOfArticles + numOfArticlesToShow)
            }
          >
            View More
          </button>
        </div>
      )}
    </Container>
  );
};

export const Container = styled.section`
  padding-bottom: 0;

  .tabs-container {
    width: fit-content;
    margin: 0 auto 4rem;
  }

  .tabs {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(100px);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 90px;
    border: 2px solid #372744;
  }

  .tab-btn {
    background: transparent;
    color: var(--clr-white);
    border: none;
    outline: none;
    cursor: pointer;
    width: max-content;
    padding: 0.5rem 1rem;

    @media (max-width: 375px) {
      padding: 5px 10px;
      font-size: 0.75rem;
    }
  }

  .content {
    display: grid;
    gap: 1.5rem;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1170px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .article {
    background: url(${articleBCG.src}) center/cover no-repeat;
    padding: 1.5rem;
    border-radius: 20px;
    display: grid;
    grid-template-rows: auto 1fr auto;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    p {
      margin-bottom: 0;
    }
  }

  .btn-container {
    text-align: center;
    margin: 2rem auto 0;
    justify-content: center;

    .btn2 {
      font-size: 14px;
    }
  }
`;

export default Articles;
