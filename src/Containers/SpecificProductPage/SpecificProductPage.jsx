import React,{useState,useEffect} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import { auth,db } from '../../firebaseconfig/firebaseConfig'
import { doc, getDoc, collection, query, where, getDocs, addDoc } from "firebase/firestore";
import ProductSlider from '../ProductSlider/ProductSlider';

const SpecificProductPage = () => {

    const { id ,title} = useParams();
    //console.log(type);
    const [product, setProduct] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    
    function GetCurrentProduct() {
        // const productCollectionRef = collection(db, `products-${type.toUpperCase()}`);

        useEffect(() => {
            const getProduct = async () => {

                const docRef = doc(db, `products-${title.toUpperCase()}`, id);//changed type to title
                const docSnap = await getDoc(docRef);
                setProduct(docSnap.data());
            };
            getProduct();
        }, [])
        return product
    }

    GetCurrentProduct();

  return (
    <div>
        <Navbar />
        <h1>{id}</h1>
        <h1>{title}</h1>
    </div>
  )
}

export default SpecificProductPage