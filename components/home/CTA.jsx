import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import heroLastSection from '../../public/assets/homepage/hero-last-section.png';
import checkMediaType from '../utils/checkMediaType';

const CTA = ({
  lastSectionDescription,
  lastSectionHeading,
  lastSectionSubHeading,
  lastSectionImg,
  lastSectionCTAText,
  lastSectionCTADestination,
}) => {
  return (
    <Container className="section">
      <div className="section-center">
        <div className="last-section-center">
          <article className="info">
            <p>{lastSectionSubHeading}</p>
            <h2>{lastSectionHeading}</h2>
            <p>{lastSectionDescription}</p>
          </article>
          <article className="img">
            {checkMediaType(lastSectionImg) === 'video' ? (
              <video
                src={lastSectionImg?.data?.attributes?.url}
                alt="last section image"
                autoPlay
                loop
                muted
                width={512}
                height={316}
                style={{ maxWidth: '512px' }}
                className="image"
              />
            ) : (
              <Image
                src={lastSectionImg?.data?.attributes?.url}
                alt="last section image"
                width={512}
                height={316}
                objectFit="cover"
                className="image"
                placeholder="blur"
                blurDataURL={lastSectionImg?.data?.attributes?.url}
              />
            )}
          </article>
        </div>
        <a href={lastSectionCTADestination} className="Discord-1">
          {lastSectionCTAText}
        </a>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${heroLastSection.src}) center/cover no-repeat;

  .Discord-1 {
    display: inline-block;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s linear;
    border-radius: 49px;
    padding: 10px 32px;
    border: none;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      linear-gradient(85.21deg, #5fb5fc -7.59%, #844aff 62.28%, #df52ff 113.15%);
    &:hover {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
        linear-gradient(
          85.21deg,
          #5fb5fc -7.59%,
          #844aff 62.28%,
          #df52ff 113.15%
        );
      box-shadow: 0px 1px 32px #aa47e5;
    }
  }

  .section-center {
    @media (max-width: 992px) {
      text-align: center;
    }
  }

  .last-section-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;

    @media (max-width: 992px) {
      flex-direction: column;
      text-align: center;
      gap: 0;

      p {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  .info {
    max-width: 590px;

    p {
      max-width: 30rem;
    }
  }

  .img {
    margin-top: 2rem;

    @media (max-width: 992px) {
      margin-top: 1rem;
    }
  }

  .img span {
    border: 2px solid #356369 !important;
    border-radius: 20px;
  }

  .Discord-1 {
    @media (max-width: 992px) {
      margin-top: 2rem;
    }
  }
`;

export default CTA;
