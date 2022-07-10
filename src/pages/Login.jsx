import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { login } from '../redux/apiCalls';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
        ),
    url(https://img.zcool.cn/community/01gk4s62mbwvlvjzr2sewi3433.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,Q_100) no-repeat center;
    background-size: cover;
    justify-content: center;
    display: flex;
    align-items: center;
`;

const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
`;
const Form = styled.div`
    display: flex;
    flex-direction:column ;
`;
const Title = styled.h1`
    font-style: 24px;
    font-weight: 300;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color:white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;
const Link = styled.a`
    font-size: 14px;
    margin: 5px 0px;
    text-decoration: underline;
    cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);
    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch,{userName,password})
    };
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="UserName" 
                    onChange={(e) => setUserName(e.target.value)} />
                <Input placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)}/>
                <Button onClick={handleClick} disabled={isFetching} >LOG IN</Button>
                {error && <Error>Something went wrong...</Error>}
                <Link>FORGET YOUR PASSWORD ?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
      
    </Container>
  )
}

export default Login