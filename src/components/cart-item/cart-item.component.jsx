import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {
  CartItemContainer,
  ItemDetails,
  AddRemoveCartItem,
  CartRemoveButton
} from './cart-item.styles';


const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
        <AddRemoveCartItem>
          <span onClick={removeItemHandler}>&#10094;</span>
          <span onClick={addItemHandler}>&#10095;</span>
        </AddRemoveCartItem>
      </ItemDetails>
      <CartRemoveButton onClick={clearItemHandler}>&#10005;</CartRemoveButton>
    </CartItemContainer>
  );
};

export default CartItem;
