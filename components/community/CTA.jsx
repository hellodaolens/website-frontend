import Link from 'next/link';
import styled from 'styled-components';
import ctaBCG from '../../public/assets/community/cta-bcg.png';

const CTA = ({
  lastSectionHeading,
  lastSectionDescription,
  lastSectionCTAText,
}) => {
  return (
    <Container className="section">
      <div className="section-center">
        <h2>{lastSectionHeading}</h2>
        <p>{lastSectionDescription}</p>
        <Link href="/">
          <a className="btn">{lastSectionCTAText}</a>
        </Link>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${ctaBCG.src}) center/cover no-repeat;

  .section-center {
    text-align: center;

    p {
      margin: 2rem auto;
    }

    @media (min-width: 792px) {
      text-align: left;
      p {
        margin: 2rem 0;
      }
    }
  }
`;

export default CTA;
