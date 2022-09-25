import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = ({ navItems }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useRouter();

  const handleNavClick = (item) => {
    if (item?.navLinks2.length > 0) {
      setShowMenu(!showMenu);
    }
  };

  return (
    <NavContainer>
      <div className="section-center nav-center">
        <div className="logo">
          <Link href="/">
            <a>
              <Image
                src={navItems?.logo?.data?.attributes?.url}
                alt={navItems?.logo?.data?.attributes?.name}
                width={145}
                height={28}
              />
            </a>
          </Link>
        </div>

        <div className="links">
          {navItems?.navLinks?.map((item) => {
            return (
              <Link
                key={item?.id}
                href={item?.navLinks2.length > 0 ? pathname : `/${item.to}`}
              >
                <a
                  className="link"
                  id={pathname === `/${item?.to}` ? 'active' : ''}
                  onClick={() => handleNavClick(item)}
                >
                  <span>{item?.name}</span>
                  {showMenu > 0 && (
                    <div className="dropdown">
                      {item?.navLinks2?.map((item) => {
                        return (
                          <Link key={item?.id} href={`/${item?.to}`}>
                            <a
                              className="dropdown-link link"
                              id={pathname === `/${item?.to}` ? 'active' : ''}
                            >
                              <span>{item?.name}</span>
                            </a>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </a>
              </Link>
            );
          })}
        </div>

        <div className="link-right">
          <a href={navItems?.anotherLinkDestination} className="btn2">
            {navItems?.anotherLink}
          </a>
        </div>
      </div>
    </NavContainer>
  );
};

export const NavContainer = styled.nav`
  background: transparent;

  .nav-center {
    max-width: 1136px;
    margin: 0 auto;
    padding: 1rem 0;
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;

    .links {
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      border-radius: 90px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(100px);
      width: fit-content;
      margin: 0 auto;
      padding: 5px 1rem;
      border: 2px solid #372744;
    }

    .link {
      color: var(--clr-white);
      cursor: pointer;
    }

    .link-right {
      .btn2 {
        margin-top: 0;
      }
    }

    .dropdown {
      position: absolute;
      top: 100%;
      display: flex;
      flex-direction: column;
      background: #372744;
      border-radius: 12px;
      padding: 0.5rem 0;
      z-index: 100;
      margin-top: 0.5rem;

      .dropdown-link {
        padding: 0.75rem 1rem;

        &:hover {
          background-color: #43334f;
        }
      }
    }

    #active {
      background: #200734;
      border-radius: 2rem;
      padding: 0.25rem 0.5rem;

      span {
        background: linear-gradient(
            85.21deg,
            #5fb5fc -7.59%,
            #844aff 62.28%,
            #df52ff 113.15%
          ),
          #ffffff;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }

    @media (max-width: 868px) {
      grid-template-columns: [start] auto [center] auto [end];
      gap: 0.5rem;
      grid-template-rows: [start] 1fr [center] 1fr [end];
      width: 100vw;

      .logo {
        grid-column: start/center;
        grid-row: start/center;
        margin-left: 5vw;
        align-self: center;
      }

      .links {
        grid-column: start/end;
        grid-row: center/end;
        width: 100%;
        border-radius: 0;
        gap: 0.75rem;
      }

      .link-right {
        grid-column: center/end;
        grid-row: start/center;
        text-align: right;
        margin-right: 5vw;

        .btn2 {
          padding: 10px 20px;
        }
      }
    }
  }
`;

export default Navbar;
