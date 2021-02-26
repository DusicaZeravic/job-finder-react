import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getJobs } from './service';
import Navbar from './components/navbar/Navbar';
import JobList from './components/jobList/JobList';
import JobInfo from './components/jobInfo/JobInfo';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/registration/register/Register';
import Footer from './components/Footer/Footer';
import CompanyInfo from './components/companyInfo/CompanyInfo';
import GlobalStyle from './components/GlobalStyle';
import CreateJob from './components/createJob/CreateJob';
import PublicRoute from './components/Route/PublicRoute';
import PrivateRoute from './components/Route/PrivateRoute';

const App = () => {
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then(res => {
      console.log(res.data);
      setJobs(res.data);
    })
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Navbar user={user} setUser={setUser} />
      <Switch>
        <PublicRoute exact path='/login' Component={() => <Login setUser={setUser} />} />
        <PublicRoute exacte path='/register' Component={Register} />
        <PrivateRoute exact path='/jobs/:id/:details' user={user} Component={() => <CompanyInfo user={user} />} />
        <PrivateRoute exact path='/jobs/:id' user={user} Component={() => <JobInfo user={user} />} />
        <PrivateRoute exact path='/jobs' user={user} Component={() => <JobList jobs={jobs} user={user} />} />
        <PrivateRoute exact path='/createjob' user={user} Component={() => <CreateJob jobs={jobs} setJobs={setJobs} user={user} />} />
        <PublicRoute exact path='/' Component={() => <Home jobs={jobs} />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
