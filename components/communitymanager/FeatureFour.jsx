import styled, { useTheme } from 'styled-components';
import Image from 'next/image';
import featuresBCG from '../../public/assets/contribution/features3-bcg.png';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

const FeatureFour = ({
  heading,
  data
}) => {
  const [selectedCard, setSelectCard] = useState(null);
  return (
    <Container className='section'>
      <h3>{heading}</h3>
      <div style={{
        display: "flex", columnGap: "20px", rowGap: "40px", marginTop: "40px", flexWrap: "wrap", justifyContent: "center"
      }}>
        {data?.map((item, index) =>
          <div
            key={index}
            onMouseEnter={() => {
              setSelectCard(index);
            }}
            onMouseLeave={() => {
              setSelectCard(null)
            }}
            style={{
              width: "350px",
            }}>
            <div style={{
              background: "rgba(255, 255, 255, 0.05)",
              padding: "14px",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}>
              <img
                style={{ borderRadius: "16px", height: "200px", objectFit: "cover" }}
                src={item.image.data.attributes.url}
              />
              <a
                href={item.ctaDestiation}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "white",
                  height: "48px",
                  alignItems: "center",
                  borderRadius: "6px",
                  background: selectedCard === index ? "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(85.21deg, #844AFF -7.59%, #5D0072 113.15%)" : " linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(85.21deg, #5FB5FC -7.59%, #844AFF 62.28%, #DF52FF 113.15%)"
                }}>{item.name}</a>
              <p>{item.description}</p>

            </div>
          </div>)

        }</div>



    </Container >
  );
};

export const Container = styled.section`
  background: url(${featuresBCG.src}) center/cover no-repeat;
  padding:100px 10%;
  p{
    display:none;
  }
  
  @media (min-width: 792px) {
    p{
      display:block;
    }
   
  }


`;

export default FeatureFour;
