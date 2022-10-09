import styled from 'styled-components';
import Image from 'next/image';
import investorBCG from '../../public/assets/homepage/investor-bcg.png';
import { useState } from 'react';

const Investors = ({ investors }) => {
  let inves = investors.filter((investor, idx) => idx < 12 && investor);

  const [showAllInvestors, setShowAllInvestors] = useState(false);

  const investorsToBeShown = showAllInvestors ? investors : inves;

  return (
    <Container className="section">
      <div className="section-center">
        <div className="title">
          <h2>Our investors</h2>
        </div>

        <div className="investor-center">
          {investorsToBeShown?.map((investor) => {
            return (
              <article
                key={investor?.id}
                className={`${
                  investor?.attributes?.isHightlight
                    ? 'highlight investor'
                    : 'investor'
                }`}
              >
                <Image
                  src={investor?.attributes?.logo?.data?.attributes?.url}
                  alt={investor?.attributes?.name}
                  width={75}
                  height={75}
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={
                    investor?.attributes?.logo?.data?.attributes?.url
                  }
                  className={
                    !investor?.attributes?.isHightlight
                      ? 'rounded-full'
                      : undefined
                  }
                />
                <p>{investor?.attributes?.name}</p>
              </article>
            );
          })}
        </div>

        <div className="btn-container btn-investors">
          <button
            className="btn2"
            onClick={() => setShowAllInvestors((prev) => !prev)}
          >
            {showAllInvestors ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  .title {
    text-align: center;
  }

  .rounded-full {
    border-radius: 50%;
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

  .btn-investors {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
  }

  .investor.highlight {
    justify-content: center;
    p {
      display: none;
    }
    span {
      width: 150px !important;
    }

    &:nth-child(1) {
      grid-row: 1 / 4;
    }
    &:nth-child(2) {
      grid-row: 4 / 6;
    }
    &:nth-child(3) {
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

    .investor.highlight {
      &:nth-child(1) {
        grid-row: 1 / 3;
        grid-column: 1 / 2;
      }
      &:nth-child(2) {
        grid-row: 1 / 3;
        grid-column: 2 / 3;
      }
      &:nth-child(3) {
        grid-row: 1 / 3;
        grid-column: 3 / 4;
      }
    }
  }
`;

export default Investors;
