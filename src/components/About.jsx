import React from "react";
import styled from "styled-components";
import { useTheme } from "../context";
import { scroller } from "react-scroll";

const Container = styled.div`
    padding: 6rem 7% 7rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: ${(props) =>
        props.isdarkmode ? "#0b061f" : "rgb(250, 250, 250);"};
    color: ${(props) => props.isdarkmode && "white"};
    @media screen and (max-width: 450px) {
        font-size: 0.9rem;
        padding-bottom: 3rem;
    }
`;

const AboutHeading = styled.h1`
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

const AboutDescription = styled.p`
    text-align: center;
`;

const InfoContainers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8rem;
    @media screen and (max-width: 765px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        grid-gap: 0;
    }
`;

const AboutContainer = styled.div`
    flex: 1;
    margin-top: 3rem;
`;

const AboutHead = styled.h3`
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 2rem;
`;

const AboutContent = styled.p`
    font-size: 1rem;
    margin-bottom: 1rem;
    @media screen and (max-width: 450px) {
        font-size: 0.85rem;
    }
`;

const SkillsConatiner = styled.div`
    flex: 1;
    margin-top: 3rem;
`;

const Button = styled.button`
    padding: 0.85rem 2rem;
    margin-top: 1.5rem;
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

const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Skill = styled.div`
    padding: 0.5rem 1rem;
    margin-bottom: 1.2rem;
    margin-right: 1.2rem;
    font-size: 0.95rem;
    background: rgba(153, 153, 153, 0.2);
    border-radius: 5px;
    font-weight: 600;
    color: ${(props) => (props.isdarkmode ? "white" : "#666")};
    @media screen and (max-width: 450px) {
        font-size: 0.85rem;
    }
`;

const allSkills = [
    "C",
    "C++",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "NodeJS",
    "ExpressJS",
    "React",
    "Mongodb",
    "SQL",
];

const About = () => {
    const { isDarkMode } = useTheme();

    const handleClick = () => {
        scroller.scrollTo("contact", {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    return (
        <Container data-section id="about" isdarkmode={isDarkMode}>
            <AboutHeading>ABOUT ME</AboutHeading>
            <AboutDescription>
                Here you will find more information about me, what I do, and my
                current skills mostly in terms of programming and technology
            </AboutDescription>
            <InfoContainers>
                <AboutContainer>
                    <AboutHead>Get to know me!</AboutHead>
                    <AboutContent>
                        Dynamic and motivated <b>Web Developer</b> pursuing a
                        BTech in CSE from SRMIST. Skilled in web development
                        technologies both frontend and backend.
                    </AboutContent>
                    <AboutContent>
                        Proficient in problem-solving techniques, consistently
                        applying analytical skills to tackle complex challenges.
                        Passionate about creating user-friendly web applications
                        and leveraging technology to solve real-world problems.
                    </AboutContent>
                    <AboutContent>
                        I'm open to <b>Job</b> opportunities where I can
                        contribute, learn and grow. If you have a good
                        opportunity that matches my skills and experience then
                        don't hesitate to <b>contact</b> me.
                    </AboutContent>
                    <Button onClick={handleClick}>CONTACT</Button>
                </AboutContainer>
                <SkillsConatiner>
                    <AboutHead>My Skills</AboutHead>
                    <Skills>
                        {allSkills.map((skill) => (
                            <Skill isdarkmode={isDarkMode}>{skill}</Skill>
                        ))}
                    </Skills>
                </SkillsConatiner>
            </InfoContainers>
        </Container>
    );
};

export default About;
