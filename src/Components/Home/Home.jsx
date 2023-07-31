import React ,{useEffect,useState}from 'react'
import Navbar from '../Navbar/Navbar'
import Products from '../Products/Products'
import Banner from '../Carousel/Banner'
import { auth, db } from '../../firebaseconfig/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'
import ProductSlider from '../../Containers/ProductSlider/ProductSlider'
import styles from './Home.module.scss'
import { onAuthStateChanged } from 'firebase/auth'


const Home = () => {
    function GetCurrentUser() {
        const [user, setUser] = useState("");
      
        return user;
      }
      const [loggeduser, setLoggedUser] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userlogged) => {
      if (userlogged) {
        const getUsers = async () => {
          const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
          const data = await getDocs(q);
          setLoggedUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
      } else {
        setLoggedUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  console.log(loggeduser);

      

    // function GetCurrentUser() {
    //     const [user, setUser] = useState("");
    //     const usersCollectionRef = collection(db, "users");
    //     useEffect(() => {
    //         auth.onAuthStateChanged(userlogged => {
    //             if (userlogged) {
    //                 // console.log(userlogged.email)
    //                 const getUsers = async () => {
    //                     const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
    //                     console.log(q);
    //                     const data = await getDocs(q);
    //                     setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //                 };
    //                 getUsers();
    //             }
    //             else {
    //                 setUser(null);
    //             }
    //         })
    //     }, [])
    //     return user
    // }
    // const loggeduser = GetCurrentUser();
    // // if (loggeduser) { console.log(loggeduser[0]) }
    // console.log(loggeduser);

  return (
    <div>
      <Navbar />
      <Banner/>
      {/* <Products /> */}
      <div className={styles.slider__head}><p>Limited Time Deals</p></div>
      <ProductSlider type={'Mobile'} />
      <ProductSlider type ={'Laptop'}/>
      <ProductSlider type={'Camera'} />
      <ProductSlider type ={'TV'}/>
      
       {/* <p>{loggeduser ? loggeduser[0].email : "No data"}</p> */}
    </div>
  )
}

export default Home