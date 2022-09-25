import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Customers = ({ customers, customersHeading, customersSubHeading }) => {
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
          <h2>{customersHeading}</h2>
          <p>{customersSubHeading}</p>
        </div>

        <div className="customer-center">
          {customers?.map((customer) => {
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

  .customer-center {
    margin: 4rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem 4rem;

    @media (max-width: 768px) {
      gap: 2rem;
    }
  }

  .customer {
    display: flex;
    align-items: center;
    gap: 1rem;
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

export default Customers;
