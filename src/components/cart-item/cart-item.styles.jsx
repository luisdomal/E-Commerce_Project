import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 25%;
  }
`;

export const ItemDetails = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;

    span {
      font-size: 16px;
    }
`;


export const AddRemoveCartItem = styled.div`
    display: flex;
    flex-direction: row;
    span {
      cursor: pointer;
      padding-right: 10px;
    }
`;

export const CartRemoveButton = styled.span`
    cursor: pointer;
    font-size: 13.5px;
    padding-right: 15px;
`;