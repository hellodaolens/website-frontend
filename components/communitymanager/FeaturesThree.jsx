import Image from 'next/image';
import styled from 'styled-components';
import featuresBCG from '../../public/assets/contribution/features3-bcg.png';
import checkMediaType from '../utils/checkMediaType';
import background from '../../public/assets/community-manager/background3.png';



const FeaturesThree = ({
  title,
  description,
  heading,
  heroCTAText,
  heroCTADestination,
  content,
  embedUrl
}) => {
  return (
    <Container className='section'>
      <a href={heroCTADestination} className='small Typeform-8 '>
        {heroCTAText}
      </a>
      {embedUrl ?
        <div style={{ width: "110%", aspectRatio: "1.8" }}>
          <iframe
            width="100%"
            height="100%"
            src={embedUrl}
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ borderRadius: "12px" }}
            allowFullScreen> </iframe>

        </div>
        :
        checkMediaType(content) === 'video' ? (

          <video
            src={content?.data?.attributes?.url}
            style={{ maxWidth: '600px', objectFit: "contain", borderRadius: "12px" }}
            autoPlay
            loop
            muted
            controls
          />
        ) : (
          <img
            src={content?.data?.attributes?.url}
            style={{ maxWidth: '600px', objectFit: "contain", borderRadius: "12px" }}
            blurDataURL={content?.data?.attributes?.url}
          />
        )}

      <div style={{ maxWidth: "400px" }}>
        <p>{heading}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={heroCTADestination} className='large Typeform-8 ' style={{ marginTop: "68px" }}>
          {heroCTAText}
        </a>
      </div>



    </Container>
  );
};

export const Container = styled.section`
  background: url(${background.src}) bottom left/contain no-repeat;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:10%;
  gap:40px;
  flex-direction: column-reverse;
  text-align:center;
  h3{
    // font:normal 600 40px/52px Inter;
  }
  .large {
    display:none;
  }
  .small{
    display:inline-block;
  }
  @media (min-width: 792px) {
    flex-direction: row;
    text-align:left;
    .large{
      display:inline-block;
    }
    .small{
      display:none;
    }
   
  }


  .Typeform-8 {
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
`;
export default FeaturesThree;
