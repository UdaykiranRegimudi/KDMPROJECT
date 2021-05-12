import React from 'react';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

    const Listjob = (props) => {
        console.log("In Listjob Component entry");

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
                       <div className="row col-12 col-md-12">
                        <table className="table">  
                            <thead className="job-header">
                                <th>Job Id</th>
                                <th>Material</th>
                                <th>Test Name</th>
                                <th>Sample</th>
                                <th>Status</th>
                                <th>Assign to</th>
                            </thead>
                            <tbody>
                              {
                                 props.jobs.jobs.map((job) => (
                                    <tr key={job._id}>            
                                        <td><Link to={`/listjob/${job._id}`} >{job.jobId} </Link></td>
                                        <td>{job.parentMat}</td>
                                        <td>{job.testName}</td>
                                        <td>{job.sample}</td>
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