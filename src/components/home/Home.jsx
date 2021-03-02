import { Link } from 'react-router-dom';
import { useState } from 'react';
import { StyledHome, StyledDiv, StyledCurrent, StyledPrevious, StyledNext } from "./StyledHome"

const Home = ({ jobs, user }) => {
    const [current, setCurrent] = useState(0);

    const previousJob = () => current === 0 ? setCurrent(Math.floor((jobs.length / 2)) - 1) : setCurrent(current - 1);
    const nextJob = () => jobs.length - 1 === current ? setCurrent(0) : setCurrent(current + 1);

    return (
        <StyledHome>
            <marquee direction="left" height="100" width="1000" scrollamount="20" bgcolor="white">Find Your Dream Job</marquee>
            <StyledDiv>
                <StyledPrevious onClick={previousJob}>
                    <i className="fas fa-chevron-left"></i>
                </StyledPrevious>
                <StyledCurrent>
                    <p>&#10032; {jobs[current]?.title} &#10032;</p>
                    <p>{jobs[current]?.company_info.name}</p>
                </StyledCurrent>
                <StyledNext onClick={nextJob}>
                    <i className="fas fa-chevron-right"></i>
                </StyledNext>
            </StyledDiv>
            {user ?
                <Link to='/jobs'>You want to see more about these jobs? Click here!</Link>
                :
                <Link to='/login'>You want to see more about these jobs? Click here!</Link>}
        </StyledHome>
    )
}

export default Home
