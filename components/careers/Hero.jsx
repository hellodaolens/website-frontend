import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import heroBCG from "../../public/assets/careers/hero-bcg.png";
import { Navbar } from "../common";

const Hero = ({
  navItems,
  heroHeading,
  heroDescription,
  heroCTAText,
  heroCTADestination,
  heroImg,
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
          <article className="info">
            <div>
              <h1 className="h2">{heroHeading}</h1>
              <p>{heroDescription}</p>
              <a href={heroCTADestination} className="Jobs-1">
                {heroCTAText}
              </a>
            </div>
          </article>

          <Image
            src={heroImg?.data?.attributes?.url}
            alt="hero"
            width={903.91}
            height={454}
            objectFit="contain"
            placeholder="blur"
            blurDataURL={heroImg?.data?.attributes?.url}
          />
        </div>
      </main>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${heroBCG.src}) top/cover no-repeat;

  @media (min-width: 792px) {
    min-height: 100vh;
  }

  .Jobs-1 {
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
    place-items: center;
    text-align: center;
    padding-top: 4rem;

    .section-center {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      gap: 2rem;
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
