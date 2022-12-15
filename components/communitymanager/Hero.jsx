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
  heroImg
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <Navbar
        navItems={navItems}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <main
        onClick={() => setShowMenu(false)}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "68px" }}>
        <h2 style={{ maxWidth: "750px", textAlign: "center" }}>{heroHeading}</h2>
        <p style={{ textAlign: "center", marginBottom: "40px" }}>{heroDescription}</p>
        <a href={heroCTADestination} className='Typeform-7' style={{ marginBottom: "68px" }}>
          {heroCTAText}
        </a>
        <HeroBanner
          heroImg={heroImg}
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
`;

export default Hero;
