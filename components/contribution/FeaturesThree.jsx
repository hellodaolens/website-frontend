import Image from 'next/image';
import styled from 'styled-components';
import featureBCG from '../../public/assets/onboarding/feature-bcg.png';
import features3BCG from '../../public/assets/contribution/features3-bcg.png';
import Link from 'next/link';

const FeaturesThree = ({ features3Heading, features3, get2CTAText }) => {
  return (
    <Container className="section">
      <div className="section-center">
        <div className="title">
          <h2>{features3Heading}</h2>
        </div>

        {features3.map((feature) => {
          const { id, name, description, image } = feature;
          return (
            <article key={id} className="feature">
              <div className="info">
                <div>
                  <h4>{name}</h4>
                  <p>{description}</p>
                </div>
              </div>
              <div className="img">
                <Image
                  src={image?.data?.attributes?.url}
                  alt={name}
                  width={636}
                  height={352}
                />
              </div>
            </article>
          );
        })}

        <div className="btn-wrap">
          <Link href={'/'}>
            <a className="btn">{get2CTAText}</a>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${features3BCG.src}) center/cover no-repeat;

  .section-center {
    display: grid;
    gap: 1rem;
  }

  .title {
    text-align: center;
    max-width: 620px;
    margin: 0 auto 3rem;
  }

  .btn-wrap {
    text-align: center;
    margin-top: 2rem;
  }

  .feature {
    background: url(${featureBCG.src}) center/cover no-repeat;
    padding: 1rem;
    border-radius: 1rem;
    margin: 0 auto;

    @media (min-width: 992px) {
      background: transparent;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      align-items: center;

      .info {
        background: url(${featureBCG.src}) center/cover no-repeat;
        width: 826px;
        height: 469px;
        padding: 44px 380px 44px 56px;
        grid-column: 1 / span 8;
        grid-row: 1 / 1;
        display: grid;
        align-items: center;
      }
      &:nth-of-type(even) .info {
        padding: 44px 56px 44px 380px;
        grid-column: 4 / -1;
      }

      .img {
        grid-column: 6 / -1;
        grid-row: 1 / 1;
      }

      &:nth-of-type(even) .img {
        grid-column: 1 / 7;
      }
    }
  }
`;

export default FeaturesThree;
