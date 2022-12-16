import styled from 'styled-components';
import { useState } from 'react';
import Image from 'next/image';
import daosData from '../../data.json';
import Link from 'next/link';
import daoBCG from '../../public/assets/discover-daos/dao-bcg.png';
import { tags } from '../utils/getPopularTags';
import { DaoSearchBar } from '../common';

const DAOs = () => {
  const hottestDaos = daosData.filter((item) => item.attributes.isPopular);
  const [daos, setDaos] = useState(hottestDaos);
  const [sectionTitle, setSectionTitle] = useState('Hottest DAOs');

  const handleTagFilter = (tag) => {
    const newDaos = daosData.filter((item) => item.attributes.type === tag);
    setDaos(newDaos.slice(0, 6));
    setSectionTitle(tag);
  };

  return (
    <Container className="section">
      <div className="section-center">
        <header>
          <form className="search-box">
            <DaoSearchBar />
          </form>
          <div className="tags">
            {tags.map((tag, i) => {
              return (
                <button
                  key={i}
                  className={`${
                    sectionTitle === tag.category ? 'active' : ''
                  } tag-btn`}
                  onClick={() => handleTagFilter(tag.category)}
                >
                  {tag.category}
                </button>
              );
            })}
          </div>
        </header>

        <div className="title">
          <h3>{sectionTitle}</h3>
          <Link href="/all-daos">
            <a>See all</a>
          </Link>
        </div>

        <div className="daos-center">
          {daos.map((item) => {
            return (
              <Link
                href={`/discover-dao/${item.attributes.Token.replace('$', '')}`}
                key={item.id}
              >
                <a className="dao">
                  <Image
                    className="logo"
                    src={item.attributes.twitterdp}
                    alt={item.attributes.Token}
                    width={103.93}
                    height={104.57}
                  />
                  <div className="info">
                    <h5>{item.attributes.Token.replace('$', '')}</h5>
                    <small>
                      {item.attributes.About.replace(/[^\w\s]/gi, '').substring(
                        0,
                        130
                      )}
                      ...
                    </small>
                  </div>

                  <a href={item.attributes.discordLink} className="join-btn">
                    Join
                  </a>
                </a>
              </Link>
            );
          })}
        </div>

        <div className="btn-container">
          <a href="https://daolens.typeform.com/to/C6t2Y6vr" className="btn">
            Submit Your DAO
          </a>
        </div>
      </div>
    </Container>
  );
};

export const Container = styled.section`
  header {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 992px) {
      justify-content: center;
    }

    form {
      width: 100%;
      max-width: 573px;
      position: relative;
    }

    input {
      width: 100%;
      background: rgba(103, 103, 103, 0.37);
      border-radius: 10px;
      border: none;
      padding: 0.75rem 1.25rem;
      color: var(--clr-white);

      &::placeholder {
        color: #ccc;
      }
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      button {
        background: rgba(103, 103, 103, 0.37);
        border-radius: 10px;
        border: none;
        padding: 0.75rem 1.25rem;
        color: #ccc;
        cursor: pointer;
      }

      .active {
        background: rgba(103, 103, 103, 0.9);
        color: var(--clr-white);
      }
    }
  }

  .title {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      margin-bottom: 0;
    }

    a {
      color: var(--clr-white);
      text-decoration: underline;
    }
  }

  .daos-center {
    display: grid;
    gap: 2rem;
    margin: 2rem 0;

    @media screen and (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .dao {
    background: url(${daoBCG.src}) top/cover no-repeat;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 1rem;
    padding: 18px;
    border-radius: 18px;

    @media screen and (max-width: 592px) {
      .info small {
        display: none;
      }
    }

    img {
      border-radius: 0.5rem;
    }

    h5 {
      color: var(--clr-white);
    }
    small {
      color: var(--clr-light-blue);
    }

    .join-btn {
      background: #01182b;
      border-radius: 4rem;
      color: var(--clr-white);
      border: none;
      padding: 0.5rem 1.25rem;
      cursor: pointer;
    }
  }

  .btn-container {
    text-align: center;
  }

  .btn {
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
`;

export default DAOs;
