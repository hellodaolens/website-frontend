import styled, { useTheme } from 'styled-components';
import Image from 'next/image';
import featuresBCG from '../../public/assets/contribution/features3-bcg.png';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
let colors = ["#06B6D4", "#F97316", "#EC4899"];

const FeatureFour = ({
  heading,
  data
}) => {
  const [accordian, setAccordian] = useState(0);
  useEffect(() => {

    let interval = setInterval(() => {
      setAccordian(prev => (prev + 1) % data.length)
    }, 3000);
    return () => {
      clearInterval(interval);
    }
  }, [data.length]);
  return (
    <Container className='section'>
      <h3>{heading}</h3>
      <div style={{
        display: "flex", columnGap: "20px", rowGap: "40px", marginTop: "40px", flexWrap: "wrap", justifyContent: "center"
      }}>
        {data?.map((item, index) =>
          <div
            className='card'
            key={index}
            style={{
              width: "350px",
            }}>
            <div style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "8px 0px 8px 8px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              borderLeft: `8px solid ${colors[index]}`,
              position: "relative"
            }}>
              <div style={{ position: "absolute", background: colors[index], height: "100%", width: "8px", opacity: "0.4", filter: "blur(8px)" }}></div>
              <img
                className='large'
                style={{ height: "200px", objectFit: "cover" }}
                src={item.image.data.attributes.url}
              />
              <div style={{ margin: " 4px 16px " }}>
                <div>{item.name}</div>
                <p className='description'>{item.description}</p>

              </div>

            </div>
          </div>)

        }</div>



    </Container >
  );
};

export const Container = styled.section`
  background: url(${featuresBCG.src}) center/cover no-repeat;
  padding: 10%;
  h3{
  text-align:center;
  // font:normal 600 40px/52px Inter;
  }
  
  @media (min-width: 792px) {
    h3{
    text-align:left;

    }
  }


`;

export default FeatureFour;
