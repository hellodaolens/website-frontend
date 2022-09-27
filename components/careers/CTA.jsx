import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import styled from 'styled-components';
import ctaBCG from '../../public/assets/careers/cta-bcg.png';

const CTA = ({ teamHeading, teamDescription, teamImages }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
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
          <Carousel
            showDots={true}
            renderDotsOutside={true}
            containerClass="carousel-container"
            rewind={true}
            responsive={responsive}
            renderButtonGroupOutside={true}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            keyBoardControl={true}
          >
            {teamImages?.data?.map((team) => {
              return (
                <div className="team-item" key={team.id}>
                  <Image
                    src={team?.attributes.url}
                    alt={'team'}
                    width={isMobile ? 595 : 1136}
                    height={isMobile ? 300 : 480}
                    objectFit="contain"
                    placeholder="blur"
                    blurDataURL={team?.attributes.url}
                  />
                </div>
              );
            })}
          </Carousel>
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

  .carousel-container {
    width: 100%;
    /* justify-content: center; */
  }

  .team {
    margin: 4rem auto;
    margin-bottom: 8rem;

    .react-multiple-carousel__arrow--left {
      left: 0%;
    }
    .react-multiple-carousel__arrow--right {
      right: 0%;
    }

    .react-multi-carousel-dot-list {
      margin-top: 4rem;
      bottom: unset;
    }
  }

  .team-item {
    img {
      border-radius: 1rem;
    }
  }
`;

export default CTA;
