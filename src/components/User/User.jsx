import { StyledUser, StyledUserInfo } from "./StyledUser"

const User = ({ user }) => {
    return (
        <StyledUser>
            <StyledUserInfo>
                <img src="/profile.png" alt="Profile" width="250px" />
                <p>{user.firstName} {user.lastName}</p>
            </StyledUserInfo>
        </StyledUser>
    )
}

export default User
