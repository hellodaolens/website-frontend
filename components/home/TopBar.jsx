import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const TopBar = ({ topBarInfo }) => {
  return (
    <Container>
      <div className="section-center">
        <ReactMarkdown>{topBarInfo}</ReactMarkdown>
      </div>
    </Container>
  );
};

export const Container = styled.div`
  background: linear-gradient(90deg, #ff7586, #b372ce 50%, #6f86ff);
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0.5rem 2rem;
  text-align: center;
  width: 100%;

  p {
    margin: 0 auto;
    color: #fff;
  }

  a {
    color: #fff;
    text-decoration: underline;
  }
`;

export default TopBar;
