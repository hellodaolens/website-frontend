import Image from 'next/image';
import styled from 'styled-components';
import ctaBCG from '../../public/assets/onboarding/cta-bcg.png';
import checkMediaType from '../utils/checkMediaType';
import ReactPlayer from 'react-player/lazy';

const CTA = ({
  section2SubHeading,
  section2Heading,
  section2Description,
  section2Img,
  section2YtLink,
  secction2ShowYtVideo,
}) => {
  return (
    <Container className='section'>
      <div className='section-center'>
        <article className='info'>
          <p className='subheading'>{section2SubHeading}</p>
          <h3>{section2Heading}</h3>
          <p>{section2Description}</p>

          {secction2ShowYtVideo ? (
            <div className='video'>
              <ReactPlayer
                url={section2YtLink}
                controls={true}
                width='100%'
                height='100%'
              />
            </div>
          ) : (
            <div className='img'>
              {checkMediaType(section2Img) === 'video' ? (
                <video
                  src={section2Img?.data?.attributes?.url}
                  alt='DAO community'
                  width={1136}
                  height={620}
                  style={{ maxWidth: '1136px' }}
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <Image
                  src={section2Img?.data?.attributes?.url}
                  alt='DAO community'
                  width={1136}
                  height={620}
                  placeholder='blur'
                  blurDataURL={section2Img?.data?.attributes?.url}
                />
              )}
            </div>
          )}
        </article>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${ctaBCG.src}) center/cover no-repeat;
  text-align: center;

  .video {
    overflow: hidden;
    position: relative;
    width: 100%;
    max-width: 1136%;
    &::after {
      padding-top: 56.25%;
      display: block;
      content: '';
    }
    iframe {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
    }
  }

  .info {
    p {
      margin: 0 auto 4rem;
    }

    .subheading {
      margin-bottom: 1rem;
      color: #fff;
    }

    span {
      border: 1px solid #575757 !important;
      border-radius: 20px;
      outline: none;
    }
  }
`;

export default CTA;
