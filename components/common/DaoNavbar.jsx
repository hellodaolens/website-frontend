import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from '../../public/assets/discover-daos/logo.webp';
import { DaoSearchBar } from '.';

const DaoNavbar = () => {
  return (
    <NavContainer>
      <div className="section-center nav-center">
        <div className="logo">
          <Link href="/">
            <a>
              <Image src={logo} alt={'Dao Lens'} width={145} height={28} />
            </a>
          </Link>
        </div>

        <form>
          <DaoSearchBar />
        </form>

        <div className="links">
          <Link href="/all-daos">
            <a className="all-link">All DAO's</a>
          </Link>
          <a href="#" className="btn">
            Submit Your DAO
          </a>
        </div>
      </div>
    </NavContainer>
  );
};

export const NavContainer = styled.nav`
  background: transparent;
  position: relative;
  z-index: 10;

  .nav-center {
    max-width: 1260px;
    margin: 0 auto;
    padding: 1.5rem 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;

    @media screen and (max-width: 972px) {
      form {
        order: 3;
        text-align: center;
        margin: 0 auto;
      }

      .links {
        order: 2;
      }
    }

    @media screen and (max-width: 482px) {
      .links {
        .btn {
          display: none;
        }
      }

      padding-bottom: 0;
    }

    form {
      width: 100%;
      max-width: 460px;
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

    .links {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    .all-link {
      color: #fff;

      &:hover {
        text-decoration: underline;
      }
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
        linear-gradient(
          85.21deg,
          #5fb5fc -7.59%,
          #844aff 62.28%,
          #df52ff 113.15%
        );
      &:hover {
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.1)
          ),
          linear-gradient(
            85.21deg,
            #5fb5fc -7.59%,
            #844aff 62.28%,
            #df52ff 113.15%
          );
        box-shadow: 0px 1px 32px #aa47e5;
      }
    }
  }
`;

export default DaoNavbar;
