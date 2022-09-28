import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import styled from 'styled-components';
import resourcesBCG from '../../public/assets/homepage/resources-bcg.png';
import SingleResource from './SingleResource';

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
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  const [resources, setResources] = useState(DAOResources);
  const filters = [
    'all',
    ...new Set(
      DAOResources?.map((resource) => resource.type.trim().toLowerCase())
    ),
  ];

  const handleFilterResources = (type) => {
    if (type === 'all') {
      setResources(DAOResources);
    } else {
      const tempResources = DAOResources?.filter(
        (resource) => resource.type.trim().toLowerCase() === type
      );
      setResources(tempResources);
    }
  };

  return (
    <Container className="section">
      <div className="section-center">
        <div className="title">
          <h2>{DAOResourcesHeading}</h2>
        </div>

        <div className="tabs-container">
          {filters.map((filter, index) => {
            return (
              <button
                key={index}
                className="btn2"
                onClick={() => handleFilterResources(filter)}
              >
                {filter}
              </button>
            );
          })}
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
            {resources?.map((resource) => (
              <SingleResource key={resource?.id} resource={resource} />
            ))}
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
`;

export default Resources;
