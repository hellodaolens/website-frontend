import { DaoNavbar, HeadSeo } from '../components/common';
import { DAOs } from '../components/discover-dao';
import pattern from '../public/assets/discover-daos/pattern.png';
import { useState } from 'react';

const AllDaos = () => {
  const [currentTag, setCurrentTag] = useState("All DAOs");
  return (
    <>
      <HeadSeo title="All DAOs" />
      <main style={{ background: ` white`, color: "black" }}>
        <DaoNavbar />
        <div style={{
          background: `url('${pattern.src}') white center`,
          backgroundSize: "105%",
        }}>
          <DAOs currentTag={currentTag} setCurrentTag={setCurrentTag} allDao />
        </div>

      </main>
    </>
  );
};

export default AllDaos;
