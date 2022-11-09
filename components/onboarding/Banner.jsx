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

          <a href={section1CTADestination} className="Typeform-6">
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

  .Typeform-6 {
    display: inline-block;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s linear;
    border-radius: 49px;
    padding: 10px 32px;
    border: none;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      linear-gradient(85.21deg, #5fb5fc -7.59%, #844aff 62.28%, #df52ff 113.15%);
    &:hover {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
        linear-gradient(
          85.21deg,
          #5fb5fc -7.59%,
          #844aff 62.28%,
          #df52ff 113.15%
        );
      box-shadow: 0px 1px 32px #aa47e5;
    }
  }

  .info {
    max-width: 992px;
    margin: 0 auto;

    p {
      margin-left: auto;
      margin-right: auto;
    }

    h3 {
      margin-bottom: 3rem;
    }
  }
`;

export default Banner;
