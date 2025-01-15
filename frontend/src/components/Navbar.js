import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import '../components/Navbar.css'
import { useAuthenticationContext } from "../hooks/useAuthenticationContext";
const Navbar = function(){
    const {logout} = useLogout();
    const {user} = useAuthenticationContext();
    const handleLogout = () =>{
        logout();
    }
    return(
        <header>
            <div className="NavContainer">
                <Link to='/'>
                    <h1>Meal App</h1>
                </Link>
                {user &&(<>
                <span>{user.email}</span>
                <div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
                </>)}
                {!user && <>
                <nav>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Signup</Link>
                </nav>
                </>
                }   
            </div>
        </header>
    )
}

export default Navbar