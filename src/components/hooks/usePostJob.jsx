import { useState } from 'react';

export const usePostJob = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    const [seniority, setSeniority] = useState('');
    const [jobCategory, setJobCategory] = useState('');
    const [jobSnippet, setJobSnippet] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyInfo, setCompanyInfo] = useState('');
    const [location, setLocation] = useState('');
    const [employeesNumber, setEmployeesNumber] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [url, setUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    return [jobTitle, setJobTitle, jobLocation, setJobLocation, seniority, setSeniority, jobCategory, setJobCategory, jobSnippet, setJobSnippet, jobDescription, setJobDescription, companyName, setCompanyName, companyInfo, setCompanyInfo, location, setLocation, employeesNumber, setEmployeesNumber, phone, setPhone, email, setEmail, url, setUrl, errorMessage, setErrorMessage, successMessage, setSuccessMessage];
}
