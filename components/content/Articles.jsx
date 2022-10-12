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
  const filters = [
    'all',
    ...new Set(allArticles?.map((article) => article.attributes.type.trim())),
  ];

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
        (article) => article.attributes.type.trim() === type
      );
      setArticles(tempArticles);
    }
  };

  return (
    <Container className='section'>
      <div className='tabs-container'>
        <div className='tabs'>
          {filters?.map((filter, index) => (
            <button
              key={index}
              onClick={() => handleFilterArticles(filter)}
              className='tab-btn'
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className='content'>
        {articlesToShow?.map((article) => {
          const {
            name,
            shortDescription,
            image,
            author,
            authorDesignation,
            slug,
          } = article?.attributes;

          return (
            <Link key={article?.id} href={`/blog/${slug}`}>
              <article className='article'>
                <Image
                  src={image?.data?.attributes?.url}
                  alt={name}
                  width={304}
                  height={156}
                  placeholder='blur'
                  blurDataURL={image?.data?.attributes?.url}
                />

                <h4>{name}</h4>
                <p>{shortDescription}</p>

                <div className='author'>
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
        <div className='btn-container'>
          <button
            className='btn2'
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
    text-transform: capitalize;

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
    grid-template-rows: auto auto 1fr auto;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    p {
      margin-bottom: 0;
      align-self: flex-start;
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
