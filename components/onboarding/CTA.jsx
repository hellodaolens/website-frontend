import Image from 'next/image';
import styled from 'styled-components';
import ctaBCG from '../../public/assets/onboarding/cta-bcg.png';

const CTA = ({
  section2SubHeading,
  section2Heading,
  section2Description,
  section2Img,
}) => {
  return (
    <Container className="section">
      <div className="section-center">
        <article className="info">
          <p className="subheading">{section2SubHeading}</p>
          <h3>{section2Heading}</h3>
          <p>{section2Description}</p>
          <div className="img">
            <Image
              src={section2Img?.data?.attributes?.url}
              alt="DAO community"
              width={1136}
              height={620}
            />
          </div>
        </article>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${ctaBCG.src}) center/cover no-repeat;
  text-align: center;

  .info {
    p {
      margin: 0 auto 4rem;
    }

    .subheading {
      margin-bottom: 1rem;
      color: #fff;
    }

    span {
      border: 1px solid #575757 !important;
      border-radius: 20px;
      outline: none;
    }
  }
`;

export default CTA;
