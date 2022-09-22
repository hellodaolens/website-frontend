import styled from 'styled-components';
import bannerBCG from '../../public/assets/onboarding/banner-bcg.png';

const Banner = ({
  section1SubHeading,
  section1Heading,
  section1CTAText,
  section1CTADestination,
}) => {
  return (
    <Container className="section">
      <div className="section-center">
        <div className="info">
          <p className="subheading">{section1SubHeading}</p>
          <h3>{section1Heading}</h3>

          <a href={section1CTADestination} className="btn">
            {section1CTAText}
          </a>
        </div>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${bannerBCG.src}) center/cover no-repeat;
  text-align: center;

  .info {
    max-width: 992px;
    margin: 0 auto;

    p {
      margin-left: auto;
      margin-right: auto;
    }

    h3 {
      margin-bottom: 2rem;
    }
  }
`;

export default Banner;
