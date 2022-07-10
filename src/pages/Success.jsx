import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import { useNavigate } from 'react-router-dom'

const Success = () => {
  const location = useLocation();
  const data = location.data;
  const cart = location.cart;
  const currentUser = useSelector((state) => state.user);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    console.log(data)
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/order", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        console.log(res)
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  const handleClick=()=>{
    navigate("/")
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button style={{ padding: 10, marginTop: 20 }} onClick={handleClick}>Go to Homepage</button>
    </div>
  );
};

export default Success;
