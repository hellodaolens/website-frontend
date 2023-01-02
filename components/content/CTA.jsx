import { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import ctaBCG from '../../public/assets/content/cta-bcg.png';
import { toast } from 'react-toastify';

const CTA = ({ heading, description, CTAText, image, points }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState('');

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

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.mailmodo.com/api/v1/addToList`,
        {
          method: 'POST',
          headers: {
            mmApiKey: '0KTN04A-GKMMYZ4-N5H45E1-MMJ01TC',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            listName: 'email subscribers',
          }),
        }
      );
      toast.success("Thank you for submitting, you'll receive it soon!", {
        position: 'top-center',
        autoClose: 5000,
        closeOnClick: true,
      });
    } catch (err) {
      toast.error(err, {
        position: 'top-center',
        autoClose: 5000,
        closeOnClick: true,
      });
      console.error(`Error: ${err}`);
    }
    setEmail('');
  };

  return (
    <Container className="section">
      <div className="section-center">
        <div className="header">
          <article className="info">
            <h2>{heading}</h2>
            <p>{description}</p>

            <form
              method="post"
              action="https://api.mailmodo.com/api/v1/addToList"
              onSubmit={onSubmit}
            >
              <input
                required
                className="email-input"
                type="email"
                placeholder="Enter your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn">
                {CTAText}
              </button>
            </form>
          </article>
          <article className="image">
            <Image
              src={image?.data?.attributes?.url}
              alt={CTAText}
              width={508}
              height={308}
              placeholder="blur"
              blurDataURL={image?.data?.attributes?.url}
            />
          </article>
        </div>

        <div className="points">
          {points?.map((point) => {
            return (
              <div key={point?.id} className="point">
                <Image
                  src={point?.img.data.attributes.url}
                  alt="point"
                  width={isMobile ? 38 : 57}
                  height={isMobile ? 58 : 87}
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={point?.img.data.attributes.url}
                />
                <p>{point?.point}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${ctaBCG.src}) center/cover no-repeat;

  .header {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
    align-items: center;
    margin: 0 auto;
    text-align: center;

    p {
      margin-left: auto;
      margin-right: auto;
    }

    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
      gap: 6rem;
      text-align: unset;
    }
  }

  form {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    @media (min-width: 610px) and (max-width: 990px) {
      justify-content: center;
    }
  }

  input {
    width: 100%;
    max-width: 420px;
    height: 48px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border-radius: 90px;
    border: none;
    padding: 14px 20px;
    color: #fff;
    &::placeholder {
      color: rgba(255, 255, 255, 0.75);
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }

    @media (max-width: 592px) {
      width: 100%;
    }
  }

  .btn {
    height: 48px;
    padding: 10px 20px;
  }

  .points {
    margin-top: 2rem;
    display: grid;

    @media (min-width: 992px) {
      margin-top: 4rem;
      gap: 0 1rem;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      justify-content: space-between;
    }

    .point {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0.5rem;
      align-items: center;

      p {
        margin-bottom: -1rem;
      }
    }
  }
`;

export default CTA;
