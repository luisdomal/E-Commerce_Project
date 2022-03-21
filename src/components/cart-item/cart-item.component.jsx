import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './cart-item.styles.scss';


const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
        <div className='add-remove-cart-item'>
          <span className='arrow' onClick={removeItemHandler}>
            &#10094;
          </span>
          <span className='arrow' onClick={addItemHandler}>
            &#10095;
          </span>
        </div>
      </div>
      <span className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </span>
    </div>
  );
};

export default CartItem;
