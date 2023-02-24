import { useEffect, useRef, useState } from "react";
import { HeadSeo } from "../../components/common";
import { Hero, DAOs, DaoList } from "../../components/discover-dao";
import pattern from "../../public/assets/discover-daos/pattern.png";

const DiscoverDao = ({ daoData }) => {
  const [currentTag, setCurrentTag] = useState("Hottest DAOs");
  const ref = useRef(null);
  return (
    <>
      <HeadSeo title="Discover DAOs" />
      <main style={{ color: "black" }}>
        <div
          style={{
            background: `url('${pattern.src}') white center`,
            backgroundSize: "105%",
          }}
        >
          <Hero bodyRef={ref} setCurrentTag={setCurrentTag} />
          <DAOs
            bodyRef={ref}
            currentTag={currentTag}
            setCurrentTag={setCurrentTag}
            daoData={daoData}
          />
          <DaoList />
        </div>
      </main>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/daos/?pagination[limit]=26&populate=*`
  );
  const data = await res.json();
  // const daoDetails = data.data.attributes;
  // const DAO_DATA = {
  //   age: daoDetails?.age,
  //   Token: daoDetails?.Token,
  //   type: daoDetails?.type,
  //   Blockchain: daoDetails?.Blockchain,
  //   Community: daoDetails?.Community,
  //   About: daoDetails?.About,
  //   HowToJoin: daoDetails?.HowToJoin,
  //   AdditionalInfo: daoDetails?.AdditionalInfo,
  //   discordLink: daoDetails?.discordLink,
  //   twitterLink: daoDetails?.twitterLink,
  //   websiteLink: daoDetails?.websiteLink,
  //   title: daoDetails?.title,
  //   twitterdp: daoDetails?.profileImage,
  //   twittercover: daoDetails?.bannerImage,
  //   isPopular: daoDetails?.isPopular,
  //   foundersDetails: daoDetails?.founders,
  // };
  return { props: { daoData: data.data } };
};
export default DiscoverDao;
