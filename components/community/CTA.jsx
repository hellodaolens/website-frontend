import styled from 'styled-components';
import ctaBCG from '../../public/assets/community/cta-bcg.png';

const CTA = ({
  lastSectionHeading,
  lastSectionDescription,
  lastSectionCTAText,
  lastSectionCTADestination,
}) => {
  return (
    <Container className="section">
      <div className="section-center">
        <h2>{lastSectionHeading}</h2>
        <p>{lastSectionDescription}</p>

        <a href={lastSectionCTADestination} className="btn">
          {lastSectionCTAText}
        </a>
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
