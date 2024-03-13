import styled from "styled-components";
import { Send } from "@material-ui/icons";

import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fcf5f5;
`;
const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 70px;
`;

const Desc = styled.div`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 300;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  background-color: white;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  flex: 8;
  padding-left: 20px;
  border: none;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  color: white;
  background-color: teal;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>

      <Desc>Get timely updates from your favorite products.</Desc>

      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
