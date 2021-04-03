import { useHistory, NavLink, Link } from 'react-router-dom';
import { StyledNavbar } from './StyledNavbar';

const Navbar = ({ user, setUser }) => {
    const history = useHistory();

    return (
        <StyledNavbar>
            <label htmlFor="hamburger">&#9776;</label>
            <input type="checkbox" id="hamburger" />

            <div className="items">
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
                <NavLink to="/jobs" exact activeClassName="active">Job List</NavLink>
                {
                    user ?
                        <div className='logged-user'>
                            {
                                user.role !== 'admin' ? <span><Link className="username" to={`/user/${user._id}`}>{user.username}</Link></span> : <span>{user.username}</span>
                            }
                            <button onClick={() => {
                                setUser(null);
                                history.push('/');
                            }
                            }>Logout</button>

                        </div> :
                        <>
                            <NavLink className="push-right" to="/login" exact activeClassName="active">Login</NavLink>
                            <NavLink className="push-right" to="/register" exact activeClassName="active">Registration</NavLink>
                        </>
                }
            </div>

        </StyledNavbar>
    )
}

export default Navbar
