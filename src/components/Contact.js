import styled from "styled-components";
import { useState } from "react";
import Popup from "./Popup";
import {
  ContentBox,
  HeaderBox,
  Header,
  Logo,
  Button,
  colorWhite,
  colorBlack,
  colorPrimary,
} from "../Styles";
import { Link, animateScroll as scroll } from "react-scroll";

import emailjs from "emailjs-com";

import linkedinLogo from "./Logos/logo-linkedin.svg";
import facebookLogo from "./Logos/logo-facebook.svg";
import githubLogo from "./Logos/logo-github.svg";
import upArrow from "./Logos/up-arrow.svg";

export default function Contact(props) {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const closePopup = () => {
    setTimeout(() => setIsOpen(false), 4000);
  };

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

  function validate(emailValue, nameValue, messageValue) {
    if (emailValue.length <= 0) {
      return true;
    } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
      return true;
    } else if (nameValue.length <= 0) {
      return true;
    } else if (messageValue.length <= 0) {
      return true;
    } else {
      return false;
    }
  }

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
          setIsOpen(true);
          closePopup();
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
            type="text"
            name="name"
            placeholder="Name"
            color={props.mode.text}
            onChange={nameChange}
            value={nameValue}
            required={true}
          />

          <label htmlFor="email" />
          <Input
            type="email"
            name="email"
            placeholder="Enter email"
            color={props.mode.text}
            onChange={emailChange}
            value={emailValue}
            required={true}
          />

          <label htmlFor="message" />
          <Textarea
            name="message"
            placeholder="Your Message"
            color={props.mode.text}
            onChange={messageChange}
            value={messageValue}
            required={true}
          />
        </FormContainer>
        <SubmitButton type="submit" color={props.mode.buttonColor}>
          Submit
        </SubmitButton>
        {isOpen && (
          <Popup
            content={
              <>
                <PopupMessage>
                  Your message has been sent! Thank you for getting in touch!
                </PopupMessage>
              </>
            }
            // handleClose={togglePopup}
          />
        )}
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
      <Link
        to="about"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <UpArrow src={upArrow} color={props.mode.buttonColor} />
      </Link>
    </ContentBox>
  );
}

//////// STYLES ////////

const FormTitle = styled.div`
  color: ${(props) => props.color};
  font-family: "Tangerine", cursive;
  font-size: 1.8rem;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1800px) {
    font-size: 3rem;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  border: 3px solid ${(props) => props.color};
  background-color: #303030;

  @media (max-width: 600px) {
    width: 450px;
  }
  @media (max-width: 450px) {
    width: 320px;
  }
  @media (min-width: 1800px) {
    width: 1200px;
  }
`;
const Input = styled.input`
  height: 50px;
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
  @media (min-width: 1800px) {
    height: 100px;
    font-size: 1.4rem;
    margin: 16px 16px 0 16px;
  }
`;
const Textarea = styled.textarea`
  height: 110px;
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
  @media (min-width: 1800px) {
    font-size: 1.4rem;
    height: 200px;
    margin: 16px 16px 16px 16px;
    padding: 40px 0 0 10px;
  }
`;

const SubmitButton = styled(Button)`
  align-self: flex-end;
  margin-top: 8px;
  background-color: ${colorWhite};
  border: 3px solid #303030;
`;

const ContactBox = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0 20px 0;
`;
const ContactLogo = styled(Logo)`
  width: 50px;
  height: 50px;
  margin: 0 15px 0 15px;

  @media (min-width: 1800px) {
    width: 80px;
    height: 80px;
    margin: 30px;
  }
`;
const ExternalLink = styled.a`
  display: flex;
  align-self: center;
`;

const UpArrow = styled.img`
  width: 40px;
  background-color: ${(props) => props.color};
  margin: 0 0 -40px 0;
  border-radius: 2px;

  &:hover {
    transform: scale(1.5, 1.5);
    cursor: pointer;
  }
`;

const PopupMessage = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: ${colorPrimary};

  @media (min-width: 1800px) {
    font-size: 3rem;
  }
`;
