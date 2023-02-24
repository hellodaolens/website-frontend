import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";
import daosData from "../../data.json";
import Link from "next/link";
import daoBCG from "../../public/assets/discover-daos/dao-bcg.png";
import search from "../../public/assets/discover-daos/search.svg";
import { DaoSearchBar } from "../common";
import { useEffect } from "react";
import { hotTags, tags as tag, alltags } from "../utils/getPopularTags";
const DAOs = ({ currentTag, setCurrentTag, bodyRef, allDao, daoData }) => {
  const [daos, setDaos] = useState([]);
  console.log("daoData.length", daoData.length);
  useEffect(() => {
    let newDaos = [];
    if (currentTag === "All DAOs") {
      newDaos = daoData.sort((a, b) =>
        a.attributes.title.localeCompare(b.attributes.title)
      );
    } else if (currentTag === "Hottest DAOs") {
      newDaos = daoData
        .sort((a, b) => {
          return a.attributes.title.localeCompare(b.attributes.title);
        })
        .filter((item) => item.attributes.isPopular);
    } else {
      newDaos = daoData
        .sort((a, b) => a.attributes.title.localeCompare(b.attributes.title))
        .filter((item) =>
          item.attributes.type.toLowerCase().includes(currentTag.toLowerCase())
        );
    }
    setDaos(allDao ? newDaos : newDaos.slice(0, 6));
  }, [currentTag, allDao]);

  return (
    <Container
      ref={bodyRef}
      className="section"
      style={{ marginTop: allDao ? "0px" : "" }}
    >
      <div className="section-center">
        <header>
          <form className="search-box">
            <DaoSearchBar />
          </form>
          <div className="tags">
            {hotTags.map((tag, i) => {
              return (
                <button
                  key={i}
                  className={`${
                    currentTag && tag.includes(currentTag) ? "active" : ""
                  } tag-btn`}
                  onClick={() => setCurrentTag(tag.split(" ")[1])}
                >
                  {tag}
                </button>
              );
            })}

            <div
              style={{
                borderRadius: "100px",
                border: "1px solid #E2E8F0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <select
                value={currentTag}
                style={{
                  height: "100%",
                  borderRadius: "100px",
                  borderLeft: "none",
                  borderTop: "none",
                  borderBottom: "none",
                  borderRight: "16px solid transparent",
                  padding: "8px 12px",
                  color: "#64748B",
                  font: "normal 500 16px/16px Inter",
                }}
                onChange={(e) => {
                  setCurrentTag(e.target.value);
                }}
              >
                {alltags.map((tag, i) => (
                  <option key={i} value={tag.split(" ")[1]}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </header>

        <div className="title">
          <h2 className="h3">{currentTag}</h2>
          <Link href="/all-daos">
            <a>See all</a>
          </Link>
        </div>

        <div className="daos-center">
          {daoData.map((item) => {
            let localTags = item?.attributes?.type.split(", ");
            return (
              <Link href={`/discover-dao/dao/${item.id}`} key={item.id}>
                <div
                  className="card"
                  style={{
                    border: "1px solid #E2E8F0",
                    background: "white",
                    padding: "20px",
                    borderRadius: "12px",
                  }}
                >
                  <div style={{ display: "flex", gap: "12px" }}>
                    <div
                      style={{
                        borderRadius: "12px",
                        width: "120px",
                        height: "80px",
                      }}
                    >
                      <Image
                        className="logo"
                        src={
                          item?.attributes?.profileImage?.data?.attributes?.url
                        }
                        alt={item?.attributes?.Token}
                        width={100}
                        height={100}
                        style={{ borderRadius: "12px" }}
                        objectFit="contain"
                      />
                    </div>

                    <div>
                      <h5 style={{ font: "normal 700 18px/24px Inter" }}>
                        {item.attributes.title}
                      </h5>
                      <small
                        style={{
                          font: "normal 400 12px/16px Inter",
                          color: "#64748B",
                        }}
                      >
                        {item.attributes.About.replace(
                          /[^\w\s]/gi,
                          ""
                        ).substring(0, 130)}
                        ...
                      </small>
                    </div>
                  </div>
                  {localTags.length > 0 && (
                    <div className="tags-list">
                      {localTags.map((tag, i) => {
                        if (i > 1) {
                          return null;
                        }
                        return (
                          <button
                            key={i}
                            className={`${
                              tag
                                .toLowerCase()
                                .includes(currentTag.toLowerCase()) &&
                              currentTag !== ""
                                ? "active"
                                : ""
                            } tag-btn`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentTag(tag);
                            }}
                          >
                            {tag}
                          </button>
                        );
                      })}

                      {localTags.length > 2 && `+${localTags.length - 2} more`}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
        {!allDao ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link href="/all-daos">
              <div
                style={{
                  display: "inline-block",
                  padding: "20px",
                  border: "1px solid #E2E8F0",
                  borderRadius: "100px",
                  font: "normal 500 18px/24px Inter",
                  color: "#64748B",
                  margin: "20px",
                  cursor: "pointer",
                  background: "white",
                }}
              >
                Load more
              </div>
            </Link>
          </div>
        ) : (
          <div
            style={{
              display: "inline-block",
            }}
          ></div>
        )}
      </div>
    </Container>
  );
};

export const Container = styled.section`
  z-index: 10;
  position: relative;
  margin-top: 650px;
  @media screen and (max-width: 1024px) {
    margin-top: 500px;
  }

  @media screen and (max-width: 792px) {
    margin-top: 450px;
  }

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
      max-width: 400px;
    }

    input {
      width: 100%;
      border-radius: 100px;
      border: 1px solid #ded0fb;
      padding: 0.75rem 0.75rem 0.75rem 2.5rem;
      background: white url(${search.src}) no-repeat 3% 50%;
      background-size: 20px 20px;
    }
  }
  .card {
    background: pink;
    cursor: pointer;
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
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    button {
      background: white;
      border-radius: 100px;
      border: 1px solid #e2e8f0;
      padding: 8px 12px;
      color: #64748b;
    }

    .active {
      background: #9061f9;
      color: white;
    }
  }
  .tags-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 16px;
    color: #64748b;

    font: normal 500 12px/16px Inter;

    button {
      background: white;
      border-radius: 100px;
      border: 1px solid #e2e8f0;
      padding: 8px 12px;
      color: #64748b;
      cursor: pointer;

      font: normal 500 12px/16px Inter;
    }

    .active {
      background: #9061f9;
      color: white;
    }
  }

  .title {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3,
    .h3 {
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
    @media screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
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
`;

export default DAOs;
