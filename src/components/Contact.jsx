import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTheme } from "../context";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
    padding: 6rem 7% 3rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: ${(props) => props.isdarkmode && "#0b061f"};
    color: ${(props) => props.isdarkmode && "white"};
    @media screen and (max-width: 450px) {
        padding-top: 3rem;
        font-size: 0.9rem;
    }
`;

const Heading = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 3rem;
    position: relative;
    &:after {
        content: "";
        position: absolute;
        top: calc(100% + 1rem);
        height: 5px;
        width: 2rem;
        background: #7843e9;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 5px;
    }
`;

const ContactDescription = styled.p`
    text-align: center;
`;

const FormContainer = styled.div`
    max-width: 60rem;
    width: 95%;
    padding: 3rem;
    margin: 4rem 0 auto 0;
    border-radius: 5px;
    background: ${(props) => (props.isdarkmode ? "#211d35" : "#fff")};
    box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
`;

const Inputbox = styled.div`
    margin-bottom: 2rem;
`;

const InputHead = styled.p`
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: ${(props) => (props.isdarkmode ? "white" : "#666")};
    margin-bottom: 1rem;
`;

const Input = styled.input`
    color: ${(props) => (props.isdarkmode ? "white" : "#333")};
    background: ${(props) => (props.isdarkmode ? "#211d35" : "#f0f0f0")};
    border: 1px solid ${(props) => (props.isdarkmode ? "#211d35" : "#f0f0f0")};
    padding: 0.6rem;
    width: 98%;
    letter-spacing: 1px;
    border-radius: 5px;
    font-size: 0.8rem;
    outline: none;
`;

const TextArea = styled.textarea`
    width: 98%;
    padding: 0.6rem;
    color: ${(props) => (props.isdarkmode ? "white" : "#333")};
    background: ${(props) => (props.isdarkmode ? "#211d35" : "#f0f0f0")};
    border: 1px solid ${(props) => (props.isdarkmode ? "#211d35" : "#f0f0f0")};
    letter-spacing: 1px;
    border-radius: 5px;
    font-size: 0.8rem;
    outline: none;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
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
        background: ${(props) => (props.isdarkmode ? "#0b061f" : "white")};
        color: #764ef9;
        border-color: #764ef9;
    }
`;

const initialValues = {
    name: "",
    email: "",
    message: "",
};

const Contact = () => {
    const [details, setDetails] = useState(initialValues);
    const { isDarkMode } = useTheme();

    useEffect(() => emailjs.init(process.env.REACT_APP_PUBLIC_KEY), []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDetails({
            ...details,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "my_portfolio";
        const templateId = "template_fnp3fm6";
        try {
            await emailjs.send(serviceId, templateId, { ...details });
            toast.success("Message sent successfully!!", {});
        } catch (error) {
            console.log(error);
            toast.error("Please try again!!", {});
        } finally {
            setDetails(initialValues);
        }
    };

    console.log(details);

    return (
        <Container id="contact" data-section isdarkmode={isDarkMode}>
            <Heading>CONTACT ME</Heading>
            <ContactDescription>
                Feel free to Contact me by submitting the form below and I will
                get back to you as soon as possible
            </ContactDescription>
            <FormContainer isdarkmode={isDarkMode}>
                <Form>
                    <Inputbox>
                        <InputHead isdarkmode={isDarkMode}>Name</InputHead>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            onChange={handleInputChange}
                            isdarkmode={isDarkMode}
                            value={details.name}
                        />
                    </Inputbox>
                    <Inputbox>
                        <InputHead isdarkmode={isDarkMode}>Email</InputHead>
                        <Input
                            type="text"
                            name="email"
                            placeholder="Enter Your Email Address"
                            onChange={handleInputChange}
                            isdarkmode={isDarkMode}
                            value={details.email}
                        />
                    </Inputbox>
                    <Inputbox>
                        <InputHead isdarkmode={isDarkMode}>Message</InputHead>
                        <TextArea
                            cols="30"
                            rows="10"
                            name="message"
                            placeholder="Enter Your Message"
                            onChange={handleInputChange}
                            isdarkmode={isDarkMode}
                            value={details.message}
                        />
                    </Inputbox>
                    <ButtonContainer>
                        <Button isdarkmode={isDarkMode} onClick={handleSubmit}>
                            SEND MESSAGE
                        </Button>
                    </ButtonContainer>
                </Form>
            </FormContainer>
            <ToastContainer />
        </Container>
    );
};

export default Contact;
