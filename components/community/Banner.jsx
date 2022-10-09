import styled from 'styled-components';
import bannerBCG from '../../public/assets/community/banner-bcg.png';

const Banner = ({
  section1SubHeading,
  section1Heading,
  section1LastHeading,
}) => {
  return (
    <Container className="section">
      <div className="section-center">
        <p>{section1SubHeading}</p>
        <h3>{section1Heading}</h3>
        <p className="last">{section1LastHeading}</p>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${bannerBCG.src}) center/cover no-repeat;
  text-align: center;

  h3 {
    margin: 2rem auto;
    color: #cbbde9;
  }
  p {
    margin-left: auto;
    margin-right: auto;
  }

  p.last {
    margin-bottom: 0;
  }
`;

export default Banner;
