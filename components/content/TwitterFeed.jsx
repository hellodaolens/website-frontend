import styled from 'styled-components';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { useState, useEffect } from 'react';
import reviewBCG from '../../public/assets/content/twitterBcg.png';
import twitterLogo from '../../public/assets/content/twitter-logo.jpg';
import { MdVerified } from 'react-icons/md';

const TwitterFeed = () => {
  const [tweets, setTweets] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const tweetsToShow = showAll ? tweets : tweets?.slice(0, 4);

  useEffect(() => {
    fetch(`/api/twitter`)
      .then((res) => res.json())
      .then((data) => setTweets(data?.data.sort((a, b) => b?.id - a?.id)));
  }, []);

  return (
    <Container className="section">
      <div className="section-center">
        <div className="title">
          <h3>Twitter feed</h3>
        </div>

        <div className="tweets-center">
          {/* <TwitterTimelineEmbed
            sourceType="profile"
            screenName="DaoLens"
            theme="dark"
            options={{ height: 792 }}
          /> */}
          {tweetsToShow?.map((tweet) => {
            return (
              <article key={tweet?.id} className="tweet">
                <div className="tweet-header">
                  <img
                    src={twitterLogo.src}
                    alt="@DaoLens"
                    className="twitter-logo"
                  />
                  <h4>
                    DaoLens <MdVerified />
                  </h4>
                </div>
                <p>{tweet?.text}</p>
              </article>
            );
          })}
        </div>

        <div className="btn-wrapper">
          <button className="btn2" onClick={() => setShowAll(!showAll)}>
            View {showAll ? 'Less' : 'More'}
          </button>
        </div>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  text-align: center;

  .title {
    text-align: center;
    margin-bottom: 4rem;
  }

  .btn-wrapper {
    margin-top: 4rem;
    text-align: center;
  }

  .tweets-center {
    display: grid;
    gap: 2rem;

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .tweet {
    background: url(${reviewBCG.src}) center no-repeat;
    background-size: 100% 100%;
    padding: 2rem;
    border-radius: 20px;
    text-align: left;

    .twitter-logo {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      margin-bottom: 1rem;
      border: 2px solid var(--clr-black);
    }

    h4 svg {
      fill: #4d9eea;
    }

    p {
      margin-bottom: 0;
    }
  }
`;

export default TwitterFeed;
