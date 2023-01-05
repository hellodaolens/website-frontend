import Image from 'next/image';
import styled from 'styled-components';
import bannerBcg from '../../public/assets/content/banner-bcg.png';
import bannerBcg2 from '../../public/assets/content/banner2-bcg.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HighlightedArticle = ({ banner, openModal }) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <Container
      style={{
        background: `url(${
          path === '/blog' ? bannerBcg.src : bannerBcg2.src
        }) center/cover no-repeat`,
      }}
    >
      <div className="banner-image">
        <Image
          src={banner?.attributes?.image?.data?.attributes?.url}
          alt="banner"
          width={450}
          height={200}
          placeholder="blur"
          blurDataURL={banner?.attributes?.image?.data?.attributes?.url}
        />
      </div>
      <article className="info">
        <h4>{banner?.attributes?.name}</h4>

        <div className="btn-container">
          {banner?.attributes?.showReadMoreInHightlight && (
            <Link href={`/blog/${banner?.attributes?.slug}`}>
              <a className="btn">{readingStats.text}</a>
            </Link>
          )}

          {banner?.attributes?.showCTAinHighlight && (
            <button onClick={openModal} className="btn2">
              Download
            </button>
          )}
        </div>
      </article>
    </Container>
  );
};

export default HighlightedArticle;

export const Container = styled.article`
  padding: 1.5rem;
  border-radius: 20px;
  display: grid;
  gap: 1rem;
  max-width: fit-content;
  align-items: center;

  img {
    width: 100%;
  }

  .btn-container {
    justify-self: end;
  }
`;
