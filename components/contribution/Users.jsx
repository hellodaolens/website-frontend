import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import styled from 'styled-components';
import Image from 'next/image';

const Users = ({ users, usedByHeading }) => {
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
          <h4>{usedByHeading}</h4>
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
            {users?.map((customer) => {
              return (
                <article key={customer?.id} className="customer">
                  <Image
                    src={customer?.attributes?.logo?.data?.attributes?.url}
                    alt={customer?.attributes?.name}
                    width={isMobile ? 44 : 64}
                    height={isMobile ? 44 : 64}
                  />
                  <p>{customer?.attributes?.name}</p>
                </article>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: var(--clr-black);

  .title {
    text-align: center;
    p {
      margin: 0 auto;
    }
  }

  .carousel-container {
    width: 100%;
  }

  .customer-center {
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

  .customer {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem;
    margin: 0 1rem;
  }

  .customer-img {
    width: 44px;
    height: 44px;

    @media screen and (min-width: 792px) {
      width: 64px;
      height: 64px;
    }
  }

  .customer p {
    color: var(--clr-white);
    margin-bottom: 0;
  }
`;

export default Users;
