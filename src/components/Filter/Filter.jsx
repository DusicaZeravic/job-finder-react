import { StyledFilter } from "./StyledFilter";

const Filter = ({ jobs, setCategory, setLocation, setLevel }) => {

    let categories = Array.from(new Set(jobs.map(job => job.category)));
    let locationArr = Array.from(new Set(jobs.map(job => job.location)));
    let levels = Array.from(new Set(jobs.map(job => job.level)));

    return (
        <StyledFilter>
            <select defaultValue={'default'} onChange={(e) => setCategory(e.target.value)}>
                <option value="default" disabled hidden>Choose Category</option>
                {categories.map(category => <option key={category} value={category}>{category}</option>)}
            </select>

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