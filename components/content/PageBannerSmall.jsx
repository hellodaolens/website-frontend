import styled from 'styled-components';
import bannerBcg from '../../public/assets/content/pageBanner2-bcg.png';

const PageBannerSmall = ({ banner }) => {
  return (
    <Container href={banner?.attributes?.buttonLink}>
      {/* <a> */}
      <h5>{banner?.attributes?.title}</h5>
      <div className="btn-container">
        <a className="banner-btn">{banner?.attributes?.bottonText}</a>
      </div>
      {/* </a> */}
    </Container>
  );
};

export default PageBannerSmall;

export const Container = styled.a`
  background: url(${bannerBcg.src}) center/cover no-repeat;
  padding: 1.5rem 2rem;
  border-radius: 1.25rem;
  text-align: center;
  overflow: hidden;
  display: block;

  @media (max-width: 481px) {
    padding: 1.5rem;
  }

  h5 {
    color: #260044;
    margin: 0 auto 1rem;
    max-width: 18rem;
  }

  .banner-btn {
    display: inline-block;
    background: radial-gradient(
        58.34% 2055.38% at 56.36% 68.55%,
        #191782 0%,
        #270169 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border-radius: 8.87558px;
    filter: drop-shadow(0px 2.01758px 56.9966px rgba(15, 176, 244, 0.82));
    font-weight: 700;
    font-size: 19.8245px;
    line-height: 23px;
    font-style: normal;
    color: #80efe2;

    text-shadow: 0px 2.63646px 5.27291px rgba(51, 255, 231, 0.41);
    padding: 0.7rem 2rem;
    width: 90%;
    max-width: 22.5rem;

    @media (max-width: 481px) {
      padding: 0.5rem 1.25rem;
      max-width: 20rem;
      font-size: 14.8245px;
      width: 100%;
    }
  }
`;
