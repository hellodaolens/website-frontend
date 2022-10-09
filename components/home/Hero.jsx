import { useState } from 'react';
import styled from 'styled-components';
import heroBCGSmall from '../../public/assets/homepage/hero-bcg-small.png';
import heroBCGBig from '../../public/assets/homepage/hero-bcg-big.png';
import { Navbar } from '../common';

const Hero = ({
  heroHeading,
  heroDesription,
  heroCTAText,
  heroCTADestination,
  navItems,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <Navbar
        navItems={navItems}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <main onClick={() => setShowMenu(false)}>
        <div className="section-center">
          <div className="hero-banner">
            <article className="hero-info">
              <h1>{heroHeading}</h1>
              <p>{heroDesription}</p>
              <a href={heroCTADestination} className="btn">
                {heroCTAText}
              </a>
            </article>
          </div>
        </div>
      </main>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${heroBCGSmall.src}) center/cover no-repeat;

  @media (min-width: 792px) {
    background: url(${heroBCGBig.src}) center/contain no-repeat;
    background-size: 100vw 100%;
  }

  main {
    display: grid;
    align-items: center;
    padding: 4rem 0;
    padding-top: 0;

    @media (min-width: 792px) {
      min-height: 85vh;
      padding: 0;
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
        transform: translate(0%, -2rem);
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
  }
`;

export default Hero;
