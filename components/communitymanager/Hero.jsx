import { useState } from "react";
import styled from "styled-components";
import HeroBanner from "./HeroBanner";
import heroBCG from "../../public/assets/community-manager/background.png";
import { Navbar } from "../common";
import Image from "next/image";

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
      <main
        onClick={() => setShowMenu(false)}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0px 0px",
          gap: "12px",
          height: "70%",
        }}
      >
        <div style={{}}>
          <h1 className="h3">{heroHeading}</h1>
          <p style={{ marginBottom: "30px" }}>{heroDescription}</p>
          <a href={heroCTADestination} className="Typeform-7 large">
            {heroCTAText}
          </a>
          <a
            href="https://www.producthunt.com/posts/dao-manager?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-dao&#0045;manager"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=375328&theme=dark"
              alt="DAO&#0032;Manager - Your&#0032;ultimate&#0032;solution&#0032;for&#0032;growing&#0032;your&#0032;community | Product Hunt"
              style={{ width: "262px", height: "54px", marginTop: "20px" }}
              width="250"
              height="54"
            />
          </a>
        </div>
        <div>
          <Image
            src={heroImg[0]?.attributes.url}
            alt="contributions"
            width={800}
            height={400}
            placeholder="blur"
            blurDataURL={heroImg[0]?.attributes.url}
            style={{ borderRadius: "12px" }}
          />
        </div>
        <a href={heroCTADestination} className="Typeform-7 small">
          {heroCTAText}
        </a>
      </main>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${heroBCG.src}) center/cover no-repeat;
  height: auto;

  h3 {
    // font:normal 600 40px/52px Inter;
  }
  @media (min-width: 792px) {
    height: 100vh;
  }

  main {
    max-width: 1136px;
    margin: 0px 10%;
    text-align: center;
    flex-direction: column;
    .large {
      display: none;
    }
    .small {
      display: inline-block;
    }
    @media (min-width: 792px) {
      flex-direction: row;
      text-align: left;
      .large {
        display: inline-block;
      }
      .small {
        display: none;
      }
    }
  }

  .Typeform-7 {
    display: inline-block;
    color: #fff;
    margin-top: 12px;
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
