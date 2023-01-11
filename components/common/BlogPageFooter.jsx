import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import footerBCG from '../../public/assets/footer-bcg2.png';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import slugify from 'slugify';

const BlogPageFooter = () => {
  const router = useRouter();

  const [footerData, setFooterData] = useState([]);
  const [articleTypes, setArticleTypes] = useState([]);
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

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/footer?populate[0]=socialMediaLinks.logo&populate[1]=logo`
    )
      .then((res) => res.json())
      .then((data) => setFooterData(data?.data?.attributes));

    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/articles?sort=updatedAt:desc&pagination[start]=0&pagination[limit]=200&populate=*`
    )
      .then((res) => res.json())
      .then((data) =>
        setArticleTypes(
          [
            ...new Set(
              data?.data?.map((article) => article.attributes.type.trim())
            ),
          ].slice(0, 5)
        )
      );
  }, []);

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
        <div className="first-row">
          <article className="footer-icons">
            <div className="logo">
              <Link href="/">
                <a>
                  <Image
                    src={footerData?.logo?.data?.attributes?.url}
                    alt="logo"
                    width={isMobile ? 104 : 150}
                    height={isMobile ? 20 : 28}
                    placeholder="blur"
                    blurDataURL={footerData?.logo?.data?.attributes?.url}
                  />
                </a>
              </Link>
            </div>
          </article>

          <article className="footer-form">
            <h5>{footerData?.subscribeHeading}</h5>
            <form
              method="post"
              action="https://api.mailmodo.com/api/v1/addToList"
              onSubmit={onSubmit}
            >
              <input
                required
                type="email"
                placeholder="Enter your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn">
                {footerData?.subscribeCTAText}
              </button>
            </form>
          </article>
        </div>

        <div className="second-row">
          <article className="tool-links">
            <h4>Explore Products</h4>
            <div className="links">
              <Link href="/onboarding-tool">
                <a>Onboarding tool</a>
              </Link>
              <Link href="/dao-manager">
                <a>DAO Manager</a>
              </Link>
            </div>
          </article>

          <article className="category-links">
            <h4>Categories</h4>
            <div className="links">
              {articleTypes?.map((articleType, i) => {
                return (
                  <a
                    key={i}
                    href={`#${slugify(articleType)}`}
                    onClick={() => {
                      router.push(
                        `/blog?category=${slugify(articleType)}`,
                        undefined,
                        {
                          shallow: true,
                        }
                      );
                    }}
                  >
                    {articleType}
                  </a>
                );
              })}
            </div>
          </article>

          <article className="social-icons">
            <h4>Contact</h4>
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
                      placeholder="blur"
                      blurDataURL={socialMediaLink?.logo?.data?.attributes?.url}
                    />
                  </a>
                );
              })}
            </div>

            <p>Copyright &copy; 2022 DaoLens</p>
            <p>All rights reserved</p>
          </article>
        </div>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: #000;
  padding: 4rem 0;

  @media (min-width: 768px) {
    background: url(${footerBCG.src}) center/cover no-repeat;
  }

  .section-center {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    @media (min-width: 768px) {
      gap: 4rem;
    }
  }

  .first-row {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;

    @media (min-width: 768px) {
      grid-template-columns: auto 1fr;
    }
  }

  .second-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }

    h4 {
      font-weight: normal;
      letter-spacing: 0;
    }

    .links {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      a {
        color: #cbbde9;
        &:hover {
          color: #f1f1f1;
        }
      }
    }
  }

  .social-icons {
    .icons {
      margin-bottom: 0.25rem;
      display: flex;
      gap: 1rem;

      @media (max-width: 592px) {
        margin-top: 1rem;
      }
    }

    p {
      margin-bottom: 0;
    }
  }

  .footer-form {
    @media (min-width: 768px) {
      text-align: center;
    }

    h5 {
      margin-bottom: 1rem;
      font-size: 1.1rem;
      font-weight: normal;
    }

    form {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;

      @media (min-width: 768px) {
        justify-content: center;
      }
    }

    input {
      width: 320px;
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
    }
  }
`;

export default BlogPageFooter;
