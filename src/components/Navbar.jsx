import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { DarkModeOutlined, LightModeOutlined, Menu } from "@mui/icons-material";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import { useTheme } from "../context";
import { Link } from "react-router-dom";

const Logo = styled.div`
    font-weight: 600;
    font-size: 1.5rem;
    color: #754ef9;
`;

const Items = styled.div`
    display: flex;
    align-items: center;
`;

const NavItems = styled.ul`
    display: flex;
    align-items: center;
`;

const NavItem = styled.li`
    padding-right: 2rem;
    font-weight: 500;
    cursor: pointer;
    color: black;
    text-decoration: none;
    list-style: none;

    &:hover {
        font-weight: bold;
        color: #754ef9;
    }
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    padding: 1.2rem 3%;
    display: flex;
    justify-content: space-around;
    position: fixed;
    width: 100%;
    box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.2);
    background: white;
    @media screen and (max-width: 765px) {
        ${Logo} {
            padding-left: 0.2rem;
            flex: 1;
        }
        ${Items} {
            flex: 1;
            justify-content: flex-end;
        }
        ${NavItems} {
            display: none;
        }
        ${Item} {
            justify-content: flex-end;
            padding-right: 2rem;
            display: block;
        }
    }
`;

const Navbar = () => {
    const [activeSection, setActiveSection] = useState(null);
    const sections = useRef([]);
    const { isDarkMode, toggleTheme } = useTheme();
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const { innerWidth } = window;
        return innerWidth > 765;
    }

    const handleScroll = () => {
        const pageYOffset = window.scrollY;
        let newActiveSection = null;

        sections.current.forEach((section) => {
            const sectionOffsetTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (
                pageYOffset >= sectionOffsetTop &&
                pageYOffset < sectionOffsetTop + sectionHeight
            ) {
                newActiveSection = section.id;
            }
        });

        setActiveSection(newActiveSection);
    };

    // const scrollToSection = (section) => {
    //     const offset = section === "home" ? 0 : 30; // Adjust the offset as needed
    //     scroll.scrollTo(section, {
    //         duration: 500,
    //         smooth: "easeInOutQuart",
    //         offset,
    //     });
    // };

    useEffect(() => {
        sections.current = document.querySelectorAll("[data-section]");
        window.addEventListener("scroll", handleScroll);

        Events.scrollEvent.register("begin", () => {});
        Events.scrollEvent.register("end", () => {});
        scrollSpy.update();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
        };
    }, []);

    const activeStyle = {
        fontWeight: "bold",
        color: "#754ef9",
        textDecoration: "underline",
        textUnderlinePosition: "under",
    };

    return (
        <Container>
            <Logo>
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "#764ef9",
                    }}
                >
                    Abhiram.
                </Link>
            </Logo>
            <Items>
                <NavItems>
                    <NavItem>
                        <ScrollLink
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            activeClass="active"
                            style={activeSection === "home" ? activeStyle : {}}
                        >
                            Home
                        </ScrollLink>
                    </NavItem>
                    <NavItem>
                        <ScrollLink
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            activeClass="active"
                            style={activeSection === "about" ? activeStyle : {}}
                        >
                            About
                        </ScrollLink>
                    </NavItem>
                    <NavItem>
                        <ScrollLink
                            to="skills"
                            spy={true}
                            smooth={true}
                            duration={500}
                            activeClass="active"
                            style={
                                activeSection === "skills" ? activeStyle : {}
                            }
                        >
                            Skills
                        </ScrollLink>
                    </NavItem>
                    <NavItem>
                        <ScrollLink
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={500}
                            activeClass="active"
                            style={
                                activeSection === "projects" ? activeStyle : {}
                            }
                        >
                            Projects
                        </ScrollLink>
                    </NavItem>
                    <NavItem>
                        <ScrollLink
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            activeClass="active"
                            style={
                                activeSection === "contact" ? activeStyle : {}
                            }
                        >
                            Contact
                        </ScrollLink>
                    </NavItem>
                </NavItems>
                <Item>
                    {isDarkMode ? (
                        <LightModeOutlined
                            style={{ cursor: "pointer" }}
                            onClick={() => toggleTheme()}
                        />
                    ) : (
                        <DarkModeOutlined
                            style={{ cursor: "pointer" }}
                            onClick={() => toggleTheme()}
                        />
                    )}
                </Item>
                {!windowSize && (
                    <Item>
                        <Menu />
                    </Item>
                )}
            </Items>
        </Container>
    );
};

export default Navbar;
