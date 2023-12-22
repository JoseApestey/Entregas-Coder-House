import styled from 'styled-components';
import ItemCount from '../ItemCount/ItemCount'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

  const [quantityAdded, setQuantityAdded] = useState(0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      id, name, price
    }

    addItem(item, quantity)
  }


  return (
    <ListGroupDetail>
      <CardItemDetail>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet" />
        </Helmet>
        <HeaderDetail>
          <ItemHeaderDetail>{name}</ItemHeaderDetail>
        </HeaderDetail>
        <picture>
          <ItemImgDetail src={img} alt={name} />
        </picture>
        <section>
          <InfoDetail>Categoria: {category}</InfoDetail>
          <InfoDetail>Descripcion: {description}</InfoDetail>
          <InfoDetail>Precio: ${price}</InfoDetail>
        </section>
        <ItemFooterDetail>
          {
            quantityAdded > 0 ? (
              <Link to='/cart'>Terminar Compra</Link>
            ) : (
              <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
            )
          }
        </ItemFooterDetail>
      </CardItemDetail>
    </ListGroupDetail>
  );
};

export default ItemDetail;

const CardItemDetail = styled.article`
  background-color: rgba(230, 33, 108, 0.459);
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 5px;
  margin: 55px auto;
  width: 250px;
  height: 500px;
  max-height: 430px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const HeaderDetail = styled.header`
  text-align: center;
  margin: 5px 0;
  border-bottom: 1px solid #ddd;
`;

const ItemHeaderDetail = styled.h2`
  font-size: 1.1em;
`;

const ItemImgDetail = styled.img`
  max-width: 100%;
  max-height: 175px;
  border-radius: 5%;
`;

const InfoDetail = styled.p`
  font-family: 'Comfortaa', sans-serif;
  background-color: rgba(66, 0, 46, 0.63);
  color: #fff;
  margin: 0;
  font-size: 13px;
  padding: 10px;
  border: 1px solid #4d0436;
  border-radius: 5px;
  text-align: center;
  max-width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ItemFooterDetail = styled.footer`
  text-align: center;
  margin-top: 6px;
`;

// Estilos para pantallas pequeñas
const ListGroupDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;



