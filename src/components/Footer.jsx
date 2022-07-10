import { Facebook, Instagram, Mail, Phone, Room, Twitter } from '@material-ui/icons';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Left = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  flex:1;
`;
const Desc = styled.p`
  flex:1;
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius:50%;
  color:white;
  background-color: #${props=>props.color};
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex:1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width:50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex:1;
  padding: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Payment = styled.img`
  margin-right: 5px;
`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>WOMA.</Logo>
        <Desc>Long may the sunshine. There are many variations 
          of passages of Lorem ipsum available, bit the majority
          have suffered alteration in sone fomr, by injected humour, 
          or randomised words which don't look even slightly believable.</Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook/>
          </SocialIcon >
          <SocialIcon color="E4405F">
            <Instagram/>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man</ListItem>
          <ListItem>Woman</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wish List</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/>
          10525 Dixie Path, South Lake Union 98121
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/>
          +1 205 874 6532
        </ContactItem>
        <ContactItem>
          <Mail style={{marginRight:"10px"}}/>
          contact@peta.com
        </ContactItem>
        <Payment src="https://store.usgs.gov/sites/all/themes/bootstrap_usgs_store/assets/images/discover.png"/>
        <Payment src="https://store.usgs.gov/sites/all/themes/bootstrap_usgs_store/assets/images/mc.png"/>
        <Payment src="https://store.usgs.gov/sites/all/themes/bootstrap_usgs_store/assets/images/visa.png"/>
        <Payment src="https://store.usgs.gov/sites/all/themes/bootstrap_usgs_store/assets/images/amex.png"/>
      </Right>
    </Container>
  )
}

export default Footer
