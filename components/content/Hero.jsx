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
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import PageBanner from './PageBanner';
import HighlightedArticle from './Highlighted';
import FeaturedArticles from './FeaturedArticles';

const Hero = ({
  navItems,
  bannerArticle,
  bannerArticle2,
  pageBanner,
  featuredArticles,
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
  const { query } = useRouter();

  const [showMenu, setShowMenu] = useState(false);
  const [option, setOption] = useState('articles');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    query?.modal === 'open' && setIsModalOpen(true);
  }, [query]);

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

  const url = bannerArticle?.attributes?.podcastLink;
  const id = url && url.split('/')[4];

  return (
    <Container>
      <Navbar
        navItems={navItems}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <main onClick={() => setShowMenu(false)} className="section">
        <div className="section-center">
          <PageBanner banner={pageBanner} />

          <div className="banner-container">
            {/* banner */}
            <div className="banner">
              <div className="banner-image">
                {!bannerArticle?.attributes?.showPodcast &&
                  !bannerArticle?.attributes?.showYt && (
                    <Image
                      src={
                        bannerArticle?.attributes?.image?.data?.attributes?.url
                      }
                      alt="banner"
                      width={655.31}
                      height={351.48}
                      placeholder="blur"
                      blurDataURL={
                        bannerArticle?.attributes?.image?.data?.attributes?.url
                      }
                      objectFit="contain"
                    />
                  )}
                {bannerArticle?.attributes?.showYt && (
                  <div className="video">
                    <ReactPlayer
                      url={bannerArticle?.attributes?.ytLink}
                      controls={true}
                      width="100%"
                      height="100%"
                    />
                  </div>
                )}
                {bannerArticle?.attributes?.showPodcast && (
                  <iframe
                    style={{ borderRadius: '15px' }}
                    src={`https://open.spotify.com/embed/episode/${id}?utm_source=generator&theme=0`}
                    width="100%"
                    height="352"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    frameBorder="0"
                  ></iframe>
                )}
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
                  {bannerArticle?.attributes?.showReadMoreInHightlight && (
                    <Link href={`/blog/${bannerArticle?.attributes?.slug}`}>
                      <a className="btn">{readingStats.text}</a>
                    </Link>
                  )}
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

            {/* sidebar */}
            <aside className="sidebar">
              <HighlightedArticle
                banner={bannerArticle2}
                openModal={openModal}
              />
              <h4>Latest Blogs</h4>
              <FeaturedArticles articles={featuredArticles} />
            </aside>
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

  main.section {
    padding: 3rem 0;
  }

  .sidebar {
    display: none;

    h4 {
      margin-bottom: 0;
    }

    @media (min-width: 892px) {
      display: grid;
      gap: 1rem;
    }
  }

  .banner-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;

    @media (min-width: 892px) {
      grid-template-columns: 1fr 364px;
    }
    @media (min-width: 1150px) {
      grid-template-columns: 1fr 400px;
    }
  }

  .banner {
    background: url(${bannerBcg.src}) top/cover no-repeat;
    gap: 1.5rem;
    padding: 1.5rem;
    border-radius: 20px;
    display: grid;
    max-width: fit-content;
    margin: 0 auto;

    @media (min-width: 892px) {
      margin: 0;
    }

    @media (min-width: 992px) {
      align-items: center;
      gap: 2rem;
    }
  }

  .banner-image img {
    border-radius: 12px;
  }

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

    span {
      transition: var(--transition);
    }

    &:hover span {
      transform: scale(1.05);
    }
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
    justify-self: end;
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
