import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import footerBCG from '../../public/assets/footer-bcg.png';

const Footer = () => {
  const [footerData, setFooterData] = useState([]);
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
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/footer?populate[0]=socialMediaLinks.logo&populate[1]=logo`
    )
      .then((res) => res.json())
      .then((data) => setFooterData(data?.data?.attributes));
  }, []);

  return (
    <Container className="section">
      <div className="section-center">
        <article className="footer-icons">
          <div className="logo">
            <Image
              src={footerData?.logo?.data?.attributes?.url}
              alt="logo"
              width={isMobile ? 104 : 150}
              height={isMobile ? 20 : 28}
            />
          </div>
          <div className="social-icons">
            <div className="icons">
              {footerData?.socialMediaLinks?.map((socialMediaLink) => {
                return (
                  <a
                    key={socialMediaLink?.id}
                    href={socialMediaLink?.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={socialMediaLink?.logo?.data?.attributes?.url}
                      alt={socialMediaLink?.attributes?.name}
                      width={isMobile ? 24 : 28}
                      height={isMobile ? 24 : 28}
                      objectFit="contain"
                    />
                  </a>
                );
              })}
            </div>

            <p>Copyright &copy; DaoLens</p>
          </div>
        </article>

        <article className="footer-form">
          <p>{footerData?.subscribeHeading}</p>
          <form>
            <input type="email" placeholder="Enter your Email Address" />
            <button type="submit" className="btn">
              {footerData?.subscribeCTAText}
            </button>
          </form>
        </article>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${footerBCG.src}) center/cover no-repeat;

  .section-center {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 3rem;
  }

  .icons {
    margin-top: 3rem;
    display: flex;
    gap: 0.5rem;

    @media (max-width: 592px) {
      margin-top: 1rem;
    }
  }

  .social-icons p {
    margin-bottom: 0;
  }

  .footer-form {
    align-self: flex-end;

    p {
      margin-bottom: 1rem;
    }

    form {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    input {
      width: 320px;
      height: 48px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      border-radius: 90px;
      border: none;
      padding: 14px 20px;
      &::placeholder {
        color: #fff;
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
    }
  }
`;

export default Footer;
