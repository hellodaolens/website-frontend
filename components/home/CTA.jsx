import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import heroLastSection from '../../public/assets/homepage/hero-last-section.png';

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
            <Image
              src={lastSectionImg?.data?.attributes?.url}
              alt="last section image"
              width={512}
              height={316}
              objectFit="cover"
              className="image"
            />
          </article>
        </div>
        <a href={lastSectionCTADestination} className="btn">
          {lastSectionCTAText}
        </a>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${heroLastSection.src}) center/cover no-repeat;

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
  }

  .img span {
    border: 2px solid #356369 !important;
    border-radius: 20px;
  }

  .btn {
    margin-top: 2rem;
  }
`;

export default CTA;
