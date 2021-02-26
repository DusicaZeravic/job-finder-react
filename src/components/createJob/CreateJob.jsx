import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { postJob } from '../../service';
import { StyledButton, StyledCreateJob, StyledForm, StyledJobInfo, StyledCompanyInfo} from './StyledCreateJob';

const CreateJob = ({ user, jobs, setJobs }) => {
    const [jobTitle, setJobTitle] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    const [seniority, setSeniority] = useState('');
    const [jobCategory, setJobCategory] = useState('');
    const [timestamp, setTimestamp] = useState('');
    const [jobSnippet, setJobSnippet] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyInfo, setCompanyInfo] = useState('');
    const [location, setLocation] = useState('');
    const [employeesNumber, setEmployeesNumber] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [url, setUrl] = useState('');

    let categories = Array.from(new Set(jobs.map(job => job.category)));
    let levels = Array.from(new Set(jobs.map(job => job.seniority)));

    const generateId = () => {
        return Math.max(0, ...jobs.map(job => job.id)) + 1;
    }

    return user ? (
        <StyledCreateJob>
            <StyledForm onSubmit={(e) => {
                e.preventDefault(e);
                let newJob = {
                    id: generateId(),
                    title: jobTitle,
                    location: jobLocation,
                    seniority: seniority,
                    category: jobCategory,
                    createdAt: timestamp,
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
                console.log(newJob);

                postJob(newJob).then(() => {
                    setJobs(prev => [...prev, newJob]);
                });
            }}>

                <StyledJobInfo>
                    <h3>Job Info</h3>
                    <div className="inputs">
                        <div>
                            <input type="text" className="form-control" placeholder="Job Title..." onChange={(e) => setJobTitle(e.target.value)} />
                            <input type="text" className="form-control" placeholder="Location..." onChange={(e) => setJobLocation(e.target.value)} />
                        </div>
                        <div>
                            <p>Seniority</p>
                            {levels.map(level => <div className="seniority" key={level}>
                                <input type="radio" name="seniority" value={level} onChange={(e) => setSeniority(e.target.value)} />
                                <label htmlFor={level}>{level}</label>
                            </div>
                            )}
                        </div>
                        <div>
                            <select defaultValue={'default'} onChange={(e) => setJobCategory(e.target.value)}>
                                <option value="default" disabled hidden>Choose category</option>
                                {categories.map(category => <option key={category} value={category}>{category}</option>)}
                                <option value="other">Other</option>
                            </select>
                            <input type="date" name="date" onChange={(e) => setTimestamp(e.target.value)} />
                        </div>
                        <div>
                            <textarea cols="40" rows="5" placeholder="Enter Job Snippet..." onChange={(e) => setJobSnippet(e.target.value)}></textarea>
                        </div>
                        <div>
                            <textarea cols="50" rows="10" placeholder="Enter Job Description..." onChange={(e) => setJobDescription(e.target.value)}></textarea>
                        </div>
                    </div>
                </StyledJobInfo>
                <StyledCompanyInfo>
                    <h3>Company Info</h3>
                    <div className="inputs">
                        <div>
                            <input type="text" placeholder="Company Name..." onChange={(e) => setCompanyName(e.target.value)} />
                        </div>
                        <div>
                            <textarea cols="50" rows="10" placeholder="Enter Company Info" onChange={(e) => setCompanyInfo(e.target.value)}></textarea>
                        </div>
                        <div>
                            <input type="text" placeholder="Location..." onChange={(e) => setLocation(e.target.value)} />
                            <input type="number" placeholder="Number of employees" onChange={(e) => setEmployeesNumber(e.target.value)} />
                        </div>
                        <div>
                            <h4>Contact Info</h4>
                            <input type="text" placeholder="Phone Number..." onChange={(e) => setPhone(e.target.value)} />
                            <input type="text" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                            <div>
                                <input type="text" placeholder="Official site..." onChange={(e) => setUrl(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </StyledCompanyInfo>
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
