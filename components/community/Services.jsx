import { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import servicesBCG from '../../public/assets/community/services-bcg.png';

const Services = ({ section3Heading, section2Points }) => {
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
        <div className="title">
          <h3>{section3Heading}</h3>
        </div>

        <div className="services-center">
          {section2Points.map((item) => {
            const { id, img, point } = item;
            return (
              <article key={id} className="service">
                <Image
                  src={img?.data?.attributes?.url}
                  alt={point.substr(0, 15)}
                  width={isMobile ? 38 : 57}
                  height={isMobile ? 58 : 87}
                  placeholder="blur"
                  blurDataURL={img?.data?.attributes?.url}
                  objectFit="contain"
                />
                <p>{point}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${servicesBCG.src}) center/cover no-repeat;

  .title {
    text-align: center;
  }

  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 1.5rem;

    @media (min-width: 792px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .service {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    align-items: center;

    p {
      margin-bottom: 0;
    }
  }
`;

export default Services;
