import styled from "styled-components";
import Wave from "./icons/Wave";
import { Paragraph, Title } from "./shared/styles";
import Link from "next/link";
import Arrow from "./icons/Arrow";
import Image from "next/image";
import SharedImage from "@/public/SharedImage.png";
import AboutImage from "@/public/AboutMage.png";

const SharedComponents = (): JSX.Element => {
  return (
    <>
      <Wave />
      <Section>
        <Container>
          <TextContent>
            <CustomTitle>Stay productive, wherever you are</CustomTitle>

            <Paragraph>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
              <br />
              <br />
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </Paragraph>
            <LinkContainer>
              <Link href={"/"}>
                <span>See how Fylo works</span> <Arrow></Arrow>
              </Link>
            </LinkContainer>

            <InnerText>
              <strong>“</strong>
              <Text>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </Text>
              <CardContainer>
                <Image src={AboutImage} alt={"About Image"} />
                <NameContainer>
                  <Name>Kyle Burton</Name>
                  <Cargo>Founder & CEO, Huddle</Cargo>
                </NameContainer>
              </CardContainer>
            </InnerText>
          </TextContent>
          <ImageContainer>
            <Image src={SharedImage} alt={"Shared Image"} />
          </ImageContainer>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
  width: 100%;
  background-color: #f8f8fe;
  margin-top: -5px;
`;

const Container = styled.div`
  max-width: 1280px;
  padding: 100px 16px 0 16px;
  margin: 0 auto;

  display: flex;
  align-items: center;

  @media (max-width: 1040px) {
    flex-direction: column-reverse;
  }
`;

const CustomTitle = styled(Title)`
  margin-bottom: 38px;

  @media (max-width: 780px) {
    font-size: 16px;
  }
`;

const LinkContainer = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  border-bottom: 2px solid;

  margin: 15px 0 44px 0;

  max-width: 166px;

  color: #3da08f;
  display: flex;
  align-items: center;

  svg {
    border-radius: 100%;
    width: 12px;
    height: 12px;
    background-color: #3da08f;
    text-decoration: underline;
  }

  span {
    padding-right: 7px;
  }

  :hover {
    color: #71dfcc;

    svg {
      background-color: #71dfcc;
    }
  }

  @media (max-width: 1040px) {
    justify-content: center;
    margin: 36px auto 40px auto;
  }
`;

const ImageContainer = styled.div`
  @media (max-width: 1280px) {
    img {
      width: 447px;
      height: 337px;
    }
  }

  @media (max-width: 780px) {
    img {
      width: 320px;
      height: 241px;
    }
  }
`;

const TextContent = styled.div`
  @media (max-width: 1040px) {
    flex-direction: column;

    text-align: center;
  }
`;

const InnerText = styled.div`
  background-color: white;
  box-shadow: 0px 0px 10px 5px rgba(56, 56, 56, 0.0458843);
  border-radius: 5px;
  padding: 29px 33px 26px 33px;
  display: inline-block;

  strong {
    font-family: "Nunito Sans", sans-serif;
    font-weight: 400;
    font-size: 40px;
  }

  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 23px;

    color: #07043b;
  }

  margin-bottom: 82px;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

const Text = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 23px;

  max-width: 284px;
  margin-top: -25px;

  letter-spacing: 0.5px;

  color: #07043b;
`;

const Name = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 15px;

  letter-spacing: 0.55px;

  color: #07043b;
`;

const Cargo = styled.h3`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 15px;

  letter-spacing: 0.4px;

  color: #07043b;
`;

export default SharedComponents;
