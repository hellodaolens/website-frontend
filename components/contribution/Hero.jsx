import { useState } from 'react';
import styled from 'styled-components';
import HeroBanner from './HeroBanner';
import heroBCG from '../../public/assets/contribution/hero-bcg.png';
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
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <Navbar
        navItems={navItems}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <main onClick={() => setShowMenu(false)}>
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
    margin-top: -10rem;

    .main.section-center {
      display: grid;
      place-items: center;
      min-height: calc(100vh + 4rem);
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
