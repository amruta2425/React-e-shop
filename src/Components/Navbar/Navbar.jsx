import React,{useState ,useEffect}from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import cartlogo from '../../assets/cartlogo.png'
import profilelogo from '../../assets/profilelogo.png'
import { auth, db } from '../../firebaseconfig/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'
import logoDark from '../../assets/logoDark.png';
 

const Navbar = () => {
    function GetCurrentUser() {
        const [user, setUser] = useState("");
        const usersCollectionRef = collection(db, "users");
        useEffect(() => {
            auth.onAuthStateChanged(userlogged => {
                if (userlogged) {
                    // console.log(userlogged.email)
                    const getUsers = async () => {
                        const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
                        console.log(q);
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
    // if (loggeduser) { console.log(loggeduser[0]) }
    //console.log(loggeduser);

    
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.signOut().then(() => {
            navigate("/login")
        })
    }

    const [cartdata, setcartdata] = useState([]);
    if (loggeduser) {
        const getcartdata = async () => {
            const cartArray = [];
            const path = `cart-${loggeduser[0].uid}`
            // console.log(path)
            getDocs(collection(db, path)).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // console.log(doc.id, " => ", doc.data());
                    cartArray.push({ ...doc.data(), id: doc.id })
                });
                setcartdata(cartArray)
                // console.log('done')
            }).catch('Error error error')

        }
        getcartdata()
    }



    
  return (
    <div>
    <div className={styles.navbar}>
        <div className={styles.LeftContainer}>
            <img src={logoDark} />
        </div>
        <div className={styles.RightsContainer}>
        {!loggeduser && <nav>
            <Link to='/' ><button>Home</button></Link>
            <Link to='/signup'><button>Register</button></Link>
            <Link to='/login'><button>Login</button></ Link >


            <div className={styles.cart__btn}>

               <img src={cartlogo} alt="no img" />
                <span className={styles.cart__icon__css}>0</span>
            </div>

            <Link to="/userprofile">
            <img src={profilelogo} className={styles.profile__icon}/>
            </Link>          


        </nav>}

        {loggeduser && <nav>
            <Link to='/' ><button>Home</button></Link>
            <Link to='/sellproduct'><button>Sell</button></Link>

            <div className={styles.cart__btn}>
            <Link to='/cartdata'><img src={cartlogo} alt="no img" /></Link>
                <button className={styles.cart__icon__css}>{cartdata.length}</button>
            </div>

            <Link to="/userprofile">
                <img src={profilelogo} className={styles.profile__icon} />
            </Link>
            <button className={styles.logout__btn} onClick={handleLogout}>
                Logout</button>
            
            
            </nav>}

        </div>

    </div>
    <div>
    <div className={styles.product__types}>
                {/* <a href="/product-type/mobile"><button>Mobiles</button></a>
                <a href="/product-type/laptop"><button>Laptops</button></a> */}
                <a href="/product-type/camera"><button>Cameras</button></a>
                <a href="/product-type/TV"><button>TV</button></a>
            </div>
    </div>
    </div>


  )
}

export default Navbar