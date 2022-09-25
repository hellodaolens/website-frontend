import { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import ctaBCG from '../../public/assets/content/cta-bcg.png';

const CTA = ({
  heading,
  description,
  CTAText,
  CTADestination,
  image,
  points,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  const setDimension = () => {
    const ismobile = window.innerWidth < 595;
    if (ismobile !== isMobile) setIsMobile(ismobile);
  };

  useEffect(() => {
    window.addEventListener('resize', setDimension, false);

    return () => {
      window.removeEventListener('resize', setDimension);
    };
  }, [isMobile]);

  return (
    <Container className="section">
      <div className="section-center">
        <div className="header">
          <article className="info">
            <h2>{heading}</h2>
            <p>{description}</p>

            <a href={CTADestination} className="btn">
              {CTAText}
            </a>
          </article>
          <article className="image">
            <Image
              src={image?.data?.attributes?.url}
              alt={CTAText}
              width={508}
              height={308}
              placeholder="blur"
              blurDataURL={image?.data?.attributes?.url}
            />
          </article>
        </div>

        <div className="points">
          {points?.map((point) => {
            return (
              <div key={point?.id} className="point">
                <Image
                  src={point?.img.data.attributes.url}
                  alt="point"
                  width={isMobile ? 48 : 100}
                  height={isMobile ? 48 : 100}
                  placeholder="blur"
                  blurDataURL={point?.img.data.attributes.url}
                />
                <p>{point?.point}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${ctaBCG.src}) center/cover no-repeat;

  .header {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
    align-items: center;
    margin: 0 auto;
    text-align: center;

    p {
      margin-left: auto;
      margin-right: auto;
    }

    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
      gap: 6rem;
      text-align: unset;
    }
  }

  .points {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 1rem;

    @media (min-width: 792px) {
      /* margin-top: 4rem; */
      grid-template-columns: [start] 1fr [col-1] 1fr [end];
      grid-template-rows: [start] 1fr [col-1] 1fr [end];
      gap: 2rem;

      .point {
        &:nth-child(1) {
          grid-column: start/col-1;
          grid-row: start/col-1;
        }
        &:nth-child(2) {
          grid-column: start/col-1;
          grid-row: col-1/end;
        }
        &:nth-child(3) {
          grid-column: col-1/end;
          grid-row: col-1/end;
        }
      }
    }

    .point {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 1rem;
      align-items: center;

      p {
        margin-bottom: 1rem;
      }
    }
  }
`;

export default CTA;
