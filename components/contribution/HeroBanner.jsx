import Users from './Users';
import styled from 'styled-components';
import Image from 'next/image';

const HeroBanner = ({ heroImg1, heroImg2, usedByHeading }) => {
  return (
    <Container>
      <div className="section-center">
        <div className="img">
          <div className="big-img">
            <Image
              src={heroImg1?.data.attributes.url}
              alt="admin"
              width={1136}
              height={629}
            />
          </div>
          <div
            className="small-img"
            style={{ position: 'absolute', top: '35%', right: '10%' }}
          >
            <Image
              src={heroImg2?.data.attributes.url}
              alt="admin"
              width={249}
              height={492}
            />
          </div>
        </div>
        <Users usedByHeading={usedByHeading} />
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
