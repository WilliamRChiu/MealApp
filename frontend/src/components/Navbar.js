import { Link } from "react-router-dom";

const Navbar = function(){
    return(
        <header>
            <div className="NavContainer">
                <Link to='/'>
                    <h1>Meal App</h1>
                </Link>
                <nav>
                    <Link to='/login'>Login</Link>
                    <Link to='/api/user/signup'>Signup</Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar