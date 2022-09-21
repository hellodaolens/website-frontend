import Link from 'next/link';
import styled from 'styled-components';
import hiringBCG from '../../public/assets/careers/hiring-bcg.png';

const HiringBanner = ({
  lastSectionHeading,
  lastSectionDescription,
  lastSectionCTAText,
}) => {
  return (
    <Container className="section">
      <div className="section-center">
        <h3>{lastSectionHeading}</h3>
        <p>{lastSectionDescription}</p>
        <Link href={'/'}>
          <a className="btn">{lastSectionCTAText}</a>
        </Link>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${hiringBCG.src}) center/cover no-repeat;
  padding: 5rem 0;
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
