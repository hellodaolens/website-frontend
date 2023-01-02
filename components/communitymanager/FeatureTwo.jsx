import styled, { useTheme } from 'styled-components';
import Image from 'next/image';
import featuresBCG from '../../public/assets/contribution/features3-bcg.png';
import { FaArrowRight, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

const FeatureTwo = ({
  heading,
  data
}) => {
  const [selectedCard, setSelectCard] = useState(null);
  const [accordian, setAccordian] = useState(0);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  let res = showAllFeatures ? data : data.slice(0, 3);
  useEffect(() => {
    let interval = setInterval(() => {
      setAccordian(prev => (prev + 1) % res.length)
    }, 3000);
    return () => {
      clearInterval(interval);
    }
  }, [res.length]);

  return (
    <Container className='section'>
      <h3>{heading}</h3>
      <div
        className='large'
        style={{
          columnGap: "20px", rowGap: "40px", marginTop: "40px", flexWrap: "wrap", justifyContent: "center"
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
            className="card"
            style={{
              width: "350px",
            }}>
            <div
              className="content"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                padding: "14px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}>

              {selectedCard === index ? <p >{item.description}</p> :
                <img
                  style={{ borderRadius: "16px", height: "200px", objectFit: "cover" }}
                  src={item.image.data.attributes.url}
                />}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {item.name}
              </div>
            </div>
          </div>)
        }

      </div>
      <div
        className='small'
        style={{
          columnGap: "20px", rowGap: "40px", marginTop: "40px", flexWrap: "wrap", justifyContent: "center"
        }}>
        {res?.map((item, index) =>
          <div
            key={index}
            onMouseEnter={() => {
              setSelectCard(index);
            }}
            onMouseLeave={() => {
              setSelectCard(null)
            }}
            className="card"
            style={{
              width: "350px",
            }}>
            <div
              className="content"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                padding: "14px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}>
              {accordian === index ? <p>{item.description}</p> :
                <img
                  style={{ borderRadius: "16px", height: "200px", objectFit: "cover" }}
                  src={item.image.data.attributes.url}
                />}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {item.name}
              </div>
            </div>
          </div>)
        }

      </div>
      {!showAllFeatures && <div className='small' style={{ justifyContent: "center" }}>
        <div
          onClick={() => {
            setShowAllFeatures(true)
          }}
          style={{
            background: "rgba(255, 255, 255, 0.12)",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "4px",
            padding: "8px 12px",
            marginTop: "20px",
            cursor: "pointer"
          }}>+ 3 more features <FaArrowRight size="12px" />
        </div></div>}



    </Container >
  );
};

export const Container = styled.section`
  background: url(${featuresBCG.src}) center/cover no-repeat;
  padding:100px 10%;
  text-align:center;
  .card{
    border-radius:16px;
  }
  .small{
    display:flex;
  }

  .large{
    display:none;
  }
  .content{
    border-radius:16px;
  }

  
  @media (min-width: 792px) {
    .small{
      display:none;
    }
    .large{
      display:flex;
    }
   
  }


 
}


`;

export default FeatureTwo;
