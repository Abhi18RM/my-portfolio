import React from "react";
import styled from "styled-components";
import { Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import { useTheme } from "../context";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Conatiner = styled(motion.div)`
    display: flex;
    height: 100vh;
    background: ${(props) => props.isdarkmode && "#0b061f"};
    color: ${(props) => props.isdarkmode && "white"};
    position: relative;
    background: ${(props) =>
        props.isdarkmode
            ? "linear-gradient(to right,#333,rgb(20 20 22 / 69%)),url(common-bg.svg)"
            : "linear-gradient(to right,rgba(245, 245, 245, 0.8),rgba(245, 245, 245, 0.8)),url(common-bg.svg)"};
    align-items: center;
`;

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 8rem;
    @media screen and (max-width: 850px) {
        padding: 0 2rem;
    }
`;

// const Intro = styled.h3`
//     text-align: start;
//     font-weight: 600;
//     font-size: 1.8rem;
//     padding-bottom: 0.5rem;
// `;

const Name = styled.h1`
    text-align: center;
    font-weight: 700;
    font-size: 3.5rem;
    padding-bottom: 1rem;
    letter-spacing: 3px;
    @media screen and (max-width: 450px) {
        font-size: 2.75rem;
    }
`;

const Info = styled.p`
    text-align: center;
    @media screen and (max-width: 450px) {
        font-size: 0.85rem;
    }
`;

const SocialIcons = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
    left: 0;
    padding: 0.5rem;

    @media screen and (max-width: 1000px) {
        display: none;
    }
`;

const SocialIcon = styled.div`
    display: flex;
    padding: 0.5rem;
    cursor: pointer;
    color: ${(props) => (props.isdarkmode ? "white" : "black")};
    font-size: 1.2rem;
    &:hover {
        background: #754ef9;
    }
`;

const ButtonContainer = styled.div`
    margin: 2rem 0;
    display: flex;
    justify-content: center;
`;

const Button = styled.button`
    padding: 0.85rem 1.2rem;
    font-size: 0.85rem;
    color: white;
    background-color: #754ef9;
    border-radius: 0.6rem;
    border: 0.2rem solid transparent;
    font-weight: 700;
    letter-spacing: 0.05rem;
    box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
    cursor: pointer;
`;

const Home = () => {
    const { isDarkMode } = useTheme();

    const handleDownload = () => {
        const resumeUrl =
            "https://firebasestorage.googleapis.com/v0/b/my-portfolio-8552a.appspot.com/o/resume.pdf?alt=media&token=e8eb0af3-8753-45a7-936a-c53a3393532a";
        const aTag = document.createElement("a");
        aTag.href = resumeUrl;
        aTag.setAttribute("download", "Abhiram_Resume");
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };

    return (
        <Conatiner
            data-section
            id="home"
            isdarkmode={isDarkMode}
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
        >
            <Content>
                <Name>HEY I'M ABHIRAM KUMAR</Name>
                <Info>
                    Skilled Full Stack Developer proficient in frontend and
                    backend, driving successful web applications and products.
                </Info>
                <SocialIcons>
                    <Link
                        to="https://www.instagram.com/abhiramravuri"
                        style={{ display: "flex", color: "#764ef9" }}
                    >
                        <SocialIcon isdarkmode={isDarkMode}>
                            <Instagram />
                        </SocialIcon>
                    </Link>
                    <Link
                        to="https://www.linkedin.com/in/abhiram-ravuri/"
                        style={{ display: "flex", color: "#764ef9" }}
                    >
                        <SocialIcon isdarkmode={isDarkMode}>
                            <LinkedIn />
                        </SocialIcon>
                    </Link>
                    <Link
                        to="https://www.linkedin.com/in/abhiram-ravuri/"
                        style={{ display: "flex", color: "#764ef9" }}
                    >
                        <SocialIcon isdarkmode={isDarkMode}>
                            <GitHub />
                        </SocialIcon>
                    </Link>
                </SocialIcons>
                <ButtonContainer>
                    <Button onClick={handleDownload}>DOWNLOAD RESUME</Button>
                </ButtonContainer>
            </Content>
        </Conatiner>
    );
};

export default Home;
