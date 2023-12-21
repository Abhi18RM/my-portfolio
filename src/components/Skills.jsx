import React from "react";
import styled from "styled-components";
import { SkillsData } from "../SkillsData";

const Container = styled.div`
    padding: 6rem 7%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SkillsHeading = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
`;

const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const TypeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 2.5rem;
`;

const Type = styled.h3`
    font-size: 1.1rem;
    font-weight: 600;
    margin-right: 2rem;
`;

const TypeSkills = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const TypeSkill = styled.div`
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const TypeIcon = styled.div`
    font-size: 5rem;
`;

const TypeName = styled.p``;

const Skills = () => {
    return (
        <Container data-section id="skills">
            <SkillsHeading>
                <a style={{ color: "#764ef9" }}>My</a> Skills
            </SkillsHeading>
            <SkillsContainer>
                {SkillsData.map((type) => (
                    <TypeContainer key={type.type}>
                        <Type>{type.type}</Type>
                        <TypeSkills>
                            {type.list.map((skill) => (
                                <TypeSkill key={skill.name}>
                                    <TypeIcon>{skill.icon}</TypeIcon>
                                    <TypeName>{skill.name}</TypeName>
                                </TypeSkill>
                            ))}
                        </TypeSkills>
                    </TypeContainer>
                ))}
            </SkillsContainer>
        </Container>
    );
};

export default Skills;
