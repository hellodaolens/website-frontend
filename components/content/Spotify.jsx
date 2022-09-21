import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/lazy';

const Spotify = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/podcast-embeds?populate=*`)
      .then((res) => res.json())
      .then((data) => setPodcasts(data?.data));
  }, []);

  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    let element = document.getElementById('embed-iframe');
    let options = {
      width: '60%',
      height: '200',
      uri: 'spotify:episode:7makk4oTQel546B0PZlDM5',
    };
    let callback = (EmbedController) => {
      document
        .querySelectorAll('ul#episodes > li > button')
        .forEach((episode) => {
          episode.addEventListener('click', () => {
            EmbedController.loadUri(episode.dataset.spotifyId);
          });
        });
    };
    IFrameAPI.createController(element, options, callback);
  };

  return (
    <Container className="section">
      <div id="embed-iframe"></div>
      <script
        src="https://open.spotify.com/embed-podcast/iframe-api/v1"
        async
      ></script>
      <script type="text/javascript">
        {
          (window.onSpotifyIframeApiReady = (IFrameAPI) => {
            let element = document.getElementById('embed-iframe');
            let options = {
              width: '60%',
              height: '200',
              uri: 'spotify:episode:7makk4oTQel546B0PZlDM5',
            };
            let callback = (EmbedController) => {
              document
                .querySelectorAll('ul#episodes > li > button')
                .forEach((episode) => {
                  episode.addEventListener('click', () => {
                    EmbedController.loadUri(episode.dataset.spotifyId);
                  });
                });
            };
            IFrameAPI.createController(element, options, callback);
          })
        }
      </script>
      <div className="content-center">
        <article id="embed-iframe"></article>
        {podcasts?.map((podcast) => {
          return (
            <article key={podcast?.id} className="podcast">
              {/* <ReactPlayer
                url={video?.attributes?.link}
                controls={true}
                width="100%"
                height="100%"
              /> */}
              <iframe
                style="border-radius:12px"
                src="https://open.spotify.com/embed/episode/0ppmIaUB4LUpgI84loC5Um?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </article>
          );
        })}
      </div>
    </Container>
  );
};

export const Container = styled.section`
  .podcast {
    overflow: hidden;
    position: relative;
    width: 100%;
    max-width: 592px;
    /* &::after {
      padding-top: 56.25%;
      display: block;
      content: '';
    } */
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

export default Spotify;
