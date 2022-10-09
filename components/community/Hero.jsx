import { useState } from 'react';
import styled from 'styled-components';
import heroBCG from '../../public/assets/community/hero-bcg.png';
import { Navbar } from '../common';

const Hero = ({
  navItems,
  heroSubHeading,
  heroHeading,
  heroDescription,
  heroCTAText,
  heroCTADestination,
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
          <h5>{heroSubHeading}</h5>
          <h1>{heroHeading}</h1>
          <h4>{heroDescription}</h4>
          <a href={heroCTADestination} className="btn">
            {heroCTAText}
          </a>
        </div>
      </main>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${heroBCG.src}) top/cover no-repeat;
  display: grid;
  grid-template-rows: auto 1fr;
  @media (min-width: 792px) {
    min-height: 100vh;
  }

  main {
    display: grid;
    align-items: center;
    padding: 4rem 0;
    padding-top: 2rem;

    @media (min-width: 792px) {
      padding-top: 0;
    }
  }

  h5 {
    text-transform: uppercase;
    display: inline;
    background: linear-gradient(
        85.21deg,
        #5fb5fc -7.59%,
        #844aff 62.28%,
        #df52ff 113.15%
      ),
      #cbbde9;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  .btn {
    margin-top: 1.5rem;
  }
`;

export default Hero;
