import styled from 'styled-components';
import React, { useState } from 'react'
import { publicRequest } from "../requestMethods";
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
        ),
    url(https://img.zcool.cn/community/014pxmhryryt96fyxrizwj3430.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,Q_100) no-repeat center;
    background-size: cover;
    justify-content: center;
    display: flex;
    align-items: center;
`;
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
`;
const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Title = styled.h1`
    font-style: 24px;
    font-weight: 300;
`;
const Agreement = styled.span`
    font-size: 14px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color:white;
    cursor: pointer;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;


const Register = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [Email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()

    const handleClick = async(e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            console.log("error");
        }else{
          try {
            const res = await publicRequest.post("/auth/register", 
                {firstName,lastName,Email,password,userName});
            console.log(res);
            navigate("/")
          } catch (err) {
          }
        }
    };

  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}/>
                <Input placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}/>
                <Input placeholder="Email"  
                    onChange={(e) => setEmail(e.target.value)}/>
                <Input placeholder="UserName"
                    onChange={(e) => setUserName(e.target.value)}/>
                <Input placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}/>
                <Input placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal data
                    in accordince with the <b> PRIVACY POLICY</b>
                </Agreement>
                <Button onClick={handleClick} >CREATE</Button>
            </Form>
        </Wrapper>
      
    </Container>
  )
}

export default Register
