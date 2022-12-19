import styled, { useTheme } from 'styled-components';
import Image from 'next/image';
import featuresBCG from '../../public/assets/contribution/features3-bcg.png';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

const FeatureTwo = ({
  heading,
  data
}) => {
  const [selectedCard, setSelectCard] = useState(null);
  const [showDropdon, setShowDropdown] = useState(null);

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
            className="card"
            style={{
              width: "350px",
              position: "relative",
              zIndex: 20 - index,
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
              <img
                className='large'
                style={{ borderRadius: "16px", height: "200px", objectFit: "cover" }}
                src={item.image.data.attributes.url}
              />
              {showDropdon === index && <img className='small'
                style={{ borderRadius: "16px", height: "200px", objectFit: "cover" }}
                src={item.image.data.attributes.url}
              />}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {item.name}
                <div className='small' onClick={() => {
                  setShowDropdown(prev => prev === index ? null : index)
                }}>{showDropdon === index ? <FaChevronDown /> : <FaChevronRight />}</div>
              </div>
              {showDropdon === index && <p className='small'>{item.description}</p>}


            </div>
            {selectedCard === index && <p
              className='large'
              style={{
                padding: "14px 0px 14px 14px",
                borderRadius: "0px 0px 16px 16px",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(8.20388px)",
                WebkitBackdropFilter: "blur(8.20388px)"
              }}>{item.description}</p>}
          </div>)

        }</div>



    </Container >
  );
};

export const Container = styled.section`
  background: url(${featuresBCG.src}) center/cover no-repeat;
  padding:100px 10%;
  .small{
    display:block;
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
      display:block;
    }
    .card{
      height:256px;
    }
    .content{
      &:hover {
        border-radius:16px 16px 0px 0px;

    }
    }
   
   
  }


 
}


`;

export default FeatureTwo;
