import { useEffect, useRef, useState } from 'react';
import { HeadSeo } from '../../components/common';
import { Hero, DAOs, DaoList } from '../../components/discover-dao';

const DiscoverDao = () => {
  const [currentTag, setCurrentTag] = useState("");
  const ref = useRef(null);
  return (
    <>
      <HeadSeo title='Discover DAOs' />
      <main
        style={{ background: `linear-gradient(to right, #000, #01182B, #000)` }}
      >
        <Hero bodyRef={ref} setCurrentTag={setCurrentTag} />
        <DAOs bodyRef={ref} currentTag={currentTag} setCurrentTag={setCurrentTag} />
        <DaoList />
      </main>
    </>
  );
};

export default DiscoverDao;
