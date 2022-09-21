import styled from 'styled-components';
import heroSectionBCG from '../../public/assets/homepage/hero-section1-bcg.png';

const Banner = ({ section1MainHeading, section1SubHeading }) => {
  return (
    <Container className="section">
      <div className="section-center">
        <p>{section1SubHeading}</p>
        <h2>{section1MainHeading}</h2>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${heroSectionBCG.src}) center/cover no-repeat;

  .section-center {
    text-align: center;
    max-width: 500px;
    p {
      margin-left: auto;
      margin-right: auto;
      max-width: 300px;
    }
  }
`;

export default Banner;
