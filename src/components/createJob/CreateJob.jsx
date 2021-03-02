import { usePostJob } from '../hooks/usePostJob';
import { Redirect } from 'react-router-dom';
import { postJob } from '../../service';
import { StyledButton, StyledCreateJob, StyledForm, StyledJobInfo, StyledCompanyInfo, StyledErrorMsg, StyledSuccessMsg } from './StyledCreateJob';

const CreateJob = ({ user, jobs, setJobs }) => {
    const [jobTitle, setJobTitle, jobLocation, setJobLocation, seniority, setSeniority, jobCategory, setJobCategory, jobSnippet, setJobSnippet, jobDescription, setJobDescription, companyName, setCompanyName, companyInfo, setCompanyInfo, location, setLocation, employeesNumber, setEmployeesNumber, phone, setPhone, email, setEmail, url, setUrl, errorMessage, setErrorMessage, successMessage, setSuccessMessage] = usePostJob();

    let categories = Array.from(new Set(jobs.map(job => job.category)));
    let levels = Array.from(new Set(jobs.map(job => job.seniority)));

    const generateId = () => {
        return Math.max(0, ...jobs.map(job => job.id)) + 1;
    };

    const getDate = () => {
        const date = new Date();
        const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
        const month = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(date);
        const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
        return `${day}.${month}.${year}.`
    }

    const isValid = () => {
        if (jobTitle.trim() === '' || jobLocation.trim() === '' || seniority === '' || jobCategory === '' || jobSnippet.trim() === '' || jobDescription.trim() === '' || companyName.trim() === '' || companyInfo.trim() === '' || location.trim() === '' || employeesNumber.trim() === '' || phone.trim() === '' || email.trim() === '' || url.trim() === '') {
            setErrorMessage(<p className="error-msg">All fields must be filled!</p>);
            setTimeout(() => {
                setErrorMessage('');
            }, 2000);
            return false;
        } else {
            setSuccessMessage(<p className="success-msg">Successfully saved!</p>);
            setTimeout(() => {
                setSuccessMessage('');
            }, 5000);
            return true;
        }
    }

    return user ? (
        <StyledCreateJob>
            <StyledForm onSubmit={(e) => {
                e.preventDefault(e);

                if (isValid()) {
                    let newJob = {
                        id: generateId(),
                        title: jobTitle,
                        location: jobLocation,
                        seniority: seniority,
                        category: jobCategory,
                        createdAt: getDate(),
                        snippet: jobSnippet,
                        job_description: jobDescription,
                        company_info: {
                            name: companyName,
                            general_info: companyInfo,
                            location: location,
                            number_of_employees: employeesNumber,
                            contact: [
                                phone, email
                            ],
                            link: url
                        }
                    };

                    postJob(newJob).then(res => {
                        setJobs(prev => [...prev, res.data]);                       
                    });
                }
            }}>

                <StyledJobInfo>
                    <h3><span>Job Info</span></h3>
                    <ul>
                        <li>
                            <label htmlFor="title">Job Title</label>
                            <input type="text" name="title" className="form-control" placeholder="Job Title..." onChange={(e) => setJobTitle(e.target.value)} />
                        </li>
                        <li>
                            <label>Location</label>
                            <input type="text" className="form-control" placeholder="Location..." onChange={(e) => setJobLocation(e.target.value)} />
                        </li>
                        <li>
                            <p>Seniority</p>
                            {levels.map(level => <div className="seniority" key={level}>
                                <input type="radio" name="seniority" id={level} value={level} onChange={(e) => setSeniority(e.target.value)} />
                                <label className="seniority-label" htmlFor={level}>{level}</label>
                            </div>
                            )}
                        </li>
                        <li>
                            <label>Category</label>
                            <select defaultValue={'default'} onChange={(e) => setJobCategory(e.target.value)}>
                                <option value="default" disabled hidden>Choose category</option>
                                {categories.map(category => <option key={category} value={category}>{category}</option>)}
                                <option value="other">Other</option>
                            </select>
                        </li>
                        <li>
                            <label>Short Description</label>
                            <textarea cols="40" rows="5" placeholder="Enter Job Snippet..." onChange={(e) => setJobSnippet(e.target.value)}></textarea>
                        </li>
                        <li>
                            <label>Job Description</label>
                            <textarea cols="50" rows="10" placeholder="Enter Job Description..." onChange={(e) => setJobDescription(e.target.value)}></textarea>
                        </li>
                    </ul>
                </StyledJobInfo>
                <StyledCompanyInfo>
                    <h3><span>Company Info</span></h3>
                    <ul>
                        <li>
                            <label>Company Name</label>
                            <input type="text" placeholder="Company Name..." onChange={(e) => setCompanyName(e.target.value)} />
                        </li>
                        <li>
                            <label>About Company</label>
                            <textarea cols="50" rows="10" placeholder="Enter Company Info..." onChange={(e) => setCompanyInfo(e.target.value)}></textarea>
                        </li>
                        <li>
                            <label>Location</label>
                            <input type="text" placeholder="Location..." onChange={(e) => setLocation(e.target.value)} />
                        </li>
                        <li>
                            <label>Number of employees</label>
                            <input type="number" placeholder="Number of employees..." onChange={(e) => setEmployeesNumber(e.target.value)} />
                        </li>
                        <li>
                            <label>Phone Number</label>
                            <input type="text" placeholder="Phone Number..." onChange={(e) => setPhone(e.target.value)} />
                        </li>
                        <li>
                            <label>Email Address</label>
                            <input type="text" placeholder="Email Address..." onChange={(e) => setEmail(e.target.value)} />
                        </li>
                        <li>
                            <label>Official Site</label>
                            <input type="text" placeholder="Official site..." onChange={(e) => setUrl(e.target.value)} />
                        </li>
                    </ul>
                </StyledCompanyInfo>
                <StyledErrorMsg>
                    {errorMessage}
                </StyledErrorMsg>
                <StyledSuccessMsg>
                    {successMessage}
                </StyledSuccessMsg>
                <StyledButton>
                    <input type="submit" value="Save" />
                </StyledButton>
            </StyledForm>
        </StyledCreateJob>
    )
        :
        <Redirect to='/login' />
}

export default CreateJob
