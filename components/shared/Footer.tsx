import styled from "styled-components";
import Image from "next/image";
import FooterIcon from "@/public/FooterIcon.png";
import FooterIcon2 from "@/public/FooterIcon2.png";
import PhoneIcon from "../icons/PhoneIcon";
import MailIcon from "../icons/MailIcon";
import FacebookImage from "@/public/FacebookImage.png";
import TwitterImage from "@/public/TwitterImage.png";
import InstagramIcon from "@/public/InstagramIcon.png";

const FooterComponent = (): JSX.Element => {
  return (
    <>
      <Footer>
        <Container>
          <IconContainer>
            <Image src={FooterIcon} alt={""} />
            <Image src={FooterIcon2} alt={""} />
          </IconContainer>
          <ListContainer>
            <ListContent>
              <List>
                <PhoneIcon />
                <p>Phone: +1-543-123-4567</p>
              </List>
              <List>
                <MailIcon /> example@fylo.com
              </List>
            </ListContent>
            <ListContent>
              <List>About Us</List>
              <List>Jobs</List>
              <List>Press</List>
              <List>Blog</List>
            </ListContent>
            <ListContent>
              <List>Contact</List>
              <List>Terms</List>
              <List>Privacy</List>
            </ListContent>
            <IconContent>
              <List>
                <div>
                  <Image src={FacebookImage} alt={""} />
                </div>
              </List>
              <List>
                <div>
                  {" "}
                  <Image src={TwitterImage} alt={""} />
                </div>
              </List>
              <List>
                <div>
                  <Image src={InstagramIcon} alt={""} />
                </div>
              </List>
            </IconContent>
          </ListContainer>
        </Container>
      </Footer>
    </>
  );
};

const Footer = styled.footer`
  width: 100%;
  background-color: #07043b;
`;

const Container = styled.div`
  max-width: 1280px;
  padding: 0 16px;
  margin: 0 auto;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding-top: 162px;
  padding-bottom: 42px;

  @media (max-width: 640px) {
    padding-top: 65px;
    padding-bottom: 32px;
  }
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const ListContent = styled.ul`
  display: flex;
  flex-direction: column;

  padding-bottom: 86px;

  @media (max-width: 640px) {
    padding-bottom: 32px;
  }
`;

const List = styled.li`
  display: flex;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  gap: 16px;
  align-items: center;
  padding: 7px 0;
`;

const IconContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 11px;
  align-items: flex-start;

  @media (max-width: 640px) {
    justify-content: center;
    padding-bottom: 42px;
  }
`;

export default FooterComponent;
