import React,{useState, useEffect} from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import ProductContainer from '../ProductContainer/ProductContainer'
import { collection ,getDocs} from 'firebase/firestore'
import { db } from '../../firebaseconfig/firebaseConfig'
import styles from './AllProducts.module.scss'

const Allproductpage = (props) => {
    console.log(props.type);

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = () => {

            const productsArray = [];
            const path = `products-${props.type.toUpperCase()}`
            console.log(path);

            getDocs(collection(db, path)).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                 productsArray.push({ ...doc.data(), id: doc.id })
                 console.log(doc.id, " => ", doc.data());

                });
                setProducts(productsArray)
                // console.log('done')
            }).catch((error)=>{
                console.log(error.message);
            })
        }

        getProducts();
    }, [])


    return (
        <div className={styles.allproductpage}>
            <Navbar />
            <div className={styles.heading}>
                <p>Top Results For {props.type}</p>
            </div>

            <div className={styles.allproductcontainer}>
                {products.map((product) => (
                    <ProductContainer
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    )
}

export default Allproductpage