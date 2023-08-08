import React from 'react'
import styles from'./SliderProductcard.module.scss'


const Sliderproductcard = (product) => {
    // console.log(p)
    let p = product.product
    let overalltax = 10 / 100;
    let overallcommission = 10 / 100;
    let extraforfun = 10 / 100;

    let mrp = parseInt(p.price)
    mrp = Math.floor(mrp + overalltax * mrp + overallcommission * mrp + extraforfun * mrp)
    const saleprice = Math.floor(mrp - extraforfun * mrp)
    


    return (
        <div>
            <div className={styles.mini__product__container}>
                <div className={styles.mini__img__container}> <img src={p.prodimage}></img></div>
                <div className={styles.mini__product__details}>
                    <p className={styles.mini__producttitle}>{p.producttitle}</p>
                    <div className={styles.mini__price__container}>
                        <p className={styles.mrp}>RRP: </p><p className={styles.rate}>${mrp}</p>
                        <p className={styles.saleprice}>Discount Price:</p> <p className={styles.rate}>${saleprice}</p>
                        <p className={styles.yousave}>You Save: ${mrp - saleprice}</p>
                    </div>
                    <a href={`/product/${p.producttype}/${p.id}`}><button className={styles.showmore__btn}>More Details &gt;</button></a>

                    {/* <a href ={`/product/${p.id}/${p.producttitle}`}>
                        <button className={styles.showmore__btn}>Show More &gt;</button></a> */}
                </div>
            </div >
        </div>
    )
}

export default Sliderproductcard