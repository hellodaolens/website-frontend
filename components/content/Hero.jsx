import { useState } from 'react';
import styled from 'styled-components';
import readingTime from 'reading-time';
import heroBcg from '../../public/assets/content/hero-bcg.png';
import bannerBcg from '../../public/assets/content/banner-bcg.png';
import youtube from '../../public/assets/content/youtube.png';
import spotify from '../../public/assets/content/spotify.png';
import articles from '../../public/assets/content/articles.png';
import activeOption from '../../public/assets/content/active-option.png';
import Image from 'next/image';
import Link from 'next/link';
import Articles from './Articles';
import Spotify from './Spotify';
import { Navbar } from '../common';
import Videos from './Videos';
import Modal from './Modal';

const Hero = ({
  navItems,
  bannerArticle,
  allArticles,
  podcasts,
  videos,
  modalBtnText,
  modalHeading,
  modalPara,
  inputBoxFieldName1,
  inputBoxFieldName2,
  inputBoxFieldName3,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [option, setOption] = useState('articles');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const updateOptionBtns = (e) => {
    if (e.target.parentNode.classList.contains('option')) {
      document.querySelectorAll('.option').forEach((btn) => {
        btn.classList.add('unactive');
      });
      e.target.parentNode.classList.remove('unactive');
      e.target.parentNode.classList.add('active-opt');
    }

    if (e.target.parentNode.parentNode.classList.contains('option')) {
      document.querySelectorAll('.option').forEach((btn) => {
        btn.classList.add('unactive');
      });
      e.target.parentNode.parentNode.classList.remove('unactive');
      e.target.parentNode.parentNode.classList.add('active-opt');
    }
  };

  const selectOption = (e, opt) => {
    setOption(opt);
    updateOptionBtns(e);
  };

  const readingStats = readingTime(bannerArticle?.attributes?.content);

  return (
    <Container>
      <Navbar
        navItems={navItems}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <main onClick={() => setShowMenu(false)} className="section">
        <div className="section-center">
          <div className="banner">
            <div className='banner-image'>
              <img
                src={bannerArticle?.attributes?.image?.data?.attributes?.url}
                alt="banner"
                width={520}
                height={376}
                placeholder="blur"
                blurDataURL={
                  bannerArticle?.attributes?.image?.data?.attributes?.url
                }
                style={{ objectFit: "fill" }}
              />
            </div>
            <article className="info">
              <h3>{bannerArticle?.attributes?.name}</h3>
              <div>
                <p>{bannerArticle?.attributes?.shortDescription}</p>
                <p>
                  - {bannerArticle?.attributes?.author},{' '}
                  {bannerArticle?.attributes?.authorDesignation}
                </p>
              </div>

              <div className="btn-container">
                <Link href={`/blog/${bannerArticle?.attributes?.slug}`}>
                  <a className="btn">{readingStats.text}</a>
                </Link>
                {bannerArticle?.attributes?.showCTAinHighlight && (
                  <button onClick={openModal} className="btn2">
                    {modalBtnText}
                  </button>
                )}

                {isModalOpen && (
                  <Modal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    modalHeading={modalHeading}
                    modalPara={modalPara}
                    inputBoxFieldName1={inputBoxFieldName1}
                    inputBoxFieldName2={inputBoxFieldName2}
                    inputBoxFieldName3={inputBoxFieldName3}
                  />
                )}
              </div>
            </article>
          </div>

          <div className="options">
            <button
              className="option active-opt"
              onClick={(e) => selectOption(e, 'articles')}
            >
              <Image
                src={articles}
                alt="articles"
                width={100}
                height={100}
                objectFit="contain"
              />
              <p>Articles</p>
            </button>
            <button
              className="option"
              onClick={(e) => selectOption(e, 'youtube')}
            >
              <Image
                src={youtube}
                alt="youtube"
                width={100}
                height={100}
                objectFit="contain"
              />
              <p>Youtube playlists</p>
            </button>
            <button
              className="option"
              onClick={(e) => selectOption(e, 'spotify')}
            >
              <Image
                src={spotify}
                alt="spotify"
                width={100}
                height={100}
                objectFit="contain"
                placeholder="blur"
              />
              <p>Podcasts</p>
            </button>
          </div>

          {option === 'articles' && <Articles allArticles={allArticles} />}
          {option === 'youtube' && <Videos videos={videos} />}
          {option === 'spotify' && <Spotify podcasts={podcasts} />}
        </div>
      </main>
    </Container>
  );
};

export const Container = styled.section`
  background: url(${heroBcg.src}) top/cover no-repeat;

  .banner {
    background: url(${bannerBcg.src}) center/cover no-repeat;
    gap: 1.5rem;
    padding: 1.5rem;
    border-radius: 20px;
    display: grid;
    margin-top: 2rem;

    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      padding: 2rem;
    }
  }

  .info {
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  .options {
    margin: 2rem auto 0;
    text-align: center;
    justify-content: center;
    display: flex;
    gap: 2rem;

    @media (min-width: 992px) {
      margin-top: 4rem;
      gap: 4rem;
    }
  }

  .option {
    background: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  .option.active-opt {
    background: url(${activeOption.src}) center/contain no-repeat;
    background-size: 200% 150%;
  }

  .option.unactive {
    background: unset;
    background-size: unset;
  }

  .btn-container {
    width: fit-content;
    display: grid;
    grid-template-columns: auto auto;
    gap: 1rem;

    @media (max-width: 375px) {
      gap: 0.5rem;
      font-size: 0.75rem;

      .btn,
      .btn2 {
        padding: 10px 16px;
      }
    }
  }
`;

export default Hero;
