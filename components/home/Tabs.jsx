import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import tabs from '../../public/assets/homepage/tabs.png';
import styled from 'styled-components';

const Tabs = ({ adminHeading, adminImg1, adminImg2, adminPoints }) => {
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
        {tabs === 'admin' && (
          <div className="tab">
            <div className="tab-header">
              <h3>{adminHeading}</h3>
              <Link href="/">
                <a className="btn">Try our onboarding tool</a>
              </Link>
            </div>

            <div className="tab-img">
              <div className="big-img">
                <Image
                  src={adminImg1?.data.attributes.url}
                  alt="admin"
                  width={1136}
                  height={629}
                />
              </div>
              <div
                className="small-img"
                style={{ position: 'absolute', top: '35%', right: '10%' }}
              >
                <Image
                  src={adminImg2?.data.attributes.url}
                  alt="admin"
                  width={249}
                  height={492}
                />
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
      </div>
    </Container>
  );
};

export const Container = styled.section`
  position: relative;
  background: url(${tabs.src}) center/cover no-repeat;

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
