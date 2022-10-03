import styled from 'styled-components';
import Image from 'next/image';
import featuresBCG from '../../public/assets/contribution/features3-bcg.png';
import feature2 from '../../public/assets/contribution/feature2.png';
import featureBCG from '../../public/assets/onboarding/feature-bcg.png';
import checkMediaType from '../utils/checkMediaType';

const Features = ({
  featuresHeading,
  features1,
  features2,
  features2CTAtext,
  features2Destination,
}) => {
  const feature = features1[0];

  return (
    <Container className="section">
      <div className="section-center">
        <div className="title">
          <h2>{featuresHeading}</h2>
        </div>

        <article className="features1-center">
          <div className="feature">
            <div className="info">
              <div>
                <h4>{feature?.name}as</h4>
                <p>{feature?.description}</p>
              </div>
            </div>
            <div className="img">
              {checkMediaType(feature?.image) === 'video' ? (
                <video
                  src={feature?.image?.data?.attributes?.url}
                  alt={feature?.name}
                  width={636}
                  height={352}
                  style={{ maxWidth: '636px' }}
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <Image
                  src={feature?.image?.data?.attributes?.url}
                  alt={feature?.name}
                  width={636}
                  height={352}
                  placeholder="blur"
                  blurDataURL={feature?.image?.data?.attributes?.url}
                />
              )}
            </div>
          </div>
        </article>

        <article className="features2-center">
          {features2?.map((feature) => {
            const { id, name, description, image } = feature;
            return (
              <article key={id} className="feature2">
                <div className="img">
                  {checkMediaType(image) === 'video' ? (
                    <video
                      src={image?.data?.attributes?.url}
                      alt={name}
                      width={636}
                      style={{ maxWidth: '636px' }}
                      height={352}
                      autoPlay
                      loop
                      muted
                    />
                  ) : (
                    <Image
                      src={image?.data?.attributes?.url}
                      alt={name}
                      width={636}
                      height={352}
                      placeholder="blur"
                      blurDataURL={image?.data?.attributes?.url}
                    />
                  )}
                </div>
                <div className="info">
                  <div>
                    <h4>{name}</h4>
                    <p>{description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </article>

        <div className="btn-wrap">
          <a href={features2Destination} className="btn">
            {features2CTAtext}
          </a>
        </div>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${featuresBCG.src}) center/cover no-repeat;

  .title {
    text-align: center;
    max-width: 620px;
    margin: 0 auto 3rem;
  }

  .btn-wrap {
    text-align: center;
    margin-top: 4rem;
  }

  .features1-center {
    margin-bottom: 4rem;
    .feature {
      background: url(${featureBCG.src}) center/cover no-repeat;
      padding: 1rem;
      border-radius: 1rem;
      margin: 0 auto;

      .img {
        img,
        video {
          border-radius: 1rem;
        }
      }

      @media (min-width: 992px) {
        background: transparent;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        align-items: center;

        .info {
          background: url(${featureBCG.src}) center/cover no-repeat;
          width: 826px;
          height: 469px;
          padding: 44px 56px 44px 380px;
          grid-column: 4 / -1;
          grid-row: 1 / 1;
          display: grid;
          align-items: center;
        }

        .img {
          grid-column: 1 / 7;
          grid-row: 1 / 1;
        }
      }
    }
  }

  .features2-center {
    display: grid;
    place-items: center;
    gap: 1.5rem;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
    }
  }

  .feature2 {
    padding: 1.5rem;
    background: url(${feature2.src}) center/cover no-repeat;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;

    .info {
      p {
        margin-bottom: 0;
      }
    }
  }
`;

export default Features;
