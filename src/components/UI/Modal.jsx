import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css'

export default function Modal(props) {
  const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onCloseCart}/>
  }


  const ModalOverlay= (props) => {
    return (
      <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
      </div>
    )
  }

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onCloseCart={props.onCloseCart}/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlay-root'))}

    </>
  )
}
