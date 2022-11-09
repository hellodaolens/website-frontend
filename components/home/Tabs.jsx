import { useState, useEffect } from 'react';
import Image from 'next/image';
import tabs from '../../public/assets/homepage/tabs.png';
import styled from 'styled-components';
import checkMediaType from '../utils/checkMediaType';

const Tabs = ({
  adminHeading,
  adminImg1,
  adminImg2,
  adminPoints,
  adminCTAText,
  adminCTADestination,

  contributorHeading,
  contributorCTAText,
  contributorCTADestination,
  contributorImg1,
  contributorImg2,
  contributorPoints,
}) => {
  const [tabs, setTabs] = useState('admin');

  const [isMobile, setIsMobile] = useState(false);

  const setDimension = () => {
    const ismobile = window.innerWidth < 595;
    if (ismobile !== isMobile) setIsMobile(ismobile);
  };

  useEffect(() => {
    window.addEventListener('resize', setDimension, false);

    return () => {
      window.removeEventListener('resize', setDimension);
    };
  }, [isMobile]);

  return (
    <Container className="section">
      <div className="section-center">
        <div className="tabs-btn-container btn2">
          <button
            className={tabs === 'admin' ? 'active' : ''}
            onClick={() => setTabs('admin')}
            title={adminHeading}
          >
            <p>Admin</p>
          </button>
          <button
            className={tabs === 'contributor' ? 'active' : ''}
            onClick={() => setTabs('contributor')}
            title={contributorHeading}
          >
            <p>Contributor</p>
          </button>
        </div>
        {tabs === 'admin' && (
          <div className="tab">
            <div className="tab-header">
              <h3>{adminHeading}</h3>
              <a href={adminCTADestination} className="Typeform-3">
                {adminCTAText}
              </a>
            </div>

            <div className="tab-img">
              <div className="big-img">
                {checkMediaType(adminImg1) === 'video' ? (
                  <video
                    src={adminImg1?.data.attributes.url}
                    autoPlay
                    loop
                    muted
                    width={1136}
                    style={{ maxWidth: '1136px' }}
                    height={629}
                  />
                ) : (
                  <Image
                    src={adminImg1?.data.attributes.url}
                    alt="admin"
                    width={1136}
                    height={629}
                    placeholder="blur"
                    blurDataURL={adminImg1?.data.attributes.url}
                  />
                )}
              </div>
              <div
                className="small-img"
                style={{ position: 'absolute', top: '35%', right: '10%' }}
              >
                {checkMediaType(adminImg2) === 'video' ? (
                  <video
                    src={adminImg2?.data.attributes.url}
                    autoPlay
                    loop
                    muted
                    alt="admin"
                    width={249}
                    style={{ maxWidth: '249px' }}
                    height={492}
                  />
                ) : (
                  <Image
                    src={adminImg2?.data.attributes.url}
                    alt="admin"
                    width={249}
                    height={492}
                    placeholder="blur"
                    blurDataURL={adminImg2?.data.attributes.url}
                  />
                )}
              </div>
            </div>

            <div className="tab-points">
              {adminPoints?.map((point) => {
                return (
                  <div key={point?.id} className="point">
                    <Image
                      src={point?.img.data.attributes.url}
                      alt="point"
                      width={isMobile ? 38 : 57}
                      height={isMobile ? 58 : 87}
                      objectFit="contain"
                      placeholder="blur"
                      blurDataURL={point?.img.data.attributes.url}
                    />
                    <p>{point?.point}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tabs === 'contributor' && (
          <div className="tab">
            <div className="tab-header">
              <h3>{contributorHeading}</h3>
              <a href={contributorCTADestination} className="Typeform-4">
                {contributorCTAText}
              </a>
            </div>

            <div className="tab-img">
              <div className="big-img">
                {checkMediaType(contributorImg1) === 'video' ? (
                  <video
                    src={contributorImg1?.data.attributes.url}
                    autoPlay
                    loop
                    muted
                    width={1136}
                    style={{ maxWidth: '1136px' }}
                    height={629}
                  />
                ) : (
                  <Image
                    src={contributorImg1?.data.attributes.url}
                    alt="contributor"
                    width={1136}
                    height={629}
                    placeholder="blur"
                    blurDataURL={contributorImg1?.data.attributes.url}
                  />
                )}
              </div>
              <div
                className="small-img"
                style={{ position: 'absolute', top: '35%', right: '10%' }}
              >
                {checkMediaType(contributorImg2) === 'video' ? (
                  <video
                    src={contributorImg2?.data.attributes.url}
                    autoPlay
                    loop
                    muted
                    width={249}
                    style={{ maxWidth: '249px' }}
                    height={492}
                  />
                ) : (
                  <Image
                    src={contributorImg2?.data.attributes.url}
                    alt="contributor"
                    width={249}
                    height={492}
                    placeholder="blur"
                    blurDataURL={contributorImg2?.data.attributes.url}
                  />
                )}
              </div>
            </div>

            <div className="tab-points">
              {contributorPoints?.map((point) => {
                return (
                  <div key={point?.id} className="point">
                    <Image
                      src={point?.img.data.attributes.url}
                      alt="point"
                      width={isMobile ? 38 : 57}
                      height={isMobile ? 58 : 87}
                      objectFit="contain"
                      placeholder="blur"
                      blurDataURL={point?.img.data.attributes.url}
                    />
                    <p>{point?.point}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export const Container = styled.section`
  position: relative;
  background: url(${tabs.src}) center/cover no-repeat;

  .Typeform-3 {
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

  .Typeform-4 {
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

  .tabs-btn-container.btn2 {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    width: fit-content;
    margin: 0 auto;
    background: #550264;
    backdrop-filter: blur(115.51px);
    border-image-source: linear-gradient(
      32.95deg,
      #5fb5fc 1.87%,
      #844aff 49.17%,
      #df52ff 97.86%
    );
    border: 1.16px solid #844aff;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 120%;
      height: 150%;
      transform: translate(-10%, -10%);
      background: rgba(96, 182, 253, 0.3);
      filter: blur(37.5739px);
      border-radius: 77.7391px;
      z-index: -15;
    }

    &:hover {
      box-shadow: none;
    }

    button {
      background: transparent;
      border: none;
      outline: none;
      padding: 0.65rem 1rem;
      border-radius: 2rem;
      width: 8rem;

      p {
        color: var(--clr-white);
        margin-bottom: 0;
        cursor: pointer;
      }

      &:hover {
        transform: scale(0.97);
      }
    }

    button.active {
      background: #3a0068;
      color: #ffffff;
    }
  }

  .tab-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 792px) {
      flex-direction: column;
      justify-content: center;
      text-align: center;
      align-items: center;
      gap: 1rem;
    }

    h3 {
      max-width: 520px;
      margin-bottom: 0;
    }
  }

  .tab-img {
    margin-top: 4rem;
    position: relative;

    img {
      border-radius: 1rem;
    }

    @media (max-width: 792px) {
      margin-top: 3rem;
    }
  }

  .tab-points {
    margin-top: 2.5rem;
    display: grid;

    @media (min-width: 992px) {
      margin-top: 8rem;
      gap: 0 1rem;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      justify-content: space-between;
    }

    .point {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0.5rem;
      align-items: center;

      p {
        margin-bottom: -1rem;
      }
    }
  }

  @media (max-width: 992px) {
    .small-img {
      display: none;
    }
  }
`;

export default Tabs;
