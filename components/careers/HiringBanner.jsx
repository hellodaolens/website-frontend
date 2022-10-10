import styled from 'styled-components';
import hiringBCG from '../../public/assets/careers/hiring-bcg.png';

const HiringBanner = ({
  lastSectionHeading,
  lastSectionDescription,
  lastSectionCTAText,
  lastSectionCTADestination,
}) => {
  return (
    <Container className='section'>
      <div className='section-center'>
        <h3>{lastSectionHeading}</h3>
        <p>{lastSectionDescription}</p>

        <a href={lastSectionCTADestination} className='Jobs-2'>
          {lastSectionCTAText}
        </a>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${hiringBCG.src}) center/cover no-repeat;
  padding: 6rem 0;
  text-align: center;

  p {
    margin-top: 1.5rem;
    margin-left: auto;
    margin-right: auto;
  }

  .Jobs-2 {
    display: inline-block;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s linear;
    border-radius: 49px;
    padding: 10px 32px;
    border: none;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      linear-gradient(85.21deg, #5fb5fc -7.59%, #844aff 62.28%, #df52ff 113.15%);
    margin-top: 2rem;
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

export default HiringBanner;
