import React from "react";
import styled from "styled-components";
import { ProjectDetails } from "../SkillsData";
import IosShareIcon from "@mui/icons-material/IosShare";
import { Link } from "react-router-dom";

const Conatiner = styled.div`
    padding: 6.2rem 7% 0;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Heading = styled.h1`
    margin-bottom: 2rem;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    opacity: 0;
    font-size: 1rem;
    font-weight: 500;
    &:hover {
        color: white;
        background: linear-gradient(rgba(0, 0, 0, 0.1), #764ef9);
        opacity: 1;
    }
`;

const ProjectName = styled.h3`
    margin-bottom: 1rem;
`;

const ProjectDetail = styled.p`
    margin-bottom: 1rem;
    padding: 0 1rem;
`;

const Project = styled.div`
    position: relative;
`;

const Content = styled.div`
    padding: 2rem 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;

    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
        ${Info} {
            font-size: 0.9rem;
        }
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
        ${Info} {
            font-size: 1rem;
        }
    }
`;

const Projects = () => {
    return (
        <Conatiner data-section id="projects">
            <Heading>
                Latest <a style={{ color: "#764ef9" }}>Projects</a>
            </Heading>
            <Content>
                {ProjectDetails.map((project) => (
                    <Project>
                        <Image src={project.img} />
                        <Info>
                            <ProjectName>{project.name}</ProjectName>
                            <ProjectDetail>{project.info}</ProjectDetail>
                            <Link
                                to={project.link}
                                target="_blank"
                                style={{ color: "white" }}
                            >
                                <IosShareIcon />
                            </Link>
                        </Info>
                    </Project>
                ))}
            </Content>
        </Conatiner>
    );
};

export default Projects;
