import styled from 'styled-components';
import Image from 'next/image';
import daosData from '../../data.json';
import Carousel from 'react-multi-carousel';

const DaoList = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 12,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 12,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  const logos = daosData.map((item) => {
    return {
      src: item.attributes.twitterdp,
      alt: item.attributes.Token,
    };
  });

  return (
    <Container>
      <hr />
      <div className="logos-center">
        <Carousel
          showDots={false}
          renderDotsOutside={true}
          containerClass="carousel-container"
          rewind={true}
          responsive={responsive}
          renderButtonGroupOutside={false}
          removeArrowOnDeviceType={[
            'superLargeDesktop',
            'desktop',
            'tablet',
            'mobile',
          ]}
          keyBoardControl={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
        >
          {logos.map((logo, i) => {
            return (
              <Image
                key={i}
                className="logo"
                src={logo.src}
                alt={logo.alt}
                width={103.93}
                height={104.57}
              />
            );
          })}
        </Carousel>

        <Carousel
          showDots={false}
          renderDotsOutside={true}
          containerClass="carousel-container second-carousel"
          rewind={false}
          responsive={responsive}
          renderButtonGroupOutside={false}
          removeArrowOnDeviceType={[
            'superLargeDesktop',
            'desktop',
            'tablet',
            'mobile',
          ]}
          keyBoardControl={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
        >
          {logos
            .map((logo, i) => {
              return (
                <Image
                  key={i}
                  className="logo"
                  src={logo.src}
                  alt={logo.alt}
                  width={103.93}
                  height={104.57}
                />
              );
            })
            .reverse()}
        </Carousel>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  hr {
    width: 90%;
    margin: 0 auto;
    border: 1px solid rgba(96, 182, 253, 0.15);
  }

  .carousel-container {
    width: 100%;

    ul {
      gap: 1rem;
    }
  }

  .second-carousel {
    justify-content: center;
  }

  .banner-center {
    margin: 3rem auto 0;

    @media (max-width: 1024px) {
      margin: 4rem auto 2rem;
    }
  }

  .logos-center {
    padding: 4rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    img {
      border-radius: 0.5rem;
    }
  }
`;

export default DaoList;
