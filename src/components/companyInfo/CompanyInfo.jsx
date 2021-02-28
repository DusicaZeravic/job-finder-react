import { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getJobById } from '../../service';
import { StyledCompanyInfo, StyledLeft, StyledRight } from './StyledCompanyInfo';

const CompanyInfo = ({ user }) => {
    const [job, setJob] = useState(null);

    let { id } = useParams();

    useEffect(() => {
        getJobById(id).then(res => {
            setJob(res.data);
        })
    }, []);

    return user ? (
        <StyledCompanyInfo>
            <StyledRight>
                <p>{job?.company_info.general_info}</p>
                <p>Number of employees : <span>{job?.company_info.number_of_employees}</span></p>
            </StyledRight>
            <StyledLeft>
                <h2>{job?.company_info.name}</h2>
                <h3>How can you find us?</h3>
                <div><span><i className="fas fa-map-marker-alt"></i></span><p>{job?.company_info.location}</p></div>
                <ul>
                    <div><li><span><i className="fas fa-phone-alt"></i></span>{job?.company_info.contact[0]}</li></div>
                    <div><li><span><i className="fas fa-envelope"></i></span>{job?.company_info.contact[1]}</li></div>
                </ul>
                {job?.company_info.link ? <a href={job?.company_info.link} target="_blank">See more</a> : ''}
            </StyledLeft>
        </StyledCompanyInfo>
    )
        :
        <Redirect to='/login' />
}

export default CompanyInfo
