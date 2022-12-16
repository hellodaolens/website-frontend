import styled from 'styled-components';
import Image from 'next/image';
import daosData from '../../data.json';

const DaoList = () => {
  const logos = daosData.map((item) => {
    return {
      src: item.attributes.twitterdp,
      alt: item.attributes.Token,
    };
  });

  return (
    <Container>
      <hr />
      <div className="logos-center">
        {logos.map((logo, i) => {
          return (
            <Image
              key={i}
              className="logo"
              src={logo.src}
              alt={logo.alt}
              width={103.93}
              height={104.57}
            />
          );
        })}
      </div>
    </Container>
  );
};

export const Container = styled.section`
  hr {
    width: 90%;
    margin: 0 auto;
    border: 1px solid rgba(96, 182, 253, 0.15);
  }

  .logos-center {
    padding: 4rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    img {
      border-radius: 0.5rem;
    }
  }
`;

export default DaoList;
