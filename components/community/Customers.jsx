import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import ctaBCG from '../../public/assets/onboarding/cta-bcg.png';

const Customers = ({ section2Heading }) => {
  const [customers, setCustomers] = useState([]);
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

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/customers?populate=*`)
      .then((res) => res.json())
      .then((data) => setCustomers(data?.data));
  }, []);

  return (
    <Container className="section">
      <div className="section-center">
        <div className="title">
          <h3>{section2Heading}</h3>
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

  .customer-center {
    margin: 4rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  .customer {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 100px;
    padding: 8px 32px 8px 8px;
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

  .bottom-text {
    text-align: center;
    margin: 0 auto;
  }
`;

export default Customers;
