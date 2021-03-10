import React from 'react';
import { Card, CardBody, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

    function RenderJob({ job, onClick }) {
        return(
            <Card>
                <Link to={`/listjob/${job._id}`} >
                <CardBody className="jobcard justify-content-left">
                        {console.log("==========document ref")}
                        {console.log(job._id)}
                         <CardText>JobId:{job.jobid}--{job.customer}--{job.service}--{job.description}</CardText>
                 </CardBody>
                </Link>
            </Card>
        );
    }



    const Listjob = (props) => {
        console.log("In Listjob Component entry");

        const listjob = props.jobs.jobs.map((job) => {
            console.log("Entering Listjob const Customer is: " + job.customer)

            return (
                <div key={job._id} className="col-12 col-md-8 m-1">
                    
                    <RenderJob job={job} />
                </div>
            );
        });

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
                            <h3>List Jobs</h3>
                    </div>
                    <div className="row">
                    <div className="col-12">   
                            <hr />
                    </div>
                    </div>
                    <div className="row justify-content-center">
                        {listjob}
                    </div>
                </div>
            );
    }

export default Listjob;