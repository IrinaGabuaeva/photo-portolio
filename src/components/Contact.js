import styled from "styled-components";
import { useState } from "react";
import {
  ContentBox,
  HeaderBox,
  Header,
  Logo,
  Button,
  colorWhite,
  colorBlack,
} from "../Styles";

import emailjs from "emailjs-com";

import linkedinLogo from "./Logos/logo-linkedin.svg";
import facebookLogo from "./Logos/logo-facebook.svg";
import githubLogo from "./Logos/logo-github.svg";

export default function Contact(props) {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const nameChange = (event) => {
    setNameValue(event.target.value);
  };

  const emailChange = (event) => {
    setEmailValue(event.target.value);
  };
  const messageChange = (event) => {
    setMessageValue(event.target.value);
  };

  const clear = (event) => {
    setNameValue("");
    setEmailValue("");
    setMessageValue("");
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9wql7fm",
        "template_bclag76",
        e.target,
        "user_TeKdi5b6kVrfOsjleRRCr"
      )

      .then(
        (result) => {
          clear();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <ContentBox id="contact" bgColor={props.mode.bg} color={props.mode.text}>
      <HeaderBox color={props.mode.text}>
        <Header color={props.mode.text}>CONTACT</Header>
      </HeaderBox>
      <FormTitle color={props.mode.title}>
        Have a question or want to work together?
      </FormTitle>
      <Form onSubmit={sendEmail}>
        <FormContainer color={props.mode.text}>
          <label htmlFor="name" />
          <Input
            type="name"
            name="name"
            placeholder="Name"
            color={props.mode.text}
            onChange={nameChange}
            value={nameValue}
          />

          <label htmlFor="email" />
          <Input
            type="email"
            name="email"
            placeholder="Enter email"
            color={props.mode.text}
            onChange={emailChange}
            value={emailValue}
          />

          <label htmlFor="message" />
          <Textarea
            name="message"
            placeholder="Your Message"
            color={props.mode.text}
            onChange={messageChange}
            value={messageValue}
          />
        </FormContainer>
        <SubmitButton type="submit" color={props.mode.buttonColor}>
          Submit
        </SubmitButton>
      </Form>
      <ContactBox>
        <ExternalLink href="https://www.linkedin.com/in/Irina-Gabuaeva">
          <ContactLogo src={linkedinLogo} />
        </ExternalLink>
        <ExternalLink href="https://www.github.com/IrinaGabuaeva">
          <ContactLogo src={githubLogo} />
        </ExternalLink>
        <ExternalLink href="https://www.facebook.com/irina.gabuaeva">
          <ContactLogo src={facebookLogo} />
        </ExternalLink>
      </ContactBox>
    </ContentBox>
  );
}

//////// STYLES ////////

const FormTitle = styled.text`
  color: ${(props) => props.color};
  font-family: "Tangerine", cursive;
  font-size: 1.8rem;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  border: 3px solid ${(props) => props.color};
  background-color: #303030;

  @media (max-width: 900px) {
    width: 400px;
  }
`;
const Input = styled.input`
  height: 40px;
  margin: 8px 8px 0 8px;
  padding: 0 0 0 10px;
  background-color: ${colorWhite};
  outline: none;
  border: none;
  color: ${colorBlack};
  font-size: 1rem;
  &::placeholder {
    color: ${colorBlack};
    font-family: "Raleway", sans-serif;
    letter-spacing: 0.8px;
  }
`;
const Textarea = styled.textarea`
  height: 100px;
  margin: 8px 8px 8px 8px;
  padding: 10px 0 0 10px;
  background-color: ${colorWhite};
  outline: none;
  border: none;
  font-size: 1rem;
  color: ${colorBlack};
  &::placeholder {
    color: ${colorBlack};
    font-family: "Raleway", sans-serif;
    letter-spacing: 0.8px;
  }
`;

const SubmitButton = styled(Button)`
  height: 35px;
  align-self: flex-end;
  margin-top: 8px;
  background-color: ${colorWhite};
  border: 3px solid #303030;
`;
const ContactBox = styled.div`
  display: flex;
  margin: 70px 0 -20px 0;
  align-items: center;
`;
const ContactLogo = styled(Logo)`
  width: 50px;
  height: 50px;
  margin: 15px;
`;
const ExternalLink = styled.a`
  display: flex;
  align-self: center;
`;
