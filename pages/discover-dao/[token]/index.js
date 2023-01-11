import { HeadSeo, DaoNavbar } from "../../../components/common";
import styled from "styled-components";
import { useRouter } from "next/router";
import data from "../../../data.json";
import banner from "../../../banner.json";
import Image from "next/image";
import { FaArrowRight, FaDiscord, FaTwitter } from "react-icons/fa";
import howToJoinBCG from "../../../public/assets/discover-daos/how-to-join-bcg.png";
import ReactLinkify from "react-linkify";
import pattern from "../../../public/assets/discover-daos/pattern.png";
const SingleDaoPage = () => {
  const router = useRouter();
  const { token } = router.query;
  const dao = data?.find((dao) => dao.attributes.Token === `$${token}`);
  return (
    <>
      <HeadSeo title={dao?.attributes?.Token} />
      <main>
        <div
          style={{
            background: `url('${pattern.src}') white center`,
            backgroundSize: "105%",
          }}
        >
          <DaoNavbar />

          <Container className="section section-center">
            <div
              className="hero-banner"
              style={{
                background: `url(${dao?.attributes?.twittercover}) center/cover no-repeat`,
              }}
            >
              <div className="links">
                <a
                  href={dao?.attributes?.websiteLink}
                  className="website-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Website
                </a>
                <a
                  href={dao?.attributes?.discordLink}
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: "#844AFF",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <FaDiscord size="28px" color="white" />{" "}
                  <span className="discord-count">
                    {dao?.attributes?.Community.split("/")[0]}
                  </span>
                </a>
                <a
                  href={dao?.attributes?.twitterLink}
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                  style={{ background: "#60B6FD" }}
                >
                  <FaTwitter color="white" />
                </a>
              </div>
              <div className="dao-logo-wrapper">
                <img
                  className="logo"
                  src={dao?.attributes?.twitterdp}
                  alt={dao?.attributes?.Token}
                  objectFit="contain"
                />
                <h2>{dao?.attributes?.title}</h2>
              </div>
            </div>

            <div className="dao-info">
              <div className="dao-info-left">
                <p>{dao?.attributes?.About.replace(/\\|\"/g, "")}</p>
                <div className="footer">
                  <span>Founded in {dao?.attributes?.age}</span>
                  <span>On {dao?.attributes?.Blockchain} Blockchain</span>
                </div>
              </div>

              <div className="dao-info-right">
                <div className="tags">
                  {dao?.attributes?.type.split(", ").map((tag, index) => (
                    <span className="tag-btn" key={index}>
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="community">
                  <span className="tag-btn">
                    {dao?.attributes?.Community.split("/")[1]} Token Holders
                  </span>
                </div>

                <div className="token">
                  <span className="tag-btn">
                    Token {dao?.attributes?.Token}
                  </span>
                </div>
              </div>
            </div>

            <div className="how-to-join">
              <div className="content">
                <h4>How to join:</h4>
                <ReactLinkify>
                  <p
                    style={{
                      overflowWrap: "break-word",
                      hyphens: "auto",
                      wordWrap: "break-word",
                      wordBreak: "break-word",
                    }}
                  >
                    {dao?.attributes?.HowToJoin.replace(/\\|\"/g, "\n").trim()}
                  </p>
                </ReactLinkify>
              </div>
            </div>

            <div className="banner">
              <div className="info">
                <h2>{banner.heading}</h2>
                <p>{banner.description}</p>
                <small>{banner.subDescription}</small>
              </div>

              <div className="btn-container">
                <a href={banner.buttonLink} className="banner-btn">
                  {banner.buttonText} <FaArrowRight />
                </a>
              </div>
            </div>

            <div className="more-info">
              <h4>Helpful resources</h4>
              <a href={dao?.attributes?.AdditionalInfo.replace(/\\|\"/g, "")}>
                {dao?.attributes?.AdditionalInfo.replace(/\\|\"/g, "")}
              </a>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};

export const Container = styled.section`
  padding: 6rem 0 0 0;

  .dao-logo-wrapper {
    position: absolute;
    display: flex;
    padding: 16px;
    gap: 10px;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(40px);
    border-radius: 24px;
    bottom: -50px;
    .logo {
      width: 80px;
      height: 80px;
    }
    @media screen and (max-width: 550px) {
      left: 0%;
      bottom: -26%;
      background-color: pink;
      padding: 6px 12px;
      h2 {
        font-size: 1.25rem;
        color: black;
        margin: 0;
      }
      .logo {
        width: 50px;
        height: 50px;
      }
    }
  }
  .hero-banner {
    padding: 4rem 3rem;
    min-height: 300px;
    position: relative;
    border-radius: 1rem;

    .title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      gap: 1rem;

      h1 {
        margin-bottom: 0;
      }
    }

    img {
      width: 100%;
      border-radius: 0.5rem;
    }

    .links {
      position: absolute;
      bottom: 5%;
      right: 5%;
      display: flex;
      gap: 1rem;
    }

    .social-link {
      display: inline-block;
      background: #fff;
      color: #6600ff;
      font-size: 1.5rem;
      border-radius: 2rem;
      padding: 2px 20px;
      /* .discord-count {
        font-size: 1.5rem;
      } */
      @media screen and (max-width: 550px) {
        padding: 2px 10px;
        .discord-count {
          font-size: 0.75rem;
        }
      }
    }

    .website-link {
      display: inline-block;
      color: #fff;
      cursor: pointer;
      transition: all 0.3s linear;
      border-radius: 49px;
      padding: 10px 32px;
      border: none;
      font-size: 1.5rem;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
        linear-gradient(
          85.21deg,
          #5fb5fc -7.59%,
          #844aff 62.28%,
          #df52ff 113.15%
        );
      &:hover {
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.1)
          ),
          linear-gradient(
            85.21deg,
            #5fb5fc -7.59%,
            #844aff 62.28%,
            #df52ff 113.15%
          );
        box-shadow: 0px 1px 32px #aa47e5;
      }
      @media screen and (max-width: 550px) {
        padding: 12px 18px;
        font-size: 0.75rem;
      }
    }
  }

  .dao-info {
    margin: 4rem 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
    @media screen and (max-width: 550px) {
      margin: 6rem 0;
    }

    .dao-info-left {
      margin: 0 auto;
      color: black;
      .footer {
        display: flex;
        gap: 1.5rem;
        color: #565656;
        font-family: Inter;
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 21px;
      }
      p {
        color: #8259ff;
      }
    }

    .dao-info-right {
      display: grid;
      grid-template-column: 1fr;
      gap: 1rem;
      margin: 0 auto;
    }

    .tags {
      display: flex;
      gap: 1rem;
      justify-content: space-between;
    }

    .tag-btn {
      border-radius: 16px;
      padding: 8px 20px;
      display: block;
      color: #8259ff;
      border: 1px solid #ded0fb;
    }

    .community,
    .token {
      .tag-btn {
        width: 100%;
        text-align: center;
      }
    }
  }

  .how-to-join {
    padding: 2rem 3rem;
    color: black;
    font-style: normal;
    font-weight: 700;
    font-size: 20.2514px;
    line-height: 31px;
    border: 1px solid #ded0fb;
    border-radius: 24px;
    p {
      max-width: 100%;
      color: black;
      font-weight: 400;
    }
  }

  .banner {
    background: url(${banner.imageLink}) center/cover no-repeat;
    padding: 2rem 3rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 3rem 0;

    img {
      border-radius: 0.5rem;
    }

    p {
      color: #fff;
    }

    .banner-btn {
      background: linear-gradient(0deg, #ffffff, #ffffff),
        linear-gradient(90deg, #5865f2 0%, #60b6fd 100%);
      box-shadow: 0px 0px 21.964px #5fb5fc;
      border-radius: 1034.14px;
      padding: 9.15167px 25.6247px;
    }
  }

  .more-info {
    padding: 0 1rem;
    color: black;
    a {
      text-decoration: underline;
      color: black;
      word-break: break-all;
    }
  }
`;

export default SingleDaoPage;
