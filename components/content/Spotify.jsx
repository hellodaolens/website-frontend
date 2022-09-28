import styled from 'styled-components';

const Spotify = ({ podcasts }) => {
  return (
    <Container className="section">
      <div className="content-center">
        {podcasts?.map((podcast) => {
          const url = podcast?.attributes?.link;
          const id = url.split('/')[4];

          return (
            <article key={podcast?.id} className="podcast">
              <iframe
                key={podcast?.id}
                style={{ borderRadius: '15px' }}
                src={`https://open.spotify.com/embed/episode/${id}?utm_source=generator&theme=0`}
                width="100%"
                height="100%"
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
  padding-bottom: 0;

  .content-center {
    display: grid;
    gap: 2rem;

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default Spotify;
