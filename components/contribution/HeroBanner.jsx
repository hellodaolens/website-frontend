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
                src={heroImg1?.data.attributes.url}
                alt="contributions"
                width={1136}
                style={{ maxWidth: '1136px' }}
                height={629}
                autoPlay
                loop
                muted
              />
            ) : (
              <Image
                src={heroImg1?.data.attributes.url}
                alt="contributions"
                width={1136}
                height={629}
              />
            )}
          </div>
          <div
            className="small-img"
            style={{ position: 'absolute', top: '35%', right: '10%' }}
          >
            {checkMediaType(heroImg2) === 'video' ? (
              <video
                src={heroImg2?.data.attributes.url}
                alt="contributions"
                width={249}
                style={{ maxWidth: '249px' }}
                height={492}
                autoPlay
                loop
                muted
              />
            ) : (
              <Image
                src={heroImg2?.data.attributes.url}
                alt="contributions"
                width={249}
                height={492}
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

  .img {
    position: relative;
    margin-top: -10rem;

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
