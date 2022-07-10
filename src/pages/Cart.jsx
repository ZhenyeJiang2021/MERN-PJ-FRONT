import { Add, Remove } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import StripeCheckout from "react-stripe-checkout"
import { userRequest} from '../requestMethods';
import { useNavigate } from 'react-router-dom'

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 20px;
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border:${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color:${props=>props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
    cursor: pointer;
    text-decoration: underline;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Info = styled.div`
    flex: 3;
`;
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
`;

const Image = styled.img`
    width: 200px;
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span`
    
`;
const ProductId = styled.span`
    
`;
const ProductColor= styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`;
const ProductSize = styled.span`
    
`;
const PriceDetail = styled.div`
    flex: 1;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;
const SummaryTitle = styled.h1`
    font-weight: 200;
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;
const SummaryItemPrice = styled.span`
`;
const SummaryItemText = styled.span`
`;
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

const Cart = () => {
    const cart = useSelector(state=>state.cart)
    const [stripeToken,setStripeToken] = useState(null)
    const history = useNavigate()
    const onToken = (token)=>{
        setStripeToken(token)
    }
    
    useEffect(()=>{
        const makeRequest = async ()=>{
            try{
                const res = await userRequest.post("/checkout/payment",{
                    tokenId: stripeToken.id,
                    amount: 500,
                })
                console.log(res)
                history("/success",{data:res.data,cart:cart})
            } catch{}
        }
        stripeToken && makeRequest();
    },[stripeToken,cart,history])
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR CART</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Wish List(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHEEKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    {cart.products.map(product=>(
                        <Product>
                        <ProductDetail>
                            <Image src={product.img}/>
                            <Details>
                                <ProductName><b>Product:</b> {product.title} </ProductName>
                                <ProductId><b>Id:</b> {product._id} </ProductId>
                                <ProductColor color={product.color}/>
                                <ProductSize><b>Size:</b> {product.size} </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>{product.quantity}</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ {product.price*product.quantity}</ProductPrice>
                        </PriceDetail>
                    </Product>
                    ))}
                    <Hr/>
                    
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <StripeCheckout
                        name="WOMA."
                        billingAddress
                        shippingAddress
                        description={`Your total is $${cart.total}`}
                        amount={cart.total * 100}
                        token={onToken}
                        stripeKey= "pk_test_51LGqxjDsNu0Ul6cn2pinUs2tz6XcDxCEOo908CFa9sSalEsEWZOCahIbFP4KDsk1Pjg15MhCRkR61Aa4QU1XNKuo00U5GPoDKJ"
                    >
                        <Button>CHEEK OUT NOW</Button>
                    </StripeCheckout>
                    
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
