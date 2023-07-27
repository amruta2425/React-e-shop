import React,{useState,useEffect} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import { auth,db } from '../../firebaseconfig/firebaseConfig'
import { doc, getDoc, collection, query, where, getDocs, addDoc } from "firebase/firestore";
import ProductSlider from '../ProductSlider/ProductSlider';
import styles from './SpecificProductPage.module.scss'

const SpecificProductPage = () => {
    
    //let mrp = parseInt(p.price)
    //let mrp = Math.floor(mrp + overalltax * mrp + overallcommission * mrp + extraforfun * mrp)

    const { id ,type} = useParams();
    //console.log(type);
    const [product, setProduct] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');


    function GetCurrentUser() {
        const [user, setUser] = useState("");
        const usersCollectionRef = collection(db, "users");
        useEffect(() => {
            auth.onAuthStateChanged(userlogged => {
                if (userlogged) {
                    // console.log(userlogged.email)
                    const getUsers = async () => {
                        const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
                        // console.log(q);
                        const data = await getDocs(q);
                        setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                    };
                    getUsers();
                }
                else {
                    setUser(null);
                }
            })
        }, [])
        return user
    }
    const loggeduser = GetCurrentUser();


    
    function GetCurrentProduct() {
        // const productCollectionRef = collection(db, `products-${type.toUpperCase()}`);

        useEffect(() => {
            const getProduct = async () => {

                const docRef = doc(db, `products-${type.toUpperCase()}`, id);//changed type to title
                const docSnap = await getDoc(docRef);
                setProduct(docSnap.data());
            };
            getProduct();
        }, [])
        return product
    }

    GetCurrentProduct();

    let overalltax = 10 / 100;
    let overallcommission = 10 / 100;
    let extraforfun = 10 / 100;


    let mrp = parseInt(product.price)
    mrp = Math.floor(mrp + overalltax * mrp + overallcommission * mrp + extraforfun * mrp)
    const saleprice = Math.floor(mrp - extraforfun * mrp)
    // console.log('hii')

    // console.log(currentprod.price)




    const addtocart = () => {
        if (loggeduser) {
            console.log(loggeduser[0].uid)
            addDoc(collection(db, `cart-${loggeduser[0].uid}`), {
                product, quantity: 1
            }).then(() => {
                setSuccessMsg('Product added to cart');

            }).catch((error) => { setErrorMsg(error.message) });
        }
        else {
            setErrorMsg('You need to login first')
        }

    }


  return (
    <div>
        <Navbar />
        {product ?<div className={styles.myprod__container}>
        <div className={styles.pro__img__cont}>
             <img src={product.prodimage} />
        </div>
        <div className={styles.prod__data}>
            <p className={styles.prod__head}>{product.producttitle}</p>
            
            <div className={styles.specific__price__container}>
                            <p className={styles.mrp}>RRP: <p className={styles.rate}>${mrp}</p></p>
                            <p className={styles.saleprice}>Discount Price: </p>
                            <p className={styles.rate}>${saleprice}</p>
                            <p className={styles.yousave}>You Save: ${mrp - saleprice}</p>
                        </div>
                        <p className={styles.prod__details__head}>Details</p>
                        <p className={styles.prod__description}>{product.description}</p>
                        
                        <div className={styles.buy__cart}>
                                <button className={styles.btn1}>Buy Now</button>
                                <button className={styles.btn2} onClick={addtocart}>Add to Cart</button>
                        </div>
                        
                        {successMsg && <>
                            <div className={styles.success__msg}>{successMsg}</div>
                        </>}
                        {errorMsg && <>
                            <div className={styles.error__msg}>{errorMsg}</div>
                        </>}
            

        </div>

        </div> :<div>Loading...</div>}
        <p className={styles.prod__details__head2}>Similar Items</p>
            <ProductSlider type={type} />
    </div>
  )

  }
export default SpecificProductPage