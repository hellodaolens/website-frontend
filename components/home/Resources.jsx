import { useState, useEffect } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import styled from 'styled-components';
import resourcesBCG from '../../public/assets/homepage/resources-bcg.png';
import resource from '../../public/assets/homepage/resource.png';

const Resources = ({ DAOResourcesHeading, DAOResources }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [resources, setResources] = useState(DAOResources);
  const [isMobile, setIsMobile] = useState(false);

  const handleFilterResources = (type) => {
    if (type === 'all') {
      setResources(DAOResources);
    } else {
      const tempResources = DAOResources?.filter(
        (resource) => resource.type.trim().toLowerCase() === type.toLowerCase()
      );
      setResources(tempResources);
    }
  };

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
          <h2>{DAOResourcesHeading}</h2>
        </div>

        <div className="tabs-container">
          <button className="btn2" onClick={() => handleFilterResources('all')}>
            all
          </button>
          <button
            className="btn2"
            onClick={() => handleFilterResources('product')}
          >
            product
          </button>
          <button
            className="btn2"
            onClick={() => handleFilterResources('service')}
          >
            service
          </button>
          <button
            className="btn2"
            onClick={() => handleFilterResources('investment')}
          >
            investment
          </button>
          <button
            className="btn2"
            onClick={() => handleFilterResources('charity')}
          >
            charity
          </button>
        </div>

        <div className="resources-center">
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
            {resources?.map((resource) => {
              const [readMore, setReadMore] = useState(false);
              const { name, description } = resource;
              const showMoreBtn = description?.length > 130;
              return (
                <article key={resource?.id} className="resource">
                  <Image
                    src={resource?.logo?.data?.attributes?.url}
                    alt={resource?.name}
                    width={isMobile ? 44 : 80}
                    height={isMobile ? 44 : 80}
                    objectFit="contain"
                    placeholder="blur"
                    blurDataURL={resource?.logo?.data?.attributes?.url}
                  />
                  <div className="resource-info">
                    <h5>{name}</h5>
                    <p>
                      {description.substr(0, 120)}
                      {showMoreBtn &&
                        (readMore
                          ? description.substr(120, description.length)
                          : `... `)}
                      {showMoreBtn && (
                        <button
                          id="toggle-text"
                          onClick={() => setReadMore(!readMore)}
                        >
                          {readMore ? (
                            <>
                              &nbsp;show less <FaAngleUp />
                            </>
                          ) : (
                            <>
                              read more <FaAngleDown />
                            </>
                          )}
                        </button>
                      )}
                    </p>
                  </div>
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
  background: url(${resourcesBCG.src}) top/cover no-repeat;

  .tabs-container {
    margin: 3rem 0 4rem;
    display: flex;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.5rem 0.75rem;
    flex-wrap: wrap;
    border-radius: 90px;
    border: 2px solid #372744;
    width: fit-content;

    @media (max-width: 375px) {
      justify-content: center;
    }

    .btn2 {
      text-transform: capitalize;
      cursor: pointer;
      border: none;
      outline: none;
      padding: 0.25rem 0.5rem;
      background: transparent;

      &:hover {
        background: transparent;
      }
      @media (max-width: 375px) {
        padding: 5px;
        font-size: 0.75rem;
      }
    }
  }

  .carousel-container {
    width: 100%;
    /* justify-content: center; */
  }

  .resources-center {
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

  .resource {
    background: url(${resource.src}) center/cover no-repeat;
    padding: 2rem;
    border-radius: 20px;
    margin: 0 1rem;
    height: 100%;

    .resource-info {
      margin-top: 1rem;
    }

    p {
      margin-bottom: 0;
    }
  }

  #toggle-text {
    background: transparent;
    outline: none;
    text-transform: capitalize;
    color: rgb(121, 187, 241);
    border: none;
    font-size: 0.9rem;
    cursor: pointer;
    svg {
      vertical-align: middle;
    }
  }
`;

export default Resources;
