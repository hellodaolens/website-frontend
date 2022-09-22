import styled from 'styled-components';
import hiringBCG from '../../public/assets/careers/hiring-bcg.png';

const HiringBanner = ({
  lastSectionHeading,
  lastSectionDescription,
  lastSectionCTAText,
  lastSectionCTADestination,
}) => {
  return (
    <Container className="section">
      <div className="section-center">
        <h3>{lastSectionHeading}</h3>
        <p>{lastSectionDescription}</p>

        <a href={lastSectionCTADestination} className="btn">
          {lastSectionCTAText}
        </a>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${hiringBCG.src}) center/cover no-repeat;
  padding: 6rem 0;
  text-align: center;

  p {
    margin-top: 1.5rem;
    margin-left: auto;
    margin-right: auto;
  }

  .btn {
    margin-top: 2rem;
  }
`;

export default HiringBanner;
