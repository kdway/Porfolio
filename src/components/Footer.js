import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import {RxLinkedinLogo} from 'react-icons/rx'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mq } from '../responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${mq({ flexDirection: 'row', padding: '16px' }, 600)};
  box-shadow: 5px 5px lightgrey;
  margin-top: 15rem;
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap
  padding: 10px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 16px 0;
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 8px;
  svg {
    font-size: 24px;
    cursor: pointer;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.6;
    }
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 16px;
  display: none;
  ${mq({ display: 'unset' }, 600)}
`;

const Title = styled.h3`
  margin-bottom: 16px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled(Link)`
  width: 50%;
  margin-bottom: 8px;
  transition: color 0.2s;
  &:hover {
    color: #666;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 16px;
  background: #fff8f8;
  ${mq({ background: 'transparent' }, 600)};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  svg {
    margin-right: 8px;
  }
`;

const Footer = () => {


  return (
    <Container>
      <Left>
        <Logo>Upgrade Skills</Logo>
        <SocialContainer>
        <a style={{color:'black'}}href='https://www.linkedin.com/in/kais-dakhli-155246132'><RxLinkedinLogo /></a>
          <FaFacebook />
          <FaInstagram />
          <FaPinterest />
        </SocialContainer>
     
      </Left>
     
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem to="/">Home</ListItem>
      
        
            <>
              <ListItem to="/login">Login</ListItem>
              <ListItem to="/register">Register</ListItem>
            </>
          
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <FiMapPin />
          Tunis,Tunisia
        </ContactItem>
        <ContactItem>
          <FiPhone />
          +00216 52168516
        </ContactItem>
        <ContactItem>
          <FiMail />
          kaisdakhli@yahoo.fr
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
