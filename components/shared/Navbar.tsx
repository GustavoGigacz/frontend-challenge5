import styled from "styled-components";
import Image from "next/image";
import NavIcon2 from "@/public/NavIcon2.png";
import NavIcon1 from "../icons/NavIcon1";

const Navbar = (): JSX.Element => {
  return (
    <>
      <Nav>
        <Container>
          <ImageContainer>
            <NavIcon1 /> <Image src={NavIcon2} alt={""} />
          </ImageContainer>
          <NavList>
            <Features>Features</Features>
            <Team>Team</Team>
            <SignIn>Sign In</SignIn>
          </NavList>
        </Container>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  width: 100%;
  padding: 65px 0 86px 0;

  @media (max-width: 520px) {
    gap: 24px;

    padding: 24px 0 98px 0;
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 520px) {
    svg {
      width: 27px;
      height: 23px;
    }

    img {
      width: 45px;
      height: 23px;
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 57px;

  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #07043b;

  @media (max-width: 520px) {
    font-size: 12px;
    gap: 24px;
  }
`;

const Features = styled.li``;

const Team = styled.li``;

const SignIn = styled.li``;

export default Navbar;
