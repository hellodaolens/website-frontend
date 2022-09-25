import Image from 'next/image';
import styled from 'styled-components';
import liveDemoBCG from '../../public/assets/onboarding/live-demo-bcg.png';
import arrow from '../../public/assets/onboarding/arrow.svg';

const LiveDemo = ({
  lastSectionSubHeading,
  lastSectionHeading,
  lastSectionDescription,
  lastSectionImg,
  lastSectionCTAText,
  lastSectionCTADestination,
}) => {
  return (
    <Container className="section">
      <div className="section-center">
        <article className="info">
          <p className="subheading">{lastSectionSubHeading}</p>
          <h3>{lastSectionHeading}</h3>
          <p>{lastSectionDescription}</p>
        </article>

        <article className="arrow">
          <Image src={arrow} alt="arrow" objectFit="contain" />
        </article>

        <article className="img">
          <Image
            src={lastSectionImg?.data?.attributes?.url}
            alt="live demo"
            width={120}
            height={120}
            objectFit="contain"
          />

          <a href={lastSectionCTADestination} className="btn">
            {lastSectionCTAText}
          </a>
        </article>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${liveDemoBCG.src}) center/cover no-repeat;

  .section-center {
    text-align: center;
    display: grid;

    .subheading {
      color: #fff;
      margin-bottom: 1rem;
    }

    p {
      margin-left: auto;
      margin-right: auto;
    }

    .arrow {
      display: none;
    }

    @media (min-width: 992px) {
      grid-template-columns: auto auto auto;
      align-items: center;
      gap: 1rem;
      text-align: left;

      p {
        margin-left: 0;
        margin-right: 0;
      }

      .info {
        max-width: 30rem;
        margin: 0 auto;
      }

      .arrow {
        display: block;
        transform: rotate(-15deg);
        padding: 0.5rem;
      }
    }
  }

  .img {
    display: grid;
    width: fit-content;
    gap: 1rem;
    margin: 0 auto;
  }
`;

export default LiveDemo;
