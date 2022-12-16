import { DaoNavbar, HeadSeo } from '../components/common';
import { DAOs } from '../components/all-daos';

const AllDaos = () => {
  return (
    <>
      <HeadSeo title="All DAOs" />
      <main
        style={{ background: `linear-gradient(to right, #000, #01182B, #000)` }}
      >
        <DaoNavbar />
        <DAOs />
      </main>
    </>
  );
};

export default AllDaos;
