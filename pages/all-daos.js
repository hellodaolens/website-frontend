import { DaoNavbar, HeadSeo } from "../components/common";
import { DAOs } from "../components/discover-dao";
import pattern from "../public/assets/discover-daos/pattern.png";
import { useState } from "react";

const AllDaos = ({ daoData }) => {
  const [currentTag, setCurrentTag] = useState("All DAOs");
  return (
    <>
      <HeadSeo title="All DAOs" />
      <main style={{ background: ` white`, color: "black" }}>
        <DaoNavbar />
        <div
          style={{
            background: `url('${pattern.src}') white center`,
            backgroundSize: "105%",
          }}
        >
          <DAOs
            daoData={daoData}
            currentTag={currentTag}
            setCurrentTag={setCurrentTag}
            allDao
          />
        </div>
      </main>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/daos/?pagination[limit]=200&populate=*`
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
export default AllDaos;
