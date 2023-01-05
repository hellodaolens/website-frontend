import Image from 'next/image';
import styled from 'styled-components';
import topPostBcg from '../../public/assets/content/top-post-bcg.png';
import Link from 'next/link';

const TopPosts = ({ topPosts }) => {
  return (
    <Container>
      <h3>Top posts</h3>
      <div className="posts-center">
        {topPosts?.map((post) => {
          return (
            <Link key={post?.id} href={`/blog/${post?.attributes?.slug}`}>
              <a className="post">
                <Image
                  src={post?.attributes?.image?.data?.attributes?.url}
                  alt="banner"
                  width={100}
                  height={70}
                  placeholder="blur"
                  blurDataURL={post?.attributes?.image?.data?.attributes?.url}
                />

                <div className="info">
                  <small>{post?.attributes?.name}</small>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export default TopPosts;

export const Container = styled.section`
  padding: 3rem 0;

  .posts-center {
    display: grid;
    gap: 1rem;

    @media (min-width: 992px) {
      grid-template-columns: auto auto;
      gap: 1.5rem;
    }
  }

  .post {
    background: url(${topPostBcg.src}) center/cover no-repeat;
    padding: 1rem;
    display: grid;
    grid-template-columns: 100px auto;
    align-items: center;
    gap: 1rem;
    color: var(--clr-white);
    border-radius: 1.25rem;
    transition: var(--transition);

    &:hover {
      color: #c9c8ce;
    }
  }

  img {
    width: 100%;
    border-radius: 0.5rem;
  }

  small {
    font-weight: bold;
  }
`;
