import { Link } from 'react-router-dom'

import styled from 'styled-components';

const Item = ({ id, name, img, price, stock }) => {
  return (
    <ListGroup>
      <CardItem className="CardItem">
        <Header className="Header">
          <ItemHeader className="ItemHeader">{name}</ItemHeader>
        </Header>
        <picture>
          <ItemImg src={img} alt={name} className="ItemImg" />
        </picture>
        <section>
          <Info className="Info">Precio: ${price}</Info>
          <Info className="Info">Stock: {stock}</Info>
        </section>
        <ItemFooter className="ItemFooter">
          <OptionItem to={`/item/${id}`} className="OptionItem">
            Ver detalle
          </OptionItem>
        </ItemFooter>
      </CardItem>
    </ListGroup>
  );
};

export default Item;

const CardItem = styled.article`
  background-color: rgb(0, 0, 0);
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 5px; /* Reduzco el padding para hacerlo más compacto */
  margin: 5px; /* Reduzco el margen entre elementos */
  width: 250px; /* Ajusto el ancho */
  height: 500px;
  max-height: 430px; /* Ajusto la altura máxima */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
    
  }
`;

const Header = styled.header`
  color: #fff;
  text-align: center;
  margin: 10px 0;
`;

const ItemHeader = styled.h2`
  font-size: 1.1em;
`;

const ItemImg = styled.img`
  max-width: 100%;
  max-height: 275px; /* Ajusto el tamaño de la imagen */
`;

const Info = styled.p`
  color: #fff;
  margin: 0;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const ItemFooter = styled.footer`
  text-align: center;
  margin-top: 12px;
  
`;

const OptionItem = styled(Link)`
  background-color: #007acc;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  margin-top:8px;

  &:hover {
    background-color: #005faa;
  }
`;

// Agrega estilos para pantallas pequeñas
const ListGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;