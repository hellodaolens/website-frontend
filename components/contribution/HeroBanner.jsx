import Users from './Users';
import styled from 'styled-components';
import Image from 'next/image';
import checkMediaType from '../utils/checkMediaType';

const HeroBanner = ({ heroImg1, heroImg2, usedByHeading, users }) => {
  return (
    <Container>
      <div className="section-center">
        <div className="img">
          <div className="big-img">
            {checkMediaType(heroImg1) === 'video' ? (
              <video
                src={heroImg1?.data?.attributes.url}
                alt="contributions"
                width={880}
                style={{ maxWidth: '880px' }}
                height={495}
                autoPlay
                loop
                muted
              />
            ) : (
              <Image
                src={heroImg1?.data?.attributes.url}
                alt="contributions"
                width={880}
                height={495}
                placeholder="blur"
                blurDataURL={heroImg1?.data?.attributes.url}
              />
            )}
          </div>
          <div
            className="small-img"
            style={{ position: 'absolute', top: '25%', right: '5%' }}
          >
            {checkMediaType(heroImg2) === 'video' ? (
              <video
                src={heroImg2?.data?.attributes.url}
                alt="contributions"
                width={225}
                style={{ maxWidth: '225px' }}
                height={400}
                autoPlay
                loop
                muted
              />
            ) : (
              <Image
                src={heroImg2?.data?.attributes.url}
                alt="contributions"
                width={225}
                height={400}
                placeholder="blur"
                blurDataURL={heroImg2?.data?.attributes.url}
              />
            )}
          </div>
        </div>
        <Users users={users} usedByHeading={usedByHeading} />
      </div>
    </Container>
  );
};

export const Container = styled.div`
  background: var(--clr-black);
  padding-bottom: 0;

  .big-img {
    margin: 0 auto;
    text-align: center;
  }
  img,
  video {
    border-radius: 1rem;
  }

  .img {
    position: relative;
    margin-top: -8rem;

    @media (max-width: 792px) {
      margin-top: -6rem;
    }
  }

  @media (max-width: 792px) {
    .small-img {
      display: none;
    }
  }
`;

export default HeroBanner;
