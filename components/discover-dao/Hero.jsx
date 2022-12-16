import styled from 'styled-components';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import heroImg1 from '../../public/assets/discover-daos/hero-img.png';
import { DaoNavbar } from '../common';

const Hero = () => {
  const heroImages = [
    {
      id: 1,
      img: heroImg1,
      alt: 'hero image 1',
    },
    {
      id: 2,
      img: heroImg1,
      alt: 'hero image 2',
    },
    {
      id: 3,
      img: heroImg1,
      alt: 'hero image 3',
    },
    {
      id: 4,
      img: heroImg1,
      alt: 'hero image 4',
    },
  ];
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

  return (
    <Container>
      <DaoNavbar />
      <main className="section">
        <div className="section-center">
          <div className="title">
            <h2>Discover, Join and Contribute</h2>
          </div>

          <div className="banner-center">
            <Carousel
              showDots={true}
              renderDotsOutside={true}
              containerClass="carousel-container"
              rewind={true}
              responsive={responsive}
              renderButtonGroupOutside={false}
              removeArrowOnDeviceType={['tablet', 'mobile']}
              keyBoardControl={true}
              infinite={true}
            >
              {heroImages?.map((item) => {
                return (
                  <div className="item" key={item.id}>
                    <Image
                      src={item.img}
                      alt={item.alt}
                      width={1068}
                      height={389}
                      objectFit="contain"
                      placeholder="blur"
                      blurDataURL={item.img}
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </main>
    </Container>
  );
};

export const Container = styled.section`
  .carousel-container {
    width: 100%;
  }

  .banner-center {
    margin: 3rem auto 0;

    @media (max-width: 1024px) {
      margin: 4rem auto 2rem;
    }

    .react-multi-carousel-dot {
      button {
        border: 1px solid #ccc;
        background: #7e7e7e;
      }
    }

    .react-multi-carousel-dot--active {
      button {
        background: var(--clr-white);
      }
    }
    .react-multiple-carousel__arrow--left {
      left: 0%;
      background: transparent;
    }
    .react-multiple-carousel__arrow--right {
      right: 0%;
      background: transparent;
    }
    .react-multi-carousel-dot-list {
      margin-top: 2rem;
      bottom: unset;
    }
  }

  .item {
    text-align: center;
    img {
      width: 100%;
    }
  }
`;

export default Hero;
