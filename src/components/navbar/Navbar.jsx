import { useHistory, NavLink, Link } from 'react-router-dom';
import { LoggedUser, LoggedUserDiv, LogoutButton, StyledNavbar } from './StyledNavbar';

const Navbar = ({ user, setUser }) => {
    const history = useHistory();

    return (
        <StyledNavbar>
            <label htmlFor="hamburger">&#9776;</label>
            <input type="checkbox" id="hamburger" />

            <LoggedUserDiv className="items">
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
                <NavLink to="/jobs" exact activeClassName="active">Job List</NavLink>
                {
                    user ?
                        <LoggedUser>
                            {
                                user.role !== 'admin' ? <span><Link className="username" to={`/user/${user._id}`}>{user.username}</Link></span> : <span>{user.username}</span>
                            }
                            <LogoutButton onClick={() => {
                                setUser(null);
                                history.push('/');
                            }
                            }>Logout</LogoutButton>

                        </LoggedUser> :
                        <>
                            <NavLink className="push-right" to="/login" exact activeClassName="active">Login</NavLink>
                            <NavLink className="push-right" to="/register" exact activeClassName="active">Registration</NavLink>
                        </>
                }
            </LoggedUserDiv>
        </StyledNavbar>
    )
}

export default Navbar
