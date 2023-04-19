import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;

  color: #07043b;
`;

export const Paragraph = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;

  color: #07043b;
`;

export const Button = styled.button`
  background-color: #2f65f8;
  color: #ffffff;

  padding: 15px 61px;
  border-radius: 3.125px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  :hover {
    background: #6c9bff;
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.15925);
    border-radius: 3.125px;
    transition: 200ms;
  }
`;
