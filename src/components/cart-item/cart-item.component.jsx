import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart, removeItemToCart, clearItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CartItemContainer,
  ItemDetails,
  AddRemoveCartItem,
  CartRemoveButton
} from './cart-item.styles';


const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemToCart(cartItems, cartItem));

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
