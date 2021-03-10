import React, { Component } from 'react';
import Home from './HomeComponent';
import Job from './JobComponent';
import Listjob from './ListjobComponent';
import Jobdetail from './JobdetailComponent';
import Header from './HeaderComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postJob, loginUser, logoutUser, fetchJobs, postJobupdate, fetchJobupdates, fetchRefdatausers, fetchRefdataCustomers, fetchRefdataServices } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
  console.log("In mapStateToProps function");
  console.log(state.refdataServices);
  console.log(state.refdataCustomers);
  console.log(state.refdatausers);
  console.log(state.jobupdates);
  console.log(state.jobs);
  console.log(state.auth);

    return {
      refdataServices: state.refdataServices,
      refdataCustomers: state.refdataCustomers,
      refdatausers: state.refdatausers,
      jobupdates: state.jobupdates,
      jobs: state.jobs,
      auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => (
  {
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  postJob: (job) => dispatch(postJob(job)),
  fetchJobs: () => {dispatch(fetchJobs())},
  resetJobForm: () => { dispatch(actions.reset('job'))},
  postJobupdate: (docrefId, jobId, status, assignto, jobupdate) => dispatch(postJobupdate(docrefId, jobId, status, assignto, jobupdate)),
  fetchJobupdates: () => {dispatch(fetchJobupdates())},
  fetchRefdatausers: () => {dispatch(fetchRefdatausers())},
  fetchRefdataCustomers: () => {dispatch(fetchRefdataCustomers())},
  fetchRefdataServices: () => {dispatch(fetchRefdataServices())}

}
);

class Main extends Component {

  componentDidMount() {
    console.log("In Main Component componentDidMount")
    console.log("In Main Component componentDidMount, calling fetchJobs")
    this.props.fetchJobs();
    console.log("In Main Component componentDidMount, calling fetchJobUpdates")
    this.props.fetchJobupdates();
    console.log("In Main Component componentDidMount, calling fetchRefdatausers")
    this.props.fetchRefdatausers();
    console.log("In Main Component componentDidMount, calling fetchRefdataCustomers")
    this.props.fetchRefdataCustomers();
    console.log("In Main Component componentDidMount, calling fetchRefdataServices")
    this.props.fetchRefdataServices();
    
}

  componentWillUnmount() {
    console.log("In Main Component componentWillUnmount")
    this.props.logoutUser();
  }

  render() {

    const HomePage = () => {
      console.log("In Main Component render HomePage")
      return(
        <Home />
      );
    }

    const JobWithId = ({match}) => {
      console.log("++++++++++In JobwithID match")
      console.log("jobupdate.jobId")
      //console.log(jobupdates.jobId)
      console.log("match.params.jobId")
     // console.log(jobId)
      return(
        <Jobdetail job={this.props.jobs.jobs.filter((job) => job._id === match.params.docrefId)[0]}
          isLoading={this.props.jobs.isLoading}
          errMess={this.props.jobs.errMess}
          jobupdates={this.props.jobupdates.jobupdates.filter((jobupdate) => jobupdate.docrefId === match.params.docrefId)}
          jobupdatesErrMess={this.props.jobupdates.errMess}
          postJobupdate={this.props.postJobupdate}
          refdatausers={this.props.refdatausers} />
      );
    }

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.props.auth.isAuthenticated
          ? <Component {...props} />
          : <Redirect to={{
              pathname: '/home',
              state: { from: props.location }
            }} />
      )} />
    );

    return (
      <div>
        <Header auth={this.props.auth} 
          loginUser={this.props.loginUser} 
          logoutUser={this.props.logoutUser}
          />   
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
             <Route path="/home" component={HomePage} />
             {console.log("In Main After Route")}
              <PrivateRoute exact path="/job" component={() => <Job refdatausers={this.props.refdatausers} refdataCustomers={this.props.refdataCustomers} refdataServices={this.props.refdataServices} resetJobForm={this.props.resetJobForm} postJob={this.props.postJob} /> } />
              {console.log("In Main After Private Route job component")}
              <PrivateRoute exact path="/listjob" component={() => <Listjob jobs={this.props.jobs} />} />
              {console.log("In Main After Private Route listjob component")}
              <PrivateRoute exact path="/listjob/:docrefId" component={JobWithId} />
              {console.log("In Main After Private Route listjob jobid component")}
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
