import React, { Component } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, Form } from 'react-redux-form';

import { getUniqueIdWithTs } from '../lib/Library.js';


class Job extends Component {

    constructor(props) {
        console.log("In Job Component constructor");
        super(props);
        console.log("Printing props in constructor")
       console.log(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log(values)
        console.log("Current State is: " + JSON.stringify(values));
        this.props.postJob(values);
        this.props.resetJobForm();
    }
    
    render() {
        console.log("In Job Component render");
        console.log("Printing props in render");
        console.log(this.props);
    //    console.log(this.props.jobs.jobs[0].customer);
        
        console.log("Calling getUniqueIdWithTs")
        
        var uniqueId = getUniqueIdWithTs()
        console.log("UniqueId obtained : " + uniqueId)
        
       /* console.log("Calling dbtest")
        var jobIdfromDB = dbtest()
        console.log("JobID from DB : " + jobIdfromDB)*/

        return(
           
            <div className="container">
                <div className="row col-12 justify-content-center">
                            <h3>Create Job</h3>
                    </div>     
                    <div className="row">
                    <div className="col-12">   
                            <hr />
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        
                        <Form className="create-form" model="job" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="jobid" md={2}>JobId:</Label>
                                <Col md={10}>
                                    <Control.text model=".jobid" id="jobid" name="jobid"
                                        placeholder="Job Id"
                                        className="form-control" value={uniqueId}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="customer" md={2}>Customer:</Label>
                                <Col md={10}>
                                    <Control.select model=".customer" id="customer" name="customer"
                                        className="form-control">
                                        <option value="" selected disabled>Choose here</option>
                                        {this.props.customerMaster.customerMaster.map(customerProfile => <option>{customerProfile.customerName}</option>)}
                                    
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="service" md={2}>Service:</Label>
                                <Col md={10}>
                                    <Control.select model=".service" id="service" name="service"
                                        className="form-control">
                                        <option value="" selected disabled>Choose here</option>
                                       {this.props.servicesMaster.servicesMaster.map(service => <option>{service.serviceType}</option>)}

                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lablocation" md={2}>Lab Location:</Label>
                                <Col md={10}>
                                    <Control.select model=".lablocation" id="lablocation" name="lablocation"
                                        className="form-control">
                                        <option value="" selected disabled>Choose here</option>
                                        <option>Hyderabad</option>
                                        <option>Guntur</option>
                                        <option>Vizag</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="status" md={2}>Status</Label>
                                <Col md={10}>
                                    <Control.select model=".status" id="status" name="status"
                                        className="form-control">
                                        <option value="" selected disabled>Choose here</option>
                                        <option>Assigned</option>
                                        <option>Accepted</option>
                                        <option>Waiting for</option>
                                        <option>Inprogress</option>
                                        <option>Completed</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="assignto" md={2}>Assign To:</Label>
                                <Col md={10}>
                                    <Control.select model=".assignto" id="assignto" name="assignto"
                                        className="form-control"> 
                                        <option value="" selected disabled>Choose here</option>
                                        {this.props.userMaster.userMaster.map(userProfile => <option>{userProfile.userId}</option>)}
                                   
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="description" md={2}>Description:</Label>
                                <Col md={10}>
                                    <Control.textarea model=".description" id="description" name="description"
                                        rows="5"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group text-center">
                                <Col md={{size:10, offset: 1}}>
                                <Button className="submit-btn" type="submit" value="submit">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Job;