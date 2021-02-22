import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getJobById } from '../../service';
import { StyledCompanyInfo, StyledLeftDiv, StyledRightDiv } from './StyledCompanyInfo';

const CompanyInfo = () => {
    const [job, setJob] = useState(null);

    let { id } = useParams();

    useEffect(() => {
        getJobById(id).then(res => {
            setJob(res.data);
        })
    }, []);

    return (
        <StyledCompanyInfo>
            <h1>{job?.company_info.name}</h1>
            <div>
                <StyledLeftDiv>
                    <p>{job?.company_info.general_info}</p>
                    <p>Number of employees : <span>{job?.company_info.number_of_employees}</span></p>
                </StyledLeftDiv>
                <StyledRightDiv>
                    <h3>How can you find us?</h3>
                    <div><span><i className="fas fa-map-marker-alt"></i></span><p>{job?.company_info.location}</p></div>
                    <ul>
                        <div><span><i className="fas fa-phone-alt"></i></span><li>{job?.company_info.contact[0]}</li></div>
                        <div><span><i className="fas fa-envelope"></i></span><li>{job?.company_info.contact[1]}</li></div>
                    </ul>
                    {job?.company_info.link ? <a href={job?.company_info.link} target="_blank">See more</a> : ''}
                </StyledRightDiv>
            </div>
        </StyledCompanyInfo>
    )
}

export default CompanyInfo
