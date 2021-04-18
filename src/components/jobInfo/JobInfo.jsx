import { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getJobById } from '../../service';
import { JobTitle, JobDescription, StyledInnerDiv, StyledJobInfo, Experience, Contact } from './StyledJobInfo';

const JobInfo = ({ user }) => {
    const [job, setJob] = useState(null);

    let { id } = useParams();

    useEffect(() => {
        getJobById(id).then(res => {
            setJob(res.data);
        })
    }, []);

    return user ? (
        <>
            <StyledJobInfo>
                <StyledInnerDiv>
                    <JobTitle>{job?.title}</JobTitle>
                    <h3><Link to={`/jobs/${job?._id}/${job?.company_info.name}`}>{job?.company_info.name}</Link>, {job?.location}</h3>
                    <Experience>Level of experience : <span>{job?.seniority.charAt(0).toUpperCase() + String(job?.seniority.slice(1))}</span></Experience>
                    <JobDescription>{job?.job_description}</JobDescription>
                    <Contact>If you are interested in this position you can contact us: <span>{job?.company_info.contact[0]}</span><span>{job?.company_info.contact[1]}</span></Contact>
                </StyledInnerDiv>
            </StyledJobInfo>
        </>
    )
        :
        <Redirect to='/login' />
}

export default JobInfo
