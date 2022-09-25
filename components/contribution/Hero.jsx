import styled from 'styled-components';
import HeroBanner from './HeroBanner';
import heroBCG from '../../public/assets/contribution/hero-bcg.png';
import Link from 'next/link';
import { Navbar } from '../common';

const Hero = ({
  navItems,
  heroHeading,
  heroDescription,
  heroCTAText,
  heroCTADestination,
  heroImg1,
  heroImg2,
  users,
  usedByHeading,
}) => {
  return (
    <Container>
      <Navbar navItems={navItems} />
      <main>
        <div className="main section-center">
          <div className="hero-content">
            <h2>{heroHeading}</h2>
            <p>{heroDescription}</p>
            <a href={heroCTADestination} className="btn">
              {heroCTAText}
            </a>
          </div>
        </div>

        <HeroBanner
          users={users}
          heroImg1={heroImg1}
          heroImg2={heroImg2}
          usedByHeading={usedByHeading}
        />
      </main>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${heroBCG.src}) top/cover no-repeat;

  main {
    display: grid;
    align-items: center;
    margin-top: -4rem;

    .main.section-center {
      display: grid;
      place-items: center;
      min-height: 100vh;
    }

    .hero-content {
      max-width: 792px;
      display: grid;
      place-items: center;
      text-align: center;

      p {
        margin: 1rem auto 2rem;
      }
    }
  }
`;

export default Hero;
