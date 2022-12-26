import styled from 'styled-components';
import Image from 'next/image';
import daosData from '../../data.json';
import Carousel from 'react-multi-carousel';
import Link from 'next/link';

const DaoList = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 12,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 12,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  const logos = daosData.map((item) => {
    return {
      src: item.attributes.twitterdp,
      alt: item.attributes.Token,
    };
  });

  return (
    <Container style={{overflowX:"hidden",width:"100%"}}>
      <div 
        class="container play" 
        style={{
          display:"flex",
          gap:"12px",position:"relative",marginBottom:"16px"}}>
      {logos.splice(0,20).map((logo, i) => {
            return (
              <Link
                href={`/discover-dao/${logo.alt.replace('$', '')}`}
                style={{ cursor: "pointer" }}
                key={i}
              >
                <img
                  style={{ cursor: "pointer",borderRadius:"12px" ,width:"100px"}}
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                />
              </Link>
            );
          })}
          </div>
          <div class="container play-reverse" style={{display:"flex",gap:"12px",position:"relative"}}>
      {logos.splice(21,40).map((logo, i) => {
            return (
              <Link
                href={`/discover-dao/${logo.alt.replace('$', '')}`}
                style={{ cursor: "pointer" }}
                key={i}
              >
                <img
                  style={{ cursor: "pointer",borderRadius:"12px" ,width:"100px"}}
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                />
              </Link>
            );
          })}
          </div>
    </Container>
  );
};

export const Container = styled.section`

.play {
  animation: moveRow 55s infinite linear;
}
.play-reverse {
  animation: moveRowRev 55s infinite linear;
}

@keyframes moveRow {
    0% {
        transform: translate3d(0, 0, 0)
    }

    50% {
        transform: translate3d(-60%, 0, 0)
    }

    100% {
        transform: translate3d(10%, 0, 0)
    }
}
@keyframes moveRowRev {
        0% {
        transform: translate3d(-50%, 0, 0)
    }

    50% {
        transform: translate3d(10%, 0, 0)
    }

    100% {
        transform: translate3d(-50%, 0, 0)
    }
}


`;

export default DaoList;
