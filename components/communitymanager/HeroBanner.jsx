import Users from './Users';
import styled from 'styled-components';
import Image from 'next/image';
import checkMediaType from '../utils/checkMediaType';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const HeroBanner = ({ heroImg }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const intervalref = useRef();
  const removeInterval = () => {
    if (intervalref.current)
      clearInterval(intervalref.current);

  }

  useEffect(() => {
    const currentIntervalId = setInterval(() => {
      setImageIndex(prev => (prev + 1) % heroImg.length);
    }, 3000);
    intervalref.current = currentIntervalId

    return () => {
      removeInterval()
    }
  }, [])
  return (

    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", margin: "12px" }}>
      <Image
        src={heroImg[imageIndex]?.attributes.url}
        alt="contributions"
        width={880}
        height={495}
        placeholder="blur"
        blurDataURL={heroImg[imageIndex]?.attributes.url}
        style={{ borderRadius: "12px" }}
      />
      <div style={{ display: "flex", gap: " 8px" }}>{heroImg.map((img, idx) =>
        <img
          src={img?.attributes.url}
          alt="contributions"
          width={158}
          height={94}
          placeholder="blur"
          blurDataURL={img?.attributes.url}
          style={{
            borderRadius: "12px", cursor: "pointer", padding: "2px", background: idx === imageIndex ?
              `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
          linear-gradient(85.21deg, #5fb5fc -7.59%, #844aff 62.28%, #df52ff 113.15%)`: ""
          }}
          onClick={() => {
            removeInterval();
            setImageIndex(idx)
          }}
        />)}</div>
    </div>
  );
};
export default HeroBanner;
