import { useState, useEffect } from 'react';
import { getQuotes } from '../../service';
import { StyledHome, StyledQuotes, StyledCurrent, StyledPrevious, StyledNext } from "./StyledHome"

const Home = () => {
    const [current, setCurrent] = useState(0);
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        let mounted = true;
        getQuotes().then(res => {
            if (mounted) {
                setQuotes(res.data);
            }
            return function cleanUp(){
                mounted = false
            }
        })
    }, []);

    const previousQuote = () => current === 0 ? setCurrent(quotes.length - 1) : setCurrent(current - 1);
    const nextQuote = () => quotes.length - 1 === current ? setCurrent(0) : setCurrent(current + 1);

    return (
        <StyledHome>
            <h1>Find your dream job</h1>
            <StyledQuotes>
                <StyledPrevious onClick={previousQuote}>
                    <i className="fas fa-chevron-left"></i>
                </StyledPrevious>
                <StyledCurrent>
                    <q>{quotes[current]?.text}</q>
                    <p>- {quotes[current]?.author} -</p>
                </StyledCurrent>
                <StyledNext onClick={nextQuote}>
                    <i className="fas fa-chevron-right"></i>
                </StyledNext>
            </StyledQuotes>
        </StyledHome>
    )
}

export default Home
