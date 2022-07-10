import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Info = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  display: flex;align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5 ease;
  cursor: pointer;
  z-index: 3;
`;

const Container = styled.div`
  margin: 5px;
  flex: 1;
  min-width: 280px;
  height:350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f7f98e;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 80%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover{
    background-color:#e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
              <Link to={`/product/${item._id}`}>
                <SearchOutlined/>
              </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product
