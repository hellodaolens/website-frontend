import Link from 'next/link';
import styled from 'styled-components';
import bannerBCG from '../../public/assets/onboarding/banner-bcg.png';

const Banner = ({ section1SubHeading, section1Heading, section1CTAText }) => {
  return (
    <Container className="section">
      <div className="section-center">
        <div className="info">
          <p className="subheading">{section1SubHeading}</p>
          <h3>{section1Heading}</h3>
          <Link href={'/'}>
            <a className="btn">{section1CTAText}</a>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${bannerBCG.src}) center/cover no-repeat;
  text-align: center;

  .info {
    max-width: 680px;
    margin: 0 auto;

    h3 {
      margin-bottom: 2rem;
    }
  }
`;

export default Banner;
