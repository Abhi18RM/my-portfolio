import React from "react";
import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "../context";

const Conatiner = styled.div`
    display: flex;
    height: calc(100vh - 7.9rem);
    padding: 7rem 7% 2rem;
    background: ${(props) => props.isDarkMode && "#0b061f"};
    color: ${(props) => props.isDarkMode && "white"};
`;

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
`;

const Intro = styled.h3`
    text-align: start;
    font-weight: 600;
    font-size: 1.8rem;
    padding-bottom: 0.5rem;
`;

const Name = styled.h1`
    text-align: start;
    font-weight: 600;
    font-size: 2.5rem;
    padding-bottom: 2rem;
`;

const Info = styled.p`
    text-align: start;
    padding: 0 7rem 3rem 0;
`;

const SocialIcons = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    border: 1px solid black;
    margin-right: 1rem;
    border-radius: 50%;
    display: flex;
    padding: 0.5rem;
    cursor: pointer;
    border: 0.15rem solid #754ef9;
    color: #754ef9;
    font-size: 1rem;
    box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
    &:hover {
        background-color: #754ef9;
        color: white;
    }
`;

const ButtonContainer = styled.div`
    margin: 2rem 0;
    display: flex;
`;

const Button = styled.button`
    padding: 0.85rem;
    font-size: 0.85rem;
    color: white;
    background-color: #754ef9;
    border-radius: 0.6rem;
    border: 0.2rem solid transparent;
    font-weight: 500;
    letter-spacing: 0.05rem;
    box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
    cursor: pointer;
`;

const Home = () => {
    const { isDarkMode } = useTheme();

    const handleDownload = () => {
        const resumeUrl = process.env.REACT_APP_PUBLIC_URL + "/resume.pdf";
        const aTag = document.createElement("a");
        aTag.href = resumeUrl;
        aTag.setAttribute("download", "Abhiram_Resume");
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };

    return (
        <Conatiner data-section id="home" isDarkMode={isDarkMode}>
            <Content>
                <Intro>Hello, I am</Intro>
                <Name>R.Abhiram Kumar</Name>
                <Info>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam commodi totam voluptatibus repellat qui aliquid,
                    omnis porro magnam magni doloribus tenetur quod ipsa,
                    pariatur quidem consectetur harum natus vel sint!
                </Info>
                <SocialIcons>
                    <SocialIcon>
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon>
                        <LinkedInIcon />
                    </SocialIcon>
                    <SocialIcon>
                        <GitHubIcon />
                    </SocialIcon>
                </SocialIcons>
                <ButtonContainer>
                    <Button onClick={handleDownload}>Download Resume</Button>
                </ButtonContainer>
            </Content>
            <ImageContainer>image</ImageContainer>
        </Conatiner>
    );
};

export default Home;
