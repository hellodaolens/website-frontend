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
    <Container className='section'>
      <div className='section-center'>
        <article className='info'>
          <p className='subheading'>{lastSectionSubHeading}</p>
          <h3>{lastSectionHeading}</h3>
          <p>{lastSectionDescription}</p>
        </article>

        <article className='arrow'>
          <Image
            src={arrow}
            alt='arrow'
            objectFit='contain'
            placeholder='blur'
            blurDataURL={arrow}
          />
        </article>

        <article className='img'>
          <Image
            src={lastSectionImg?.data?.attributes?.url}
            alt='live demo'
            width={120}
            height={120}
            objectFit='contain'
            placeholder='blur'
            blurDataURL={lastSectionImg?.data?.attributes?.url}
          />

          <a href={lastSectionCTADestination} className='Discord-3'>
            {lastSectionCTAText}
          </a>
        </article>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${liveDemoBCG.src}) center/cover no-repeat;

  .Discord-3 {
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
