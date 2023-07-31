import React, { useState, useEffect }from 'react'
import { db, auth } from '../../firebaseconfig/firebaseConfig'
import { collection, query, where, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';
import styles from './CartCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const CartCard = (props) => {

    const [prodquantity, setProdQuantity] = useState(props.itemdata.quantity);

    let p = props.itemdata.product.price
    let overalltax = 10 / 100;
    let overallcommission = 10 / 100;
    let extraforfun = 10 / 100;

    let mrp = parseInt(p)
    mrp = mrp + overalltax * mrp + overallcommission * mrp + extraforfun * mrp
    const saleprice = (mrp - extraforfun * mrp) * prodquantity


    const increasequantity = async () => {
        setProdQuantity(prodquantity + 1)

        const itemref = doc(db, `cart-${props.userid}`, `${props.itemdata.id}`)
        await updateDoc(itemref, {
            quantity: prodquantity + 1
        }).then(() => { console.log('changed quantity') })
        console.log(itemref)
        // console.log(props.itemdata.id)
    }
    const decreasequantity = async () => {
        if (prodquantity >= 1) {
            setProdQuantity(prodquantity - 1)

            const itemref = doc(db, `cart-${props.userid}`, `${props.itemdata.id}`)
            await updateDoc(itemref, {
                quantity: prodquantity - 1
            }).then(() => { console.log('changed quantity') })
            console.log(itemref)
        }
    }
    const deletcartitem = async () => {
        await deleteDoc(doc(db, `cart-${props.userid}`, `${props.itemdata.id}`)).then(() => { console.log('doc deleted') })
    }




  return (
    <div className={styles.cart__prod__container}>
        <div className={styles.cart__prod__imgtitle}>
                <div className={styles.prod__image}><img src={props.itemdata.product.prodimage} /></div>
                <div className={styles.prod__title}>{props.itemdata.product.producttitle}</div>
            </div>
            <div className={styles.prodquantity__div}>
                <button onClick={increasequantity}>+</button>
                <p>{prodquantity}</p>
                <button onClick={decreasequantity}>-</button>
            </div>
            <div className={styles.prodprice}>₹{saleprice}</div>
            <button className={styles.deletebtn} onClick={deletcartitem}> <FontAwesomeIcon icon={faTrashAlt} /></button>


    </div>
  )
}

export default CartCard