import styled from 'styled-components';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from 'react-twitter-embed';

const TwitterFeed = () => {
  return (
    <Container className="section">
      <div className="section-center">
        <div className="title">
          <h3>Twitter feed</h3>
        </div>

        <div className="tweets-center">
          <a
            className="twitter-timeline"
            data-height="792"
            data-dnt="true"
            data-theme="dark"
            href="https://twitter.com/DaoLens?ref_src=twsrc%5Etfw"
          >
            Tweets by DaoLens
          </a>{' '}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
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

  a {
    color: var(--clr-white);
    text-decoration: underline;
  }
`;

export default TwitterFeed;
