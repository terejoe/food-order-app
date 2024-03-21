import {useContext, useEffect , useState} from 'react';
import CartContext from '../../store/cart-context';

import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

export default function HeaderCartButton(props) {
  const [btnIsBumped, setBtnIsBumped] = useState(false)
  const cartCtx = useContext(CartContext)

  const {items} = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnIsBumped ? styles.bump : ""}`;

  useEffect(() => {
    if(items.length === 0){
      return;
    }
    setBtnIsBumped(true);
 
    const timer = setTimeout(() => {
      setBtnIsBumped(false);
    }, 300)

    return () => {
      clearTimeout(timer)
    };

  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}> <CartIcon/> </span>
      <span> Your Cart </span>
      <span className={styles.badge}> {numberOfCartItems} </span>
    </button>
  )
}
