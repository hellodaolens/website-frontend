import Image from 'next/image';
import styled from 'styled-components';

const Globe = ({ section1Heading, section1Description, section1Img }) => {
  return (
    <Container className="section">
      <div className="section-center">
        <div className="title">
          <h3>{section1Heading}</h3>
          <p>{section1Description}</p>
        </div>
        <div className="img">
          <Image
            src={section1Img?.data?.attributes?.url}
            alt="globe"
            width={1230}
            height={452.71}
          />
        </div>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background-color: #000;

  .section-center {
    text-align: center;
  }

  .title {
    max-width: 620px;
    margin: 0 auto;
    p {
      margin: 1rem auto;
      display: none;

      @media (min-width: 792px) {
        display: block;
      }
    }
  }
`;

export default Globe;
