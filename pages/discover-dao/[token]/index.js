import { HeadSeo, DaoNavbar } from '../../../components/common';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import data from '../../../data.json';
import banner from '../../../banner.json';
import Image from 'next/image';
import { FaArrowRight, FaDiscord, FaTwitter } from 'react-icons/fa';
import howToJoinBCG from '../../../public/assets/discover-daos/how-to-join-bcg.png';

const SingleDaoPage = () => {
  const router = useRouter();
  const { token } = router.query;
  const dao = data?.find((dao) => dao.attributes.Token === `$${token}`);

  return (
    <>
      <HeadSeo title={dao?.attributes?.Token} />
      <main
        style={{ background: `linear-gradient(to right, #000, #01182B, #000)` }}
      >
        <DaoNavbar />

        <Container className='section section-center'>
          <div
            className='hero-banner'
            style={{
              background: `url(${dao?.attributes?.twittercover}) center/cover no-repeat`,
            }}
          >
            <div className='title'>
              <Image
                className='logo'
                src={dao?.attributes?.twitterdp}
                alt={dao?.attributes?.Token}
                width={103.93}
                height={104.57}
                objectFit='contain'
              />
              <h1>{dao?.attributes?.Token.replace('$', '')}</h1>
            </div>

            <div className='links'>
              <a
                href={dao?.attributes?.websiteLink}
                className='website-link'
                target='_blank'
                rel='noreferrer'
              >
                Visit Website
              </a>
              <a
                href={dao?.attributes?.discordLink}
                className='social-link'
                target='_blank'
                rel='noreferrer'
              >
                <FaDiscord />
              </a>
              <a
                href={dao?.attributes?.twitterLink}
                className='social-link'
                target='_blank'
                rel='noreferrer'
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className='dao-info'>
            <div className='dao-info-left'>
              <h3>{dao?.attributes?.Token}</h3>
              <p>{dao?.attributes?.About.replace(/\\|\"/g, '')}</p>
              <div className='footer'>
                <span>Founded in {dao?.attributes?.age}</span>
                <span>On {dao?.attributes?.Blockchain} Blockchain</span>
              </div>
            </div>

            <div className='dao-info-right'>
              <div className='tags'>
                {dao?.attributes?.type.split(', ').map((tag, index) => (
                  <span className='tag-btn' key={index}>
                    #{tag}
                  </span>
                ))}
              </div>

              <div className='community'>
                <span className='tag-btn'>
                  {dao?.attributes?.Community} Token Holders
                </span>
              </div>

              <div className='token'>
                <span className='tag-btn'>Token {dao?.attributes?.Token}</span>
              </div>
            </div>
          </div>

          <div className='how-to-join'>
            <h4>How to join:</h4>
            <p>{dao?.attributes?.HowToJoin.replace(/\\|\"/g, '')}</p>
          </div>

          <div className='banner'>
            <div className='info'>
              <h2>{banner.heading}</h2>
              <p>{banner.description}</p>
              <small>{banner.subDescription}</small>
            </div>

            <div className='btn-container'>
              <a href={banner.buttonLink} className='banner-btn'>
                {banner.buttonText} <FaArrowRight />
              </a>
            </div>
          </div>

          <div className='more-info'>
            <h4>More info</h4>
            <a href={dao?.attributes?.AdditionalInfo.replace(/\\|\"/g, '')}>
              {dao?.attributes?.AdditionalInfo.replace(/\\|\"/g, '')}
            </a>
          </div>
        </Container>
      </main>
    </>
  );
};

export const Container = styled.section`
  padding: 2rem 0;
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
    }

    .website-link {
      display: inline-block;
      color: #fff;
      cursor: pointer;
      transition: all 0.3s linear;
      border-radius: 49px;
      padding: 10px 32px;
      border: none;
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
    }
  }

  .dao-info {
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;

    .dao-info-left {
      margin: 0 auto;
      .footer {
        display: flex;
        gap: 1.5rem;
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
      background: rgba(103, 103, 103, 0.37);
      border-radius: 8px;
      padding: 8px 20px;
      display: block;
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
    background: url(${howToJoinBCG.src}) top/cover no-repeat;
    padding: 2rem 3rem;

    p {
      max-width: 900px;
      word-break: break-all;
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
    a {
      color: #fff;
      text-decoration: underline;
      word-break: break-all;
    }
  }
`;

export default SingleDaoPage;
