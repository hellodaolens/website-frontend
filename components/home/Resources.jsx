import { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import resourcesBCG from '../../public/assets/homepage/resources-bcg.png';
import resource from '../../public/assets/homepage/resource.png';

const Resources = ({ DAOResourcesHeading, DAOResources }) => {
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
          <h2>{DAOResourcesHeading}</h2>
        </div>
        <div className="resources-center">
          {DAOResources?.map((resource) => {
            return (
              <article key={resource?.id} className="resource">
                <Image
                  src={resource?.logo?.data?.attributes?.url}
                  alt={resource?.name}
                  width={isMobile ? 44 : 80}
                  height={isMobile ? 44 : 80}
                  objectFit="contain"
                />
                <div className="resource-info">
                  <h5>{resource?.name}</h5>
                  <p>{resource?.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${resourcesBCG.src}) top/cover no-repeat;

  .resources-center {
    margin-top: 4rem;
    display: grid;
    align-items: center;
    gap: 2rem;

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .resource {
    background: url(${resource.src}) center/cover no-repeat;
    padding: 2rem;
    border-radius: 20px;
  }
`;

export default Resources;
