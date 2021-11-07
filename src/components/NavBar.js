import { Link } from 'react-router-dom';
import { Container } from './styles/BasicUI/Container.styled';
import { StyledNav, Logo, NavLinks } from './styles/NavBar.styled';

export const Nav = () => {
  return (
    <Container>
      <StyledNav>
        <Logo>M WRITO</Logo>
        <NavLinks>
          <ul>
            <Link to = '/'>
                <li>Home</li>
            </Link>
            <Link to= '/courses'>
                <li>Courses</li>
            </Link>
            <Link to='/blogs'>
              <li>Blogs</li>
            </Link>
            <li>Contact Us</li>
          </ul>
        </NavLinks>
      </StyledNav>
    </Container>
  );
};
