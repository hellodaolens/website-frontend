import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = ({ navItems }) => {
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
              <Link key={item?.id} href={`/${item.to}`}>
                <a className="link">{item?.name}</a>
              </Link>
            );
          })}
        </div>

        <div className="link-right">
          <Link href="/" style={{ cursor: 'pointer' }}>
            <a className="btn2">{navItems?.anotherLink}</a>
          </Link>
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
      padding: 5px 20px;
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
