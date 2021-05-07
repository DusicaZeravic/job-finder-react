import { StyledPagination, StyledButtons, StyledButton } from "./StyledPagination";

const Pagination = ({ current, jobsPerPage, totalJobs, paginate, showPreviousPage, showNextPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <StyledPagination>
            <StyledButtons>
                {current !== pageNumbers[0] ? <StyledButton onClick={() => {
                    showPreviousPage()
                }}>Prev</StyledButton> : ''}
                {pageNumbers.map(number => <StyledButton onClick={() => {
                    paginate(number)
                }}
                    key={number}>{number}</StyledButton>)}
                {current !== pageNumbers[pageNumbers.length - 1] ? <StyledButton onClick={() => {
                    showNextPage()
                }}>Next</StyledButton> : ''}
            </StyledButtons>
        </StyledPagination>
    )
}

export default Pagination;
