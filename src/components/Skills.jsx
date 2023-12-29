import React from "react";
import styled from "styled-components";
import { SkillsData } from "../SkillsData";
import { useTheme } from "../context";
import SkillBar from "react-skillbars";

const Container = styled.div`
    padding: 6rem 7%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${(props) => props.isdarkmode && "#0b061f"};
    color: ${(props) => props.isdarkmode && "white"};
`;

const SkillsHeading = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2.5rem;
`;

const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const colors = {
    bar: "#764ef9",
    title: {
        text: "#fff",
        background: "#2980b9",
    },
};

const Skills = () => {
    const { isDarkMode } = useTheme();

    return (
        <Container data-section id="skills" isdarkmode={isDarkMode}>
            <SkillsHeading>
                <a href={() => false} style={{ color: "#764ef9" }}>
                    My
                </a>{" "}
                Skills
            </SkillsHeading>
            <SkillsContainer>
                <SkillBar
                    skills={SkillsData}
                    colors={colors}
                    animationDuration={2000}
                    symbolColor={"#3498db"}
                />
            </SkillsContainer>
        </Container>
    );
};

export default Skills;
