import { Link, useHistory } from 'react-router-dom';
import { StyledNavbar, LeftStyledNavbar, RightStyledNavbar } from './StyledNavbar';

const Navbar = ({ user, setUser }) => {
    const history = useHistory();

    return (
        <StyledNavbar>
            <LeftStyledNavbar>
                <Link to="/">Home</Link>
                <Link to="/jobs">Job List</Link>
            </LeftStyledNavbar>

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
                    <><RightStyledNavbar>
                        <Link className="push-right" to="/login">Login</Link>
                        <Link className="push-right" to="/register">Registration</Link>
                    </RightStyledNavbar>
                    </>
            }
        </StyledNavbar>
    )
}

export default Navbar
