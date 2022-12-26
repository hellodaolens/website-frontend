import styled from 'styled-components';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import heroImg1 from '../../public/assets/discover-daos/Discover_DAO_Banner.png';
import heroImg2 from '../../public/assets/discover-daos/Discover_DAO_Banner_2.png';
import heroImg3 from '../../public/assets/discover-daos/Discover_DAO_Banner_3.png';
import pattern from '../../public/assets/discover-daos/pattern.png'
import { DaoNavbar } from '../common';
import { tags } from './DAOs';
import { hotTags } from '../utils/getPopularTags';

const Hero = ({ setCurrentTag, bodyRef }) => {
  const heroImages = [
    {
      id: 1,
      img: heroImg1,
      alt: 'hero image 1',
    },
    {
      id: 2,
      img: heroImg2,
      alt: 'hero image 2',
    },
    {
      id: 3,
      img: heroImg3,
      alt: 'hero image 3',
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  console.log(bodyRef)

  return (
    <Container>
      <DaoNavbar />
      <main>
        <div className="title" style={{ position: "absolute", top: 110, zIndex: "2", textAlign: "center", width: "100%" }}>

          <h2>Discover, Join and Contribute</h2>
        </div>
        <Carousel
          showDots={true}
          containerClass="carousel-container"
          rewind={true}
          responsive={responsive}
          renderButtonGroupOutside={false}
          removeArrowOnDeviceType={[
            'tablet',
            'mobile',
          ]}
          keyBoardControl={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {heroImages?.map((item, index) => {
            return (
              <>
                <div
                  className="item"
                  key={item.id}
                  style={{
                    zIndex: "-1",
                    background: `url('${item.img.src}') no-repeat center`,
                    opacity: "0.8",
                    backgroundSize: "contain",
                    margin: "15% 0px",
                    boxShadow: "0px 22.5px 67.5px -5.625px rgba(0, 0, 0, 0.16), 0px 11.25px 11.25px -5.625px rgba(0, 0, 0, 0.04)"
                  }}>
                </div>
                <div style={{
                  zIndex: 0,
                  position: "fixed", top: 0, left: 0, height: "100%", width: "100%",
                  background: " rgba(255, 255, 255, 0.005)",
                  backdropFilter: "blur(77.544px)"
                }}></div>

                <div style={{
                  position: "absolute",
                  width: "100%", height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  left: 0,
                  top: 0,
                  background: `url('${pattern.src}') center`, backgroundSize: "105%"
                }}>
                  <Image
                    onClick={() => {
                      setCurrentTag(hotTags[index].slice(2).trim());
                      bodyRef?.current?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    src={item.img}
                    alt={item.alt}
                    width={1100}
                    objectFit="contain"
                    placeholder="blur"
                    blurDataURL={item.img}
                  />
                </div>
              </>
            );
          })}
          {/* <>
            <div
              className="item"
              key={4}
              style={{
                background: `url("https://res.cloudinary.com/daolens/image/upload/v1665561040/89_d3589cc9c7.png") no-repeat center`,
                backgroundSize: "cover",
                margin: "60px",
                boxShadow: "0px 22.5px 67.5px -5.625px rgba(0, 0, 0, 0.16), 0px 11.25px 11.25px -5.625px rgba(0, 0, 0, 0.04)"
              }}>
            </div>
            <div style={{
              width: "100%", height: "100%",
              background: "rgba(255, 255, 255, 0.005)",
              backdropFilter: "blur(77.544px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              left: 0,
              top: 0
            }}>
              <a href='https://www.daolens.com/blog/governance-magnified-by-dao-lens-1' target="_blank" rel="noreferrer">

                <Image
                  src="https://res.cloudinary.com/daolens/image/upload/v1665561040/89_d3589cc9c7.png"
                  alt="abc"
                  width={1100}
                  height={389}
                  objectFit="cover"
                  style={{ borderRadius: "16px" }}
                  placeholder="blur"
                  blurDataURL="https://res.cloudinary.com/daolens/image/upload/v1665561040/89_d3589cc9c7.png"
                /></a>
            </div>
          </> */}
        </Carousel>


      </main>
    </Container >
  );
};

export const Container = styled.section`
  
  
  .carousel-container {
    width: 100%;
    background:white;
    position: absolute;
    top:0;
    }
    .react-multi-carousel-dot-list {
      top:80%;
    }
    .react-multi-carousel-dot {
      button {
        border: none;
        background: #AC94FA;
        opacity: 0.3;
      }
    }

    .react-multi-carousel-dot--active {
      button {
        background: #9061F9;
        opacity:1;
      }
    }
    .react-multiple-carousel__arrow--left {
      left: 9%;
      background: transparent;
    }
    .react-multiple-carousel__arrow--right {
      right: 9%;
      background: transparent;
    }

  .item {
    text-align: center;
    height:400px;
    img {
      width: 100%;
    }
  }
`;

export default Hero;
