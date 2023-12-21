import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    padding: 0rem 7% 0rem;
    display: flex;
`;

const ImageContainer = styled.div`
    flex: 1;
`;

const AboutContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 2rem;
    letter-spacing: 0.03rem;
`;

const AboutHeading = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
`;

const AboutContent = styled.p`
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 1rem;
`;

const About = () => {
    return (
        <Container data-section id="about">
            <ImageContainer>image</ImageContainer>
            <AboutContainer>
                <AboutHeading>
                    About <a style={{ color: "#764ef9" }}>Me</a>
                </AboutHeading>
                <AboutContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    totam nulla incidunt, tenetur, quod ea error laudantium
                    provident neque veritatis adipisci, reiciendis voluptates?
                    Quia perferendis vero tenetur optio, molestiae pariatur!
                </AboutContent>
                <AboutContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    totam nulla incidunt, tenetur, quod ea error laudantium
                    provident neque veritatis adipisci, reiciendis voluptates?
                    Quia perferendis vero tenetur optio, molestiae pariatur!
                </AboutContent>
            </AboutContainer>
        </Container>
    );
};

export default About;
