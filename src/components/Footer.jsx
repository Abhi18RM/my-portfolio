import React from "react";
import styled from "styled-components";
import CopyrightIcon from "@mui/icons-material/Copyright";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link as ScrollLink } from "react-scroll";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.1rem 7%;
    background-color: #764ef9;
    color: white;
    font-size: 0.9rem;
`;

const Left = styled.div``;
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
    return (
        <Container>
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
        </Container>
    );
};

export default Footer;
