import React from "react";
import styled from "styled-components";
import CopyrightIcon from "@mui/icons-material/Copyright";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "../context";
import { Link } from "react-router-dom";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 7%;
    background-color: ${(props) =>
        props.isdarkmode ? "rgb(16, 14, 27)" : "#764ef9"};
    color: white;
    font-size: 0.9rem;
    @media screen and (max-width: 450px) {
        font-size: 0.7rem;
    }
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    @media screen and (max-width: 450px) {
        padding-top: 1rem;
    }
`;

const TopLeft = styled.div`
    flex: 3;
`;

const Name = styled.h2`
    padding-bottom: 1.5rem;
    letter-spacing: 1px;
`;

const Info = styled.div`
    max-width: 30rem;
    font-weight: 500;
`;

const TopRight = styled.div`
    flex: 1;
`;

const SocialIcons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    @media screen and (max-width: 450px) {
        gap: 0.1rem;
    }
`;

const SocialIcon = styled.div`
    color: white;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 1rem;
    border-top: 1px solid white;
`;

const Left = styled.div`
    @media screen and (max-width: 450px) {
        font-size: 0.78rem;
    }
`;
const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: #764ef9;
    padding: 0.4rem;
    border-radius: 0.4rem;
    &:hover {
        outline-color: white;
    }
`;

const Footer = () => {
    const { isDarkMode } = useTheme();
    return (
        <Container isdarkmode={isDarkMode}>
            <Top>
                <TopLeft>
                    <Name>ABHIRAM KUMAR</Name>
                    <Info>
                        Skilled Full Stack Developer proficient in frontend and
                        backend, driving successful web applications and
                        products.
                    </Info>
                </TopLeft>
                <TopRight>
                    <Name>SOCIAL</Name>
                    <SocialIcons>
                        <Link
                            to="https://www.instagram.com/abhiramravuri"
                            style={{ display: "flex" }}
                        >
                            <SocialIcon>
                                <Instagram />
                            </SocialIcon>
                        </Link>
                        <Link
                            to="https://www.linkedin.com/in/abhiram-ravuri/"
                            style={{ display: "flex" }}
                        >
                            <SocialIcon>
                                <LinkedIn />
                            </SocialIcon>
                        </Link>
                        <Link
                            to="https://www.linkedin.com/in/abhiram-ravuri/"
                            style={{ display: "flex" }}
                        >
                            <SocialIcon>
                                <GitHub />
                            </SocialIcon>
                        </Link>
                    </SocialIcons>
                </TopRight>
            </Top>
            <Bottom>
                <Left>
                    Copyright <CopyrightIcon fontSize="sm" /> 2023 | All rights
                    reserved
                </Left>
                <Right>
                    <ScrollLink
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                        }}
                    >
                        <ArrowUpwardIcon fontSize="small" />
                    </ScrollLink>
                </Right>
            </Bottom>
        </Container>
    );
};

export default Footer;
