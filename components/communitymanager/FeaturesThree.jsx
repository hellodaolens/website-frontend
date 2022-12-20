import Image from 'next/image';
import styled from 'styled-components';
import featuresBCG from '../../public/assets/contribution/features3-bcg.png';
import checkMediaType from '../utils/checkMediaType';


const FeaturesThree = ({
  title,
  description,
  heading,
  heroCTAText,
  heroCTADestination,
  content
}) => {
  return (
    <Container className='section'>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {checkMediaType(content) === 'video' ? (
          <video
            src={content?.data?.attributes?.url}
            width={636}
            height={352}
            style={{ maxWidth: '636px', objectFit: "contain" }}
            autoPlay
            loop
            muted
          />
        ) : (
          <Image
            src={content?.data?.attributes?.url}
            width={636}
            height={352}
            objectFit="contain"
            placeholder='blur'
            blurDataURL={content?.data?.attributes?.url}
          />
        )}
        {/* <img src={content.data.attributes.url} style={{ marginTop: "28px", borderRadius: "12px", objectFit: "contain", }} /> */}
      </div>

      <div>
        <p>{heading}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={heroCTADestination} className='Typeform-8' style={{ marginTop: "68px", }}>
          {heroCTAText}
        </a>
      </div>


    </Container>
  );
};

export const Container = styled.section`
  background: url(${featuresBCG.src}) center/cover no-repeat;
  display:flex;
  justify-content:center;
  alignItems:center;
  padding:50px 10%;
  gap:80px;
  flex-direction: column-reverse;
  text-align:center;
  

  @media (min-width: 792px) {
    flex-direction: row;
    text-align:left;
   
  }

  .Typeform-8 {
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
`;
export default FeaturesThree;
