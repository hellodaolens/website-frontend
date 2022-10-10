import styled from 'styled-components';
import ctaBCG from '../../public/assets/community/cta-bcg.png';

const CTA = ({
  lastSectionHeading,
  lastSectionDescription,
  lastSectionCTAText,
  lastSectionCTADestination,
}) => {
  return (
    <Container className='section'>
      <div className='section-center'>
        <h2>{lastSectionHeading}</h2>
        <p>{lastSectionDescription}</p>

        <a href={lastSectionCTADestination} className='Discord-2'>
          {lastSectionCTAText}
        </a>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${ctaBCG.src}) center/cover no-repeat;

  .Discord-2 {
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

  .section-center {
    text-align: center;

    p {
      margin: 2rem auto;
    }

    @media (min-width: 792px) {
      text-align: left;
      p {
        margin: 2rem 0;
      }
    }
  }
`;

export default CTA;
