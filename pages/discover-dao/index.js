import { useEffect, useRef, useState } from 'react';
import { HeadSeo } from '../../components/common';
import { Hero, DAOs, DaoList } from '../../components/discover-dao';
import pattern from '../../public/assets/discover-daos/pattern.png';

const DiscoverDao = () => {
  const [currentTag, setCurrentTag] = useState("Hottest DAOs");
  const ref = useRef(null);
  return (
    <>
      <HeadSeo title='Discover DAOs' />
      <main style={{ color:"black", }}>
        
        <div style={{
          background: `url('${pattern.src}') white center`,
          backgroundSize: "105%",
        }}>
          <Hero bodyRef={ref} setCurrentTag={setCurrentTag} />
          <DAOs bodyRef={ref} currentTag={currentTag} setCurrentTag={setCurrentTag} />
          <DaoList />
        </div>

      </main>
    </>
  );
};

export default DiscoverDao;
