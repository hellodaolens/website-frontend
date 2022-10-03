import { useState, useEffect } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import Image from 'next/image';
import styled from 'styled-components';
import resource from '../../public/assets/homepage/resource.png';

const SingleResource = ({ resource }) => {
  const [readMore, setReadMore] = useState(false);
  const { name, description } = resource;
  const [isMobile, setIsMobile] = useState(false);
  const showMoreBtn = description?.length > 130;

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
    <Container>
      <Image
        src={resource?.logo?.data?.attributes?.url}
        alt={resource?.name}
        width={isMobile ? 44 : 80}
        height={isMobile ? 44 : 80}
        objectFit="contain"
        placeholder="blur"
        blurDataURL={resource?.logo?.data?.attributes?.url}
        className="resource-logo"
      />
      <div className="resource-info">
        <h5>{name}</h5>
        <p>
          {description}
        </p>
      </div>
    </Container>
  );
};

export const Container = styled.article`
  background: url(${resource.src}) center/cover no-repeat;
  padding: 2rem;
  border-radius: 20px;
  margin: 0 1rem;
  display: grid;
  height: 100%;

  @media (min-width: 640px) {
    align-items: center;
    height: 100%;
  }

  span {
    justify-self: left;
  }

  .resource-info {
    margin-top: 1rem;
  }

  p {
    margin-bottom: 0;
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

export default SingleResource;
