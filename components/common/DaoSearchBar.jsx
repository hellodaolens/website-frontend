import Link from 'next/link';
import React, { useRef, useState } from 'react';
import data from '../../data.json';
import styled from 'styled-components';
import Image from 'next/image';

const SearchBar = () => {
  const inputRef = useRef();

  const [results, setResults] = useState([]);

  const handleChange = () => {
    const query = inputRef.current.value;
    if (!query) return setResults([]);
    setResults(
      data
        .filter((item) =>
          item.attributes.Token.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 3)
    );
  };

  const showResults = results.length === 87 ? [] : results;

  return (
    <>
      <input
        type="search"
        placeholder="Search communities"
        ref={inputRef}
        onChange={handleChange}
      />
      {showResults.length > 0 && (
        <ResultsContainer>
          <div className="results-center">
            {showResults?.map((result) => {
              return (
                <Link
                  href={`/discover-dao/${result.attributes.Token.replace(
                    '$',
                    ''
                  )}`}
                  key={result.id}
                >
                  <a className="result">
                    <Image
                      className="logo"
                      src={result.attributes.twitterdp}
                      alt={result.attributes.Token}
                      width={103.93}
                      height={104.57}
                    />
                    <div>
                      <h5>{result.attributes.Token.replace('$', '')}</h5>
                      <span>
                        {result?.attributes?.type
                          ?.split(' ')
                          ?.map((item, i) => {
                            return <small key={i}>#{item}</small>;
                          })}
                      </span>
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
        </ResultsContainer>
      )}
    </>
  );
};

const ResultsContainer = styled.div`
  background: rgba(103, 103, 103, 0.37);
  backdrop-filter: blur(11.5px);
  padding: 12px;
  position: absolute;
  border-radius: 10px;
  top: calc(100% + 10px);
  z-index: 100;

  .results-center {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .result {
    display: flex;
    gap: 1rem;
    background: rgba(0, 0, 0, 0.02);
    backdrop-filter: blur(76.0563px);
    border-radius: 15.2113px;
    padding: 10px;

    img {
      border-radius: 0.5rem;
    }

    h5 {
      color: #fff;
      margin-bottom: 1rem;
    }

    span {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    small {
      background: rgba(103, 103, 103, 0.7);
      border-radius: 10.8614px;
      padding: 5px 10px;
      color: #fff;
    }
  }
`;

export default SearchBar;
