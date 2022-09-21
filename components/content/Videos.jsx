import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/lazy';

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/you-tube-embeds?populate=*`)
      .then((res) => res.json())
      .then((data) => setVideos(data?.data));
  }, []);

  return (
    <Container className="section">
      <div className="content-center">
        {videos?.map((video) => {
          return (
            <article key={video?.id} className="video">
              <ReactPlayer
                url={video?.attributes?.link}
                controls={true}
                width="100%"
                height="100%"
              />
            </article>
          );
        })}
      </div>
    </Container>
  );
};

export const Container = styled.section`
  .video {
    overflow: hidden;
    position: relative;
    width: 100%;
    max-width: 592px;
    &::after {
      padding-top: 56.25%;
      display: block;
      content: '';
    }
    iframe {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
    }
  }

  .content-center {
    display: grid;
    gap: 2rem;

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default Videos;
