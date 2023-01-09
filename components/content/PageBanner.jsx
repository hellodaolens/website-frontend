import { FaArrowRight } from 'react-icons/fa';
import styled from 'styled-components';

const PageBanner = ({ banner }) => {
  return (
    <Container
      href={banner?.attributes?.buttonLink}
      style={{
        background: `url(${banner?.attributes?.imageLink}) center/cover no-repeat`,
      }}
    >
      <div className="info">
        <h2>{banner?.attributes?.heading}</h2>
        <p>{banner?.attributes?.description}</p>
        <small>{banner?.attributes?.subDescription}</small>
      </div>
      <div className="btn-container">
        <a className="banner-btn">
          {banner?.attributes?.buttonText} <FaArrowRight />
        </a>
      </div>
    </Container>
  );
};

export default PageBanner;

export const Container = styled.a`
  padding: 2rem 3rem;
  border-radius: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  color: var(--clr-white);

  @media (max-width: 768px) {
    padding: 2rem;
  }
  @media (max-width: 481px) {
    padding: 1.5rem;
  }

  img {
    border-radius: 0.5rem;
  }

  .info p {
    color: #fff;
    max-width: 35rem;
  }

  .banner-btn {
    background: linear-gradient(0deg, #ffffff, #ffffff),
      linear-gradient(90deg, #5865f2 0%, #60b6fd 100%);
    box-shadow: 0px 0px 21.964px #5fb5fc;
    border-radius: 1034.14px;
    padding: 9.15167px 25.6247px;
    color: #5865f2;
  }
`;
