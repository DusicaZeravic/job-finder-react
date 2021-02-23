import { Link } from 'react-router-dom';
import { useState } from 'react';
import { StyledHome, StyledQuotes, StyledCurrent, StyledPrevious, StyledNext } from "./StyledHome"

const Home = ({ jobs }) => {
    const [current, setCurrent] = useState(0);

    const previousJob = () => current === 0 ? setCurrent(Math.floor((jobs.length / 2)) - 1) : setCurrent(current - 1);
    const nextJob = () => jobs.length - 1 === current ? setCurrent(0) : setCurrent(current + 1);

    return (
        <StyledHome>
            <h1>Find your dream job</h1>
            <StyledQuotes>
                <StyledPrevious onClick={previousJob}>
                    <i className="fas fa-chevron-left"></i>
                </StyledPrevious>
                <StyledCurrent>
                    <q>{jobs[current]?.title}</q>
                    <p>{jobs[current]?.company_info.name}</p>
                </StyledCurrent>
                <StyledNext onClick={nextJob}>
                    <i className="fas fa-chevron-right"></i>
                </StyledNext>
            </StyledQuotes>
            <Link to='/login'>You want to see more about these jobs? Log in!</Link>
        </StyledHome>
    )
}

export default Home
