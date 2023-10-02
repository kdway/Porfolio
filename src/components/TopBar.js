import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {SiScikitlearn} from 'react-icons/si'
import styled from 'styled-components'
import { mq } from '../responsive';

const MenuItemProduct = styled.div`
  color: #008080;
  font-size: 9.5vh;
  &:hover {
    color: #43c2bf;
  }
  @keyframes roll {
    90% {
      transform: scale(1);
    }
    95% {
      transform: scale(1.4);
    }
    100% {
      transform: scale(1);
    }
  }
  animation: roll 5s infinite;
`;


const MenuItem = styled.div`
  color: #008080;
  text-decoration: none;
  font-size: 20px;
  cursor: pointer;
  margin-left: 8px;
  position: relative;
  transition: color 0.2s;
  &:hover {
    color: #666;
  }
  ${mq({ fontSize: '14px', marginLeft: '16px' }, 600)}
`;

const NoSR = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: end;
  justify-content: end;
`;


const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const NavLink = styled.span`
font-size: 2.5rem;
`;

const TopBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" expanded={expanded}>
      <Container>
      <Left>
      <MenuItemProduct to="#">
            <NoSR>Products</NoSR>
            <SiScikitlearn title="Ttitle" style={{ verticalAlign: 'middle' }} />
          </MenuItemProduct>
          <MenuItem> <a style={{color: 'teal', textDecoration:'none', fontSize:'30px'}} href='/'>UPGRADESKILLS</a></MenuItem>
        </Left>
    
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">

 
            <Nav.Link href='/'><span style={{ textDecoration:'none', color:'black',fontSize:'19px'}}>Home</span></Nav.Link>
            <Nav.Link href="#"><span style={{ textDecoration:'none', color:'dimgray',fontSize:'19px'}}>EnQuizzes1</span></Nav.Link>
            <Nav.Link href="/ItQuizs"><span style={{ textDecoration:'none', color:'black',fontSize:'19px'}}>ItQuizzes</span></Nav.Link>
            <Nav.Link href="/Cours"><span style={{ textDecoration:'none', color:'black',fontSize:'19px'}}>Books</span></Nav.Link>
            
            <Nav.Link href="/MyResume">
              <span style={{textDecoration:'none',color:'mediumvioletred',fontSize:'31px', marginBottom:'-20px'}} 
              >MyPortfolio
              </span>
            </Nav.Link>
          </Nav>
          
          <Right>
          <Nav.Link href="/Contact"><span style={{ textDecoration:'none', color:'mediumvioletred',fontSize:'19px', margin:'1.2rem'}}>ContactMe</span></Nav.Link>
               <Nav.Link href="#"><span style={{ textDecoration:'none', color:'dimgray',fontSize:'19px', margin:'1.2rem'}}>Login</span></Nav.Link>
               <Nav.Link href="#"><span style={{ textDecoration:'none', color:'dimgray',fontSize:'19px'}}>Register</span></Nav.Link>
          </Right>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
