import styled from "styled-components";
import Image from "next/image";
import { Button, Paragraph, Title } from "./shared/styles";
import LandingMage from "@/public/LandingMage.png";

const LandingPage = (): JSX.Element => {
  return (
    <>
      <Section>
        <Container>
          <TextContent>
            <Title>
              All your files in one secure location, accessible anywhere.
            </Title>
            <CustomParagraph>
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </CustomParagraph>
            <Form>
              <Input placeholder='Enter your email...'></Input>
              <Button>Get Started</Button>
            </Form>
          </TextContent>
          <ImageContainer>
            <Image src={LandingMage} alt={"Landing Image"} />
          </ImageContainer>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
  width: 100%;

  @media (max-width: 1040px) {
    margin-bottom: 90px;
  }
`;

const Container = styled.div`
  max-width: 1280px;
  padding: 0 16px;
  margin: 0 auto;
  padding-bottom: 164px;

  display: flex;
  gap: 13px;

  @media (max-width: 1040px) {
    flex-direction: column-reverse;
    align-items: center;
    width: 320px;
    padding: 0 16px;
    margin: 0 auto;

    text-align: center;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 627px;

  @media (max-width: 1040px) {
    width: none;
    max-width: 600px;
  }

  @media (max-width: 600px) {
    width: none;
    max-width: 320px;
  }

  justify-content: center;
`;

const CustomParagraph = styled(Paragraph)`
  padding: 13px 0 25px 0;
`;

const ImageContainer = styled.div`
  @media (max-width: 1280px) {
    img {
      width: 418px;
      height: 310px;
    }
  }
  @media (max-width: 1040px) {
    img {
      width: 304px;
      height: 225px;
    }
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

const Input = styled.input`
  padding: 14px 21px 12px 21px;
  width: 320px;
  border-radius: 4px;
  border: 1px solid;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  color: #07043b;

  ::placeholder {
    color: #c2c2c2;
  }
`;

export default LandingPage;
