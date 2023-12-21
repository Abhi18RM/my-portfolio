import React from "react";
import styled from "styled-components";

const Container = styled.div`
    padding: 8rem 7% 3rem;
    display: flex;
    align-items: center;
    flex-direction: column;
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
`;

const Input = styled.input`
    width: 45%;
    padding: 0.8rem;
    border-radius: 0.8rem;
    background: #fdfdfd;
    border: none;
    box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2);
    outline: none;
`;

const TextArea = styled.textarea`
    margin: 1rem 0;
    padding: 0.8rem;
    border-radius: 0.8rem;
    background: #fdfdfd;
    border: none;
    box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2);
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
    font-weight: 500;

    &:hover {
        background: white;
        color: #764ef9;
        border-color: #764ef9;
    }
`;

const Contact = () => {
    return (
        <Container id="contact" data-section>
            <Heading>
                Contact <a style={{ color: "#764ef9" }}>Me!</a>
            </Heading>
            <Form>
                <Inputbox>
                    <Input type="text" placeholder="Name" />
                    <Input type="text" placeholder="Email Address" />
                </Inputbox>
                <Inputbox>
                    <Input type="phone" placeholder="Mobile Number" />
                    <Input type="text" placeholder="Email Subject" />
                </Inputbox>
                <TextArea cols="30" rows="10" placeholder="Your Message" />
            </Form>
            <Button>Send Message</Button>
        </Container>
    );
};

export default Contact;
