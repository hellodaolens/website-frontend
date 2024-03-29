import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import footerBCG from "../../public/assets/footer-bcg.png";
import Link from "next/link";
import { toast } from "react-toastify";

const Footer = () => {
  const [footerData, setFooterData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState("");

  const setDimension = () => {
    const ismobile = window.innerWidth < 595;
    if (ismobile !== isMobile) setIsMobile(ismobile);
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension, false);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [isMobile]);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/footer?populate[0]=socialMediaLinks.logo&populate[1]=logo`
    )
      .then((res) => res.json())
      .then((data) => setFooterData(data?.data?.attributes));
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.mailmodo.com/api/v1/addToList`,
        {
          method: "POST",
          headers: {
            mmApiKey: "0KTN04A-GKMMYZ4-N5H45E1-MMJ01TC",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            listName: "email subscribers",
          }),
        }
      );
      toast.success("Thank you for submitting, you'll receive it soon!", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
      });
    } catch (err) {
      toast.error(err, {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
      });
      console.error(`Error: ${err}`);
    }
    setEmail("");
  };

  return (
    <Container className="section">
      <div className="section-center">
        <article className="footer-icons">
          <div className="logo">
            <Link href="/discover-dao">
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
                      placeholder="blur"
                      blurDataURL={socialMediaLink?.logo?.data?.attributes?.url}
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
    gap: 1rem;

    @media (max-width: 592px) {
      margin-top: 1rem;
    }
  }

  .social-icons p {
    margin-top: 0.75rem;
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

export default Footer;
