import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductContainer.module.scss'

const ProductContainer = (product) => {
    let p = product.product
    let overalltax = 10 / 100;
    let overallcommission = 10 / 100;
    let extraforfun = 10 / 100;

    let mrp = parseInt(p.price)
    mrp = mrp + overalltax * mrp + overallcommission * mrp + extraforfun * mrp
    const saleprice = mrp - extraforfun * mrp


    return (
        <div className={styles.product__container}>
            <img src={p.prodimage}></img>
            <div className={styles.product__details}>
                <a href={`/product/${p.producttype}/${p.id}`}>
                    <button className={styles.producttitle}>{p.producttitle}</button>
                </a>
                {/* <Link to = {`/product/${p}/${p.id}/${p.producttitle}`}>
                    <p className={styles.producttitle}>{p.producttitle}</p>
                </Link> */}

                <div className={styles.price__container}>
                    <p className={styles.mrp}>MRP:</p> <p className={styles.rate}>₹{mrp}</p>
                    <p className={styles.saleprice}>Discount Price: <p className={styles.rate}>₹{saleprice}</p></p>
                    <p className={styles.yousave}>You Save: ₹{mrp - saleprice}</p>
                </div>
                <a href={`/product/${p.producttype}/${p.id}`}><button className={styles.showmore__btn}>More Details &gt;</button></a>
               

            </div>
        </div >
    )
}

export default ProductContainer
