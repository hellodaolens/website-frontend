import { HeadSeo } from '../../components/common';
import { Hero, DAOs, DaoList } from '../../components/discover-dao';

const DiscoverDao = () => {
  return (
    <>
      <HeadSeo title='Discover DAOs' />
      <main
        style={{ background: `linear-gradient(to right, #000, #01182B, #000)` }}
      >
        <Hero />
        <DAOs />
        <DaoList />
      </main>
    </>
  );
};

export default DiscoverDao;
