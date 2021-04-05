import { StyledPagination, StyledButtons } from "./StyledPagination";

const Pagination = ({ current, jobsPerPage, totalJobs, paginate, showPreviousPage, showNextPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <StyledPagination>
            <StyledButtons>
                {current !== pageNumbers[0] ? <button onClick={() => {
                    showPreviousPage()
                }}>Prev</button> : ''}
                {pageNumbers.map(number => <button onClick={() => {
                    paginate(number)
                }}
                    key={number}>{number}</button>)}
                {current !== pageNumbers[pageNumbers.length - 1] ? <button onClick={() => {
                    showNextPage()
                }}>Next</button> : ''}
            </StyledButtons>
        </StyledPagination>
    )
}

export default Pagination
