import { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import ctaBCG from '../../public/assets/careers/cta-bcg.png';

const CTA = ({ teamHeading, teamDescription, teamImages }) => {
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
          <h3>{teamHeading}</h3>
          <p>{teamDescription}</p>
        </div>

        <div className="team">
          <Image
            src={teamImages?.data[0].attributes.url}
            alt={'team'}
            width={isMobile ? 595 : 1136}
            height={isMobile ? 300 : 480}
            objectFit="contain"
          />
        </div>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${ctaBCG.src}) center/cover no-repeat;

  .title {
    text-align: center;
    p {
      margin: 2rem auto;
    }
  }

  .team span {
    margin: 0 auto;
  }
`;

export default CTA;
