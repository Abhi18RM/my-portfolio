import React from "react";
import styled from "styled-components";
import { ProjectDetails } from "../SkillsData";
import { Link } from "react-router-dom";
import { useTheme } from "../context.js";

const Conatiner = styled.div`
    padding: 6.2rem 5% 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: ${(props) => props.isdarkmode && "#0b061f"};
    color: ${(props) => props.isdarkmode && "white"};
    @media screen and (max-width: 450px) {
        padding-top: 3rem;
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

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const Project = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-gap: 3rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 850px) {
        grid-template-columns: 1fr;
        grid-gap: 0rem;
    }
`;

const ImageContainer = styled.div``;

const Image = styled.img`
    width: 100%;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 850px) {
        padding: 0 3rem;
        text-align: center;
    }
    @media screen and (max-width: 450px) {
        padding: 0 1rem;
        text-align: center;
        font-size: 0.85rem;
    }
`;

const ProjectHead = styled.div``;

const ProjectName = styled.h3`
    margin-bottom: 1rem;
`;

const ProjectDetail = styled.p`
    margin-bottom: 2rem;
`;

const Button = styled.button`
    padding: 0.7rem 1rem;
    border: 2px solid #764ef9;
    background: transparent;
    color: ${(props) => props.isdarkmode && "white"};
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        transform: translateY(-5px);
        transition: transform 0.3s;
    }
`;

const Projects = () => {
    const { isDarkMode } = useTheme();

    return (
        <Conatiner data-section id="projects" isdarkmode={isDarkMode}>
            <Heading>PROJECTS</Heading>
            <Content>
                {ProjectDetails.map((project) => (
                    <Project key={project.name} link={project.img}>
                        <ImageContainer>
                            <Image src={project.img} />
                        </ImageContainer>
                        <Info>
                            <ProjectHead>
                                <ProjectName>{project.name}</ProjectName>
                                <ProjectDetail>{project.info}</ProjectDetail>
                            </ProjectHead>
                            <Link
                                to={project.link}
                                target="_blank"
                                style={{ color: "white" }}
                            >
                                <Button isdarkmode={isDarkMode}>
                                    VISIT SITE
                                </Button>
                            </Link>
                        </Info>
                    </Project>
                ))}
            </Content>
        </Conatiner>
    );
};

export default Projects;
