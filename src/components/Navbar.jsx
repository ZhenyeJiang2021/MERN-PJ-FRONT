import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from "styled-components";
import { useSelector} from "react-redux"
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    //seperate item evenly in one line with dispaly flex
    justify-content: space-between;
    align-items: center;

`;

const Left = styled.div`
    flex: 1px;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 18px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`

const Logo = styled.h1`
    font-weight: bold;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 18px;
    cursor: pointer;
    margin-left: 25px;
    text-decoration: none;
`;
const Welcome = styled.span`
    font-size: 20px;
    font-weight: 20px;
`;

function Navbar(props) {
    const cart = useSelector(state=>state.cart)
    const quantity = cart.quantity
    const user = useSelector((state) => state.user.currentUser);

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{color:"gray", fontSize: 16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        WOMA.
                    </Logo>
                </Center>
                <Right>
                    {user !== null && <Welcome>User: {user.userName} </Welcome>}
                    <Link to="/register" style={{ textDecoration:'none',color:'black'}}>
                    {user === null && <MenuItem>Register</MenuItem>}
                    </Link>
                    <Link to="/login" style={{ textDecoration:'none',color:'black'}}>
                    {user === null && <MenuItem>Sign In</MenuItem>}
                    </Link>
                    <Link to="/cart" style={{ textDecoration:'none',color:'black'}}>
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar;