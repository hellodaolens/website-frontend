import Image from 'next/image';
import styled from 'styled-components';
import featureBCG from '../../public/assets/onboarding/feature-bcg.png';
import checkMediaType from '../utils/checkMediaType';

const Features = ({ Features }) => {
  return (
    <Container className="section">
      <div className="section-center">
        {Features.map((feature) => {
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
                {checkMediaType(image) === 'video' ? (
                  <video
                    src={image?.data?.attributes?.url}
                    alt={name}
                    width={636}
                    height={352}
                    autoPlay
                    loop
                    muted
                    style={{ maxWidth: '636px' }}
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
            </article>
          );
        })}
      </div>
    </Container>
  );
};

export const Container = styled.section`
  padding-top: 0;

  .section-center {
    display: grid;
    gap: 2rem;
  }

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

export default Features;
