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
        <div className='main section-center'>
          <div className='hero-content'>
            <h1 className='h2'>{heroHeading}</h1>
            <p>{heroDescription}</p>
            <a href={heroCTADestination} className='Typeform-7'>
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

  .Typeform-7 {
    display: inline-block;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s linear;
    border-radius: 49px;
    padding: 10px 32px;
    border: none;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      linear-gradient(85.21deg, #5fb5fc -7.59%, #844aff 62.28%, #df52ff 113.15%);
    &:hover {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
        linear-gradient(
          85.21deg,
          #5fb5fc -7.59%,
          #844aff 62.28%,
          #df52ff 113.15%
        );
      box-shadow: 0px 1px 32px #aa47e5;
    }
  }

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
