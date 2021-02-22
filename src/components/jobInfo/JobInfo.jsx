import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getJobById } from '../../service';
import { StyledInnerDiv, StyledJobInfo } from './StyledJobInfo';

const JobInfo = ({ jobs }) => {
    const [job, setJob] = useState(null);

    let { id } = useParams();

    useEffect(() => {
        getJobById(id).then(res => {
            setJob(res.data);
        })
    }, []);

    return (
        <StyledJobInfo>
            <StyledInnerDiv>
                <h1>{job?.title}</h1>
                <h3>{job?.company_info.name}, {job?.location}</h3>
                <h4>Level of experience : <span>{job?.level.charAt(0).toUpperCase() + job?.level.slice(1)}</span></h4>
                <p>{job?.job_description}</p>
                <p>If you are interested in this position you can contact us: <span>{job?.company_info.contact[0]}</span><span>{job?.company_info.contact[1]}</span></p>
            </StyledInnerDiv>
        </StyledJobInfo>
    )
}

export default JobInfo
