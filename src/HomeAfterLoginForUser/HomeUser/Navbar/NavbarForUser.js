import "./Navbar.css";
import Delivery from "../Delivery/Delivery";
import { Link, useHistory } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useDispatch } from "react-redux";
import { authStatuesForUser } from "../../../Component/Redux/action";

function Navbar() {
  const dispatch=useDispatch()
  const logOut=()=>{
    signOut(auth).then(() => {
      dispatch(authStatuesForUser(false))
      sessionStorage.removeItem("authUser")
    
    }).catch((error) => {
      // An error happened.
      alert(error)
    });
  }
  return (
      <nav className="d-flex flex-column justify-content-between navbaruser">
        <div>
          <div class="image">
            <img src="https://via.placeholder.com/50/09f/fff.png " />
          </div>
          <h4 className="text-center">سهيله حماده</h4>


          <ul class="ul">
            <li>
              {/* <a to="/HomeUser/Home">
              <i class="fa-solid fa-house icon"></i> <span>الرئيسية</span>
              </Link> */}

              <Link to="/HomeUser/Home">
                    <i class="fa-solid fa-house icon"></i> <span>الرئيسية</span>
              </Link>
            </li>
            <li>
              <Link to="/HomeUser/AddToFav">
              <i class="fa-regular fa-heart icon"></i> <span>المفضلة</span>
              </Link>
            </li>
            <li>
              <Link to="/HomeUser/Cart">
              <i class="fa-solid fa-cart-shopping icon"></i> <span>سلة التسوق</span>
              </Link>
            </li>
            <li>
              <Link to="/HomeUser/ChiefList">
              <i class="fa-solid fa-utensils icon"></i> <span>الطباخين</span>
                </Link>
            </li>

            <li>
            <Link onClick={() =>logOut()}> <i class="fas fa-sign-out icon"></i><span>الخروج</span></Link>

            </li>
            </ul>

        </div>
        <Delivery />
      </nav>
  );
}
export default Navbar;
