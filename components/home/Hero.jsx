import styled from 'styled-components';
import Image from 'next/image';
import heroImg from '../../public/assets/homepage/hero-img.svg';
import heroBCG from '../../public/assets/homepage/hero-bcg.png';
import Link from 'next/link';
import { Navbar } from '../common';

const Hero = ({
  heroHeading,
  heroDesription,
  heroCTAText,
  heroCTADestination,
}) => {
  return (
    <Container>
      <Navbar />
      <main>
        <div className="section-center">
          <div className="hero-banner">
            <article className="hero-info">
              <h1>{heroHeading}</h1>
              <p>{heroDesription}</p>
              <Link href={heroCTADestination || '/'}>
                <a className="btn">{heroCTAText}</a>
              </Link>
            </article>
            <article className="hero-img">
              <Image src={heroImg} alt="hero" />
            </article>
          </div>
        </div>
      </main>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${heroBCG.src}) top/cover no-repeat;

  main {
    display: grid;
    align-items: center;
    padding: 4rem 0;

    @media (min-width: 792px) {
      min-height: 100vh;
      position: relative;
      margin-top: -4rem;
    }

    .hero-banner {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      align-items: center;
      justify-content: center;

      @media (min-width: 792px) {
        grid-template-columns: 1fr 1fr;
      }
    }

    .hero-info {
      width: 90vw;
      margin: 0 auto;

      @media (min-width: 792px) {
        position: absolute;
        top: 50%;
        transform: translate(0%, -50%);
        max-width: 40rem;
      }
    }

    .hero-info h1 {
      line-height: 84px;

      @media (max-width: 792px) {
        line-height: 1.2;
      }
    }

    .hero-info p {
      margin: 2rem 0;
    }

    .hero-img {
      text-align: right;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0%, -50%);

      @media (max-width: 792px) {
        display: none;
      }
    }
  }
`;

export default Hero;
