import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cart.module.css';

const Cart = ({ cartitems }) => (
  <div className={styles.shpoingCart}>
    <div className={styles.title}>Shoping Bag</div>
    {cartitems.map(item => (
      <div key={item.id} className={styles.item}>
        <div className={styles.buttons}>
          <span className={styles.deleteBtn} />
          <span className={styles.likeBtn} />
        </div>
        <div className={styles.image}>
          <img src={item.img} alt="" />
        </div>
        <div className={styles.description}>
          <span>{item.name}</span>
          <span>{item.model}</span>
          <span>{item.color}</span>
        </div>
        <div className={styles.quantity}>
          <button className={styles.plusBtn} type="button" name="button">
            <img src="plus.svg" alt="" />
          </button>
          <input type="text" name="name" value={item.quantity} />
          <button className={styles.minusBtn} type="button" name="button">
            <img src="minus.svg" alt="" />
          </button>
        </div>
        <div className={styles.totalPrice}>${item.price}</div>
      </div>
    ))}
    <div className={styles.totalPrice}>
      {cartitems.reduce((acc, el) => acc + el.price, 0)}
    </div>
  </div>
);

Cart.propTypes = {
  cartitems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Cart;
