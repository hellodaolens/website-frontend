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
          >
            <p>Admin</p>
          </button>
          <button
            className={tabs === 'contributor' ? 'active' : ''}
            onClick={() => setTabs('contributor')}
          >
            <p>Contributor</p>
          </button>
        </div>
        {tabs === 'admin' && (
          <div className="tab">
            <div className="tab-header">
              <h3>{adminHeading}</h3>
              <a href={adminCTADestination} className="btn">
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
                      width={isMobile ? 48 : 100}
                      height={isMobile ? 48 : 100}
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
              <a href={contributorCTADestination} className="btn">
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
                      width={isMobile ? 48 : 100}
                      height={isMobile ? 48 : 100}
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

  .tabs-btn-container.btn2 {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0.35rem;
    display: flex;
    justify-content: center;
    width: fit-content;
    margin: 0 auto;

    &:hover {
      box-shadow: none;
    }

    button {
      background: transparent;
      border: none;
      outline: none;
      padding: 0.5rem 1rem;
      border-radius: 2rem;

      p {
        color: var(--clr-white);
        margin-bottom: 0;
        cursor: pointer;
      }
    }

    button.active {
      background: #200734;
      p {
        background: linear-gradient(
            85.21deg,
            #5fb5fc -7.59%,
            #844aff 62.28%,
            #df52ff 113.15%
          ),
          #ffffff;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
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

    @media (max-width: 792px) {
      margin-top: 2rem;
    }
  }

  .tab-points {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 1rem;

    @media (min-width: 792px) {
      margin-top: 4rem;
      grid-template-columns: [start] 1fr [col-1] 1fr [end];
      grid-template-rows: [start] 1fr [col-1] 1fr [end];
      gap: 2rem;

      .point {
        &:nth-child(1) {
          grid-column: start/col-1;
          grid-row: start/col-1;
        }
        &:nth-child(2) {
          grid-column: start/col-1;
          grid-row: col-1/end;
        }
        &:nth-child(3) {
          grid-column: col-1/end;
          grid-row: col-1/end;
        }
      }
    }

    .point {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 1rem;
      align-items: center;

      p {
        margin-bottom: 1rem;
      }
    }
  }

  @media (max-width: 792px) {
    .small-img {
      display: none;
    }
  }
`;

export default Tabs;
