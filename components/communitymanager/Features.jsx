import styled from 'styled-components';
import Image from 'next/image';
import background1 from '../../public/assets/community-manager/background1.png';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

const Features = ({
  title,
  description,
  accordian,
  heroCTAText,
  heroCTADestination,
}) => {
  const [open, setOpen] = useState(0);
  const intervalref = useRef();
  const removeInterval = () => {
    if (intervalref.current)
      clearInterval(intervalref.current);

  }

  useEffect(() => {
    const currentIntervalId = setInterval(() => {
      setOpen(prev => (prev + 1) % accordian.length);
    }, 3000);
    intervalref.current = currentIntervalId

    return () => {
      removeInterval()
    }
  }, [accordian.length])



  return (
    <Container className='section'>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div style={{ marginBottom: "28px" }}>
          {accordian.map((accordianItem, idx) =>
            <>

              <div
                style={{
                  padding: "28px",
                  borderTop: "0.5px solid",
                  borderBottom: "0.5px solid",
                  borderColor: "rgba(255, 255, 255, 0.31)",
                  background: open === idx ? "#352542" : "",
                  display: "flex",
                  position: "relative",
                }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "6px", height: "100%",
                  background: open === idx ? `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
                  linear-gradient(85.21deg, #5fb5fc -7.59%, #844aff 62.28%, #df52ff 113.15%)`: "",
                  filter: "blur(7.5px)"
                }} />
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "6px", height: "100%",
                  background: open === idx ? `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
                  linear-gradient(85.21deg, #5fb5fc -7.59%, #844aff 62.28%, #df52ff 113.15%)`: "",

                }} />

                <div style={{ width: "100%", textAlign: "left" }}>
                  <div
                    onClick={() => {
                      removeInterval();
                      setOpen(idx)
                    }}
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "10px" }}>
                    {accordianItem.name} {open === idx ? <FaChevronDown /> : <FaChevronRight />}
                  </div>
                  {open === idx && <div class="panel" style={{ marginTop: "20px" }}>
                    <p>{accordianItem.description}</p>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={accordianItem?.ctaDestiation} style={{
                        color: "#689FFD", fontSize: "16px", lineHeight: "32px",
                        textDecoration: "underline",
                      }}>{accordianItem?.ctaText}</a>

                  </div>}
                </div>
              </div>
              {open === idx && <img className="body-image" src={accordianItem.image.data.attributes.url} style={{ margin: "20px 0px 12¸¸px 0px", borderRadius: "12px" }} />
              }
            </>)}

        </div>

        <a href={heroCTADestination} className='Typeform-8' style={{ marginBottom: "68px" }}>
          {heroCTAText}
        </a>
      </div>


      <img src={accordian[open].image.data.attributes.url}
        className='right-view'
        style={{
          objectFit: "cover",
          borderRadius: "12px",
          width: "500px",
        }} />


    </Container >
  );
};

export const Container = styled.section`
  background: url(${background1.src}) center/cover no-repeat;
  padding:0px 10%;
  padding-top:100px;
  display:flex;
  gap:48px;
  justify-content:center;
  align-items:center;
  text-align:center;
  

  @media (min-width: 792px) {
    flex-direction: row;
    text-align:left;
   
  }
  .right-view{
    display: none;
    @media (min-width: 792px) {
      display: inline-block;
    }
  }
  .body-image{
    display: inline;
    @media (min-width: 792px) {
      display: none;
    }
  }

  .Typeform-8 {
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

export default Features;
