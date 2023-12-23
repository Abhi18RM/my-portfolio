import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../context";

const Container = styled.div`
    padding: 8rem 7% 3rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: ${(props) => props.isDarkMode && "#0b061f"};
    color: ${(props) => props.isDarkMode && "white"};
`;

const Heading = styled.h1`
    margin-bottom: 2rem;
`;

const Form = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
`;

const Inputbox = styled.div`
    padding: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media screen and (max-width: 850px) {
        gap: 2rem;
    }
`;

const Input = styled.input`
    width: 45%;
    padding: 0.8rem;
    border-radius: 0.8rem;
    background: ${(props) => (props.isDarkMode ? "#0b061f" : "#fdfdfd")};
    color: ${(props) => props.isDarkMode && "white"};
    border: none;
    box-shadow: ${(props) =>
        props.isDarkMode
            ? "0 0.2rem 0.8rem rgba(255, 255, 255, 0.1)"
            : "0 0.1rem 0.5rem rgba(0, 0, 0, 0.2)"};
    outline: none;

    @media screen and (max-width: 850px) {
        width: 100%;
    }
`;

const TextArea = styled.textarea`
    margin: 1rem 0;
    padding: 0.8rem;
    border-radius: 0.8rem;
    background: ${(props) => (props.isDarkMode ? "#0b061f" : "#fdfdfd")};
    color: ${(props) => props.isDarkMode && "white"};
    border: none;
    box-shadow: ${(props) =>
        props.isDarkMode
            ? "0 0.2rem 0.8rem rgba(255, 255, 255, 0.1)"
            : "0 0.1rem 0.5rem rgba(0, 0, 0, 0.2)"};
    outline: none;
`;

const Button = styled.button`
    cursor: pointer;
    padding: 0.8rem 1.6rem;
    border-radius: 0.8rem;
    border: 0.1rem solid transparent;
    box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
    background: #764ef9;
    color: white;
    font-size: 0.9rem;
    font-weight: 600;

    &:hover {
        background: ${(props) => (props.isDarkMode ? "#0b061f" : "white")};
        color: #764ef9;
        border-color: #764ef9;
    }
`;

const initialValues = {
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
};

const Contact = () => {
    const [details, setDetails] = useState(initialValues);
    const { isDarkMode } = useTheme();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDetails({
            ...details,
            [name]: value,
        });
    };
    console.log(details);

    return (
        <Container id="contact" data-section isDarkMode={isDarkMode}>
            <Heading>
                Contact{" "}
                <a href={() => false} style={{ color: "#764ef9" }}>
                    Me!
                </a>
            </Heading>
            <Form>
                <Inputbox>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleInputChange}
                        isDarkMode={isDarkMode}
                    />
                    <Input
                        type="text"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleInputChange}
                        isDarkMode={isDarkMode}
                    />
                </Inputbox>
                <Inputbox>
                    <Input
                        type="phone"
                        name="mobile"
                        placeholder="Mobile Number"
                        onChange={handleInputChange}
                        isDarkMode={isDarkMode}
                    />
                    <Input
                        type="text"
                        name="subject"
                        placeholder="Email Subject"
                        onChange={handleInputChange}
                        isDarkMode={isDarkMode}
                    />
                </Inputbox>
                <TextArea
                    cols="30"
                    rows="10"
                    name="message"
                    placeholder="Your Message"
                    onChange={handleInputChange}
                    isDarkMode={isDarkMode}
                />
            </Form>
            <Button isDarkMode={isDarkMode}>Send Message</Button>
        </Container>
    );
};

export default Contact;
