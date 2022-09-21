import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import investorBCG from '../../public/assets/homepage/investor-bcg.png';

const Investors = () => {
  const [investors, setInvestors] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/investors?populate=*`)
      .then((res) => res.json())
      .then((data) => setInvestors(data?.data));
  }, []);

  return (
    <Container className="section">
      <div className="section-center">
        <div className="title">
          <h2>Our investors</h2>
        </div>

        <div className="investor-center">
          {investors?.map((investor) => {
            return (
              <article key={investor?.id} className="investor">
                <Image
                  src={investor?.attributes?.logo?.data?.attributes?.url}
                  alt={investor?.attributes?.name}
                  width={40}
                  height={40}
                  objectFit="contain"
                />
                <p>{investor?.attributes?.name}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  .title {
    text-align: center;
  }

  .investor {
    padding: 1rem;
    background: rgba(0, 0, 0, 0.02);
    backdrop-filter: blur(100px);
    border-radius: 20px;
    background: url(${investorBCG.src}) center/cover no-repeat;
    display: flex;
    align-items: center;
    gap: 2rem;

    p {
      margin-bottom: 0;
    }
  }

  .investor {
    &:nth-child(1),
    &:nth-child(4),
    &:nth-child(5) {
      justify-content: center;
      p {
        display: none;
      }
      span {
        width: 150px !important;
      }
    }

    &:nth-child(1) {
      grid-row: 1 / 4;
    }
    &:nth-child(4) {
      grid-row: 4 / 6;
    }
    &:nth-child(5) {
      grid-row: 6 / 8;
    }
  }

  .investor-center {
    margin-top: 4rem;
    display: grid;
    gap: 1.5rem;
    grid-template-rows: repeat(12, 1fr);
  }

  @media screen and (min-width: 792px) {
    .investor-center {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(5, 1fr);
    }

    .investor {
      &:nth-child(1) {
        grid-row: 1 / 5;
      }
      &:nth-child(4) {
        grid-row: 1 / 3;
      }
      &:nth-child(5) {
        grid-row: 3 / 5;
      }
    }
  }
`;

export default Investors;
