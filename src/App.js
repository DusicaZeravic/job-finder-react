import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { getJobs } from './service';
import Navbar from './components/navbar/Navbar';
import JobList from './components/jobList/JobList';
import JobInfo from './components/jobInfo/JobInfo';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/registration/Register';
import CompanyInfo from './components/companyInfo/CompanyInfo';
import GlobalStyle from './components/GlobalStyle';

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
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/jobs/:id/:details">
          <CompanyInfo />
        </Route>
        <Route path="/jobs/:id">
          <JobInfo />
        </Route>
        <Route path="/jobs">
          <JobList jobs={jobs} user={user} />
        </Route>
        <Route path="/">
          <Home jobs={jobs} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
