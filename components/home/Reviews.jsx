import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import review1 from '../../public/assets/homepage/review1.png';
import review2 from '../../public/assets/homepage/review2.png';
import review3 from '../../public/assets/homepage/review3.png';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
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
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/testimonials?populate=*`)
      .then((res) => res.json())
      .then((data) => setReviews(data?.data));
  }, []);

  return (
    <Container className="section">
      <div className="section-center">
        <div className="title">
          <h2>What DAOs are saying about us?</h2>
        </div>

        <div className="reviews-center">
          {reviews?.map((review) => {
            return (
              <article key={review?.id} className="review">
                <Image
                  src={review?.attributes?.image?.data?.attributes?.url}
                  alt={review?.attributes?.company}
                  width={isMobile ? 44 : 64}
                  height={isMobile ? 44 : 64}
                />
                <p>{review?.attributes?.testimonial}</p>
                <h5>{review?.attributes?.by}</h5>
                <small>
                  {review?.attributes?.designation}{' '}
                  {review?.attributes?.company}
                </small>
              </article>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);

  .title {
    text-align: center;
    max-width: 620px;
    margin: 0 auto;
  }

  .reviews-center {
    margin-top: 4rem;
    display: grid;
    gap: 1rem;
    flex-wrap: wrap;

    @media screen and (min-width: 792px) {
      gap: 2rem;
      grid-template-columns: 1fr 1fr;
    }
  }

  .review {
    padding: 2rem;
    background: url(${review1.src}) center no-repeat;
    background-size: 100% 100%;
    border-radius: 20px;

    &:nth-child(2) {
      background: url(${review3.src}) center no-repeat;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex-grow: 1;

      h5 {
        margin: 1rem 0 0.5rem;
      }

      p {
        order: 4;
        margin-top: 1rem;
      }
    }

    &:nth-child(3) {
      background: url(${review2.src}) center no-repeat;
    }
  }
`;

export default Reviews;
