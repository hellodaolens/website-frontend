import { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import articleBCG from '../../public/assets/content/article-bcg.png';
import Link from 'next/link';

const Articles = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/articles?sort=updatedAt:desc&populate=*`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllArticles(data?.data);
        setArticles(data?.data);
      });
  }, []);

  const handleFilterArticles = (type) => {
    const tempArticles = allArticles?.filter(
      (article) => article.attributes.type.toLowerCase() === type.toLowerCase()
    );
    setArticles(tempArticles);
  };

  return (
    <Container className="section">
      <div className="tabs-container">
        <div className="tabs">
          <button
            className="tab-btn"
            onClick={() => handleFilterArticles('popular')}
          >
            Popular
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
        {articles?.map((article) => {
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

      <div className="btn-container">
        <button className="btn2">View more</button>
      </div>
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

    @media (min-width: 768px) {
      display: none !important;
    }

    .btn2 {
      font-size: 14px;
    }
  }
`;

export default Articles;
