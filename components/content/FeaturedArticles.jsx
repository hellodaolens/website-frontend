import Image from 'next/image';
import styled from 'styled-components';
import bannerBcg from '../../public/assets/content/banner-bcg.png';
import Link from 'next/link';

const FeaturedArticles = ({ articles }) => {
  return (
    <Container>
      {articles?.map((article) => {
        return (
          <Link key={article?.id} href={`/blog/${article?.attributes?.slug}`}>
            <a className="article">
              <div className="banner-image">
                <Image
                  src={article?.attributes?.image?.data?.attributes?.url}
                  alt="banner"
                  width={100}
                  height={70}
                  placeholder="blur"
                  blurDataURL={
                    article?.attributes?.image?.data?.attributes?.url
                  }
                />
              </div>
              <div className="info">
                <small>{article?.attributes?.name}</small>
              </div>
            </a>
          </Link>
        );
      })}
    </Container>
  );
};

export default FeaturedArticles;

export const Container = styled.article`
  background: url(${bannerBcg.src}) center/cover no-repeat;
  padding: 1.5rem;
  border-radius: 20px;
  display: grid;
  gap: 0.75rem;
  @media (min-width: 992px) {
    align-items: center;
  }

  .article {
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
    gap: 1rem;
    color: var(--clr-white);
    transition: var(--transition);

    &:hover {
      color: #c9c8ce;
    }
  }

  img {
    width: 100%;
  }

  small {
    font-weight: bold;
  }
`;
