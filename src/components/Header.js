import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar  color="light" light expand="md"  className="sticky-top shadow">
                <NavbarBrand href="/">
                    <img src="./tech.png" alt="Tech" height="30" width="40"></img></NavbarBrand>
                FAME TECH SUMMIT<NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="keytopics">KeyTopics</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="Events">Events</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="speakers">Speakers</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="contact">Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
            <img src="https://wallpapercave.com/wp/wp2848515.jpg" ></img>
            <div className="container">
                <p className="lead text-center">Tech Summit provides software engineers, managers and start-ups with the latest trends in the technological world so they can stay ahead of the curve.

The Summit is composed of co-events and workshops including the international software development conferences Java2Days, CodeMonsters and AI & Smart_Tech along with the business forums Technology4Business and BusinessBooster.</p>
            </div>
        </div>
    );
}

export default Header;