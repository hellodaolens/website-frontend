import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import heroBCG from '../../public/assets/careers/hero-bcg.png';
import { Navbar } from '../common';

const Hero = ({ heroHeading, heroDescription, heroCTAText, heroImg }) => {
  return (
    <>
      <Container>
        <Navbar />
        <main>
          <div className="section-center">
            <article className="info">
              <div>
                <h2>{heroHeading}</h2>
                <p>{heroDescription}</p>
                <Link href={'/'}>
                  <a className="btn">{heroCTAText}</a>
                </Link>
              </div>
            </article>

            <Image
              src={heroImg?.data?.attributes?.url}
              alt="hero"
              width={903.91}
              height={454}
              objectFit="contain"
            />
          </div>
        </main>
      </Container>
    </>
  );
};

export const Container = styled.section`
  background: url(${heroBCG.src}) top/cover no-repeat;

  @media (min-width: 792px) {
    min-height: 100vh;
  }

  main {
    display: grid;
    place-items: center;
    text-align: center;
    padding: 5rem 0 0;

    .section-center {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      gap: 2rem;
      height: 100%;
    }

    .info {
      max-width: 540px;
      margin: 2rem auto;
      flex-grow: 1;
      display: grid;
      place-items: center;
      p {
        margin: 2rem auto;
      }
    }
  }
`;

export default Hero;
