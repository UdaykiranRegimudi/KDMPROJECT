import React from 'react';
import { Card, CardBody, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

   /* function RenderJob({ job, onClick }) {
        return(
            <Card>
                <Link to={`/listjob/${job._id}`} >
                <CardBody className="jobcard justify-content-left">
                        {console.log("==========document ref")}
                        {console.log(job._id)}
                         <CardText>JobId:{job.jobId}--{job.serviceId}--{job.status}--{job.assignto}</CardText>
                 </CardBody>
                </Link>
            </Card>
        );
    } */



    const Listjob = (props) => {
        console.log("In Listjob Component entry");

       /* const listjob = props.jobs.jobs.map((job) => {
            console.log("Entering Listjob const Customer is: " + job.customer)

            return (
                <div key={job._id} className="col-12 col-md-8 m-1">
                    
                    <RenderJob job={job} />
                </div>
            );
        }); */

        if (props.jobs.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.jobs.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.jobs.errMess}</h4>
                    </div>
                </div>
            );
        }
        else
            return (
                <div className="container">
                    <div className="row col-12 justify-content-center">
                            <h4>List Jobs</h4>
                    </div>
                    <div className="row">
                    <div className="col-12">   
                            <hr />
                    </div>
                    </div>
                    <div className="row justify-content-center">
                       {/* {listjob} */}

                       <div className="row col-12 col-md-12">
                        <table className="table">  
                            <thead className="job-header">
                                <th>Job Id</th>
                                <th>Service</th>
                                <th>Status</th>
                                <th>Assign to</th>
                            </thead>
                            <tbody>
                              {
                                 props.jobs.jobs.map((job) => (
                                    <tr key={job._id}>            
                                        <td><Link to={`/listjob/${job._id}`} >{job.jobId} </Link></td>
                                        <td>{job.serviceId}</td>
                                        <td>{job.status}</td>
                                        <td>{job.assignto}</td>
                                    </tr>   
                                   ))             
                                }   
                            </tbody>

                        </table>

                        </div>

                    </div>
                </div>
            );
    }

export default Listjob;