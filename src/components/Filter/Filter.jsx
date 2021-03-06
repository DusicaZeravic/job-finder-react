import { StyledFilter } from "./StyledFilter";

const Filter = ({ jobs, setFilterInput, setLocation, setLevel }) => {
    let locationArr = Array.from(new Set(jobs.map(job => job.location)));
    let levels = Array.from(new Set(jobs.map(job => job.seniority)));

    return (
        <StyledFilter>
            <input type="text" onChange={(e) => setFilterInput(e.target.value)} placeholder="Enter job title or category...." />

            <select defaultValue={'default'} onChange={(e) => setLocation(e.target.value)}>
                <option value="default" disabled hidden>Choose Location</option>
                {locationArr.map(location => <option key={location} value={location}>{location}</option>)}
            </select>

            <select defaultValue={'default'} onChange={(e) => setLevel(e.target.value)}>
                <option value="default" disabled hidden>Choose Level of Experience</option>
                {levels.map(level => <option key={level} value={level}>{level}</option>)}
            </select>
        </StyledFilter>
    )
}

export default Filter
