import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import styled from 'styled-components';
import Image from 'next/image';
import ctaBCG from '../../public/assets/onboarding/cta-bcg.png';

const Customers = ({ customers, section2Heading }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
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
          <h3>{section2Heading}</h3>
        </div>

        <div className="customer-center">
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
            {customers?.map((customer) => {
              return (
                <article key={customer?.id} className="customer">
                  <Image
                    src={customer?.attributes?.logo?.data?.attributes?.url}
                    alt={customer?.attributes?.name}
                    width={isMobile ? 44 : 64}
                    height={isMobile ? 44 : 64}
                    objectFit="contain"
                    placeholder="blur"
                    blurDataURL={
                      customer?.attributes?.logo?.data?.attributes?.url
                    }
                  />
                  <p>{customer?.attributes?.name}</p>
                </article>
              );
            })}
          </Carousel>
        </div>

        <p className="bottom-text">And many more...</p>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${ctaBCG.src}) center no-repeat;
  background-size: 100% 100%;

  .title {
    text-align: center;
    p {
      margin: 0 auto;
    }
  }

  .carousel-container {
    width: 100%;
    justify-content: center;

    @media (max-width: 464px) {
      justify-content: flex-start;
    }
  }

  .customer-center {
    margin: 4rem auto;

    @media (max-width: 1024px) {
      margin-bottom: 8rem;
    }

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

  .customer {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 0.5rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 100px;
    padding: 8px 32px 8px 8px;

    img {
      border-radius: 50%;
    }
  }

  .customer p {
    color: var(--clr-white);
    margin-bottom: 0;
  }

  .bottom-text {
    text-align: center;
    margin: 0 auto;
  }
`;

export default Customers;
