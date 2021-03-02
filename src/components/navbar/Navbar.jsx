import { Link, useHistory } from 'react-router-dom';
import { StyledNavbar } from './StyledNavbar';

const Navbar = ({ user, setUser }) => {
    const history = useHistory();

    return (
        <StyledNavbar>
            <label htmlFor="hamburger">&#9776;</label>
            <input type="checkbox" id="hamburger" />
            <div className="items">

                <Link to="/">Home</Link>
                <Link to="/jobs">Job List</Link>
                {
                    user ?
                        <div className='logged-user'>
                            <span>{user.username}</span>
                            <button onClick={() => {
                                setUser(null);
                                history.push('/');
                            }
                            }>Logout</button>

                        </div> :
                        <>  
                            <Link className="push-right" to="/login">Login</Link>
                            <Link className="push-right" to="/register">Registration</Link>
                        </>
                }
            </div>

        </StyledNavbar>
    )
}

export default Navbar
