import styled from "styled-components";
import { Button, Paragraph, Title } from "./shared/styles";

const EarlyAcessPage = (): JSX.Element => {
  return (
    <>
      <Section>
        <Container>
          <TextContainer>
            <CustomTitle>Get early access today</CustomTitle>
            <CustomParagraph>
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </CustomParagraph>
          </TextContainer>
          <Form>
            <Input placeholder='email@example.com'></Input>
            <CustomButton>Get Started For Free</CustomButton>
          </Form>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
  width: 100%;
  background: #575988;
`;

const Container = styled.div`
  max-width: 1280px;
  padding: 100px 16px 85px 16px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1040px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  @media (max-width: 1040px) {
    margin: 0 auto;
  }
`;

const CustomTitle = styled(Title)`
  color: #ffffff;
  margin-bottom: 17px;
  font-size: 32px;
  line-height: 48px;
`;

const CustomParagraph = styled(Paragraph)`
  color: #ffffff;
  font-size: 16px;
  line-height: 24px;
  max-width: 500px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 1040px) {
    align-items: center;
    margin: 0 auto;
    padding-top: 24px;
  }
`;

const Input = styled.input`
  width: 480px;
  padding: 16px 0 16px 22px;
  border-radius: 6px;
  border: none;

  ::placeholder {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #c0c0c0;
  }
  @media (max-width: 1040px) {
    width: 280px;
  }
`;

const CustomButton = styled(Button)`
  width: 260px;
  padding: 16px 22px;

  @media (max-width: 1040px) {
    width: 100%;
  }
`;

export default EarlyAcessPage;
