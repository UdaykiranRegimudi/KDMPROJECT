import React, { Component } from 'react';
import { Card, CardHeader, CardBody,
    Label,
    Modal, ModalHeader, ModalBody, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { Fade } from 'react-animation-components';

    function RenderJobdetail({job}) {
            return(
                <div className="col-12 col-md-5 m-1">
                        <Card>
                        <CardHeader className="job-header text-center"><strong>Job Details</strong></CardHeader>
                            <CardBody className="justify-content-left">
                             <dl className="row p-1">
                                
                                            
                                           <dt className="col-6">Doc Ref:</dt>
                                            <dd className="col-6">{job._id}</dd>
                                            <dt className="col-6">Job Id:</dt>
                                            <dd className="col-6">{job.jobid}</dd>
                                            <dt className="col-6">Customer: </dt>
                                            <dd className="col-6">{job.customer}</dd>
                                            <dt className="col-6">Service: </dt>
                                            <dd className="col-6">{job.service}</dd>
                                            <dt className="col-6">Location: </dt>
                                            <dd className="col-6">{job.lablocation}</dd>
                                            <dt className="col-6">Status: </dt>
                                            <dd className="col-6">{job.status}</dd>
                                            <dt className="col-6">Assign To: </dt>
                                            <dd className="col-6">{job.assignto}</dd>
                                            <dt className="col-6">Description: </dt>
                                            <dd className="col-6">{job.description}</dd>
                                </dl>
                            </CardBody>
                        </Card>
                </div>
            );
    }

    function RenderJobupdates({docrefId, jobId, jobupdates, postJobupdate, userMaster}) {
        console.log("************* Render job updates - printing doc ref id")
        console.log(docrefId)
        console.log("************* Render job updates - printing job id")
        console.log(jobId)

        if (jobupdates!= null)
            return(
            
                <div className="col-12 col-md-5 m-1">
                    <div className="text-center">
                    <h5>Updates:</h5>
                    </div>
                    <div>
                    <ul className="list-unstyled">
                            {jobupdates.map((jobupdate) => {
                                return (
                                    <Fade in key={jobupdate._id}>
                                        <li>
                                        <p><strong>Status: </strong>{jobupdate.status}</p>
                                        <p><strong>Assigned To: </strong>{jobupdate.assignto}</p>
                                        <p><strong>Updates: </strong>{jobupdate.jobupdate}</p>
                                        <p>-- {jobupdate.author.firstname} {jobupdate.author.lastname} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(jobupdate.updatedAt.toDate())))}</p>
                                      
                                        </li>
                                    </Fade>
                                );
                            })}
                        
                    </ul>
                    {console.log("************* <passing to job update form> - printing doc ref id")}
                    {console.log(docrefId)}
                    {console.log("************* <passing to job update form> - printing job id")}
                    {console.log(jobId)}
                    <JobupdateForm docrefId={docrefId} jobId={jobId} postJobupdate={postJobupdate} userMaster={userMaster} />
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    class JobupdateForm extends Component {

        constructor(props) {
            super(props);
            
            console.log("JobupdateForm constructor...printing props")
            console.log(props)

            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            
            this.state = {
              isNavOpen: false,
              isModalOpen: false
            };
        }
    
        toggleModal() {
            this.setState({
              isModalOpen: !this.state.isModalOpen
            });
        }
    
        handleSubmit(values) {
            this.toggleModal();
            console.log(values)
            console.log("in Jobdetail handle submit")
            
            console.log("in Jobdetail handle submit----printing docrefId")
            console.log(this.props.docrefId)
            console.log("in Jobdetail handle submit----printing jobid")
            console.log(this.props.jobId)
            console.log("in Jobdetail passing to postJobupdate")
            this.props.postJobupdate(this.props.docrefId, this.props.jobId, values.status, values.assignto, values.jobupdate);
            
            console.log(values)
         
        }
    
        render() {
            return(
            <div>
                <Button className="submit-btn btn-block" onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span>Submit Job Updates</Button>
                <Modal className="jobupdate-modal" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Job Updates</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Col>
                            <Label htmlFor="status">Status</Label>
                            <Control.select model=".status" id="status" className="form-control">
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
                            <Col>
                            <Label htmlFor="assignto">Assign To</Label>
                            <Control.select model=".assignto" id="assignto" className="form-control">
                            <option value="" selected disabled>Choose here</option>
                            {this.props.userMaster.userMaster.map(userProfile => <option>{userProfile.userId}</option>)}

                            </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                            <Label htmlFor="jobupdate">Update</Label>
                            <Control.textarea model=".jobupdate" id="jobupdate"
                                        rows="6" className="form-control" />
                            </Col>
                        </Row>
                        <Button className="submit-btn btn-block" type="submit" value="submit">
                            Submit
                        </Button>
                    </LocalForm>
                </ModalBody>
               </Modal>
            </div>
            );
        }
    
    }

    const Jobdetail = (props) => {
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.job != null)        
            return (
                <div className="container">
                    <div className="row col-12">
                            <Link to='/listjob'><h3>List Jobs</h3></Link>
                    </div>
                    <div className="row col-12 justify-content-center">
                             <h4>JobId: {props.job.jobid}</h4> 
                    </div>
                    <div className="row">
                        <div className="col-12">   
                           <hr />
                        </div>
                     </div>
                    <div className="row col-12 justify-content-center">
                        <RenderJobdetail job={props.job} />
                        {console.log("*********docrefid")}
                        {console.log(props.job._id)}
                        <RenderJobupdates jobupdates={props.jobupdates}
                            postJobupdate={props.postJobupdate}
                            docrefId={props.job._id}
                            jobId={props.job.jobid}
                            userMaster={props.userMaster} />
                             {console.log("*********jobid")}
                        {console.log(props.job.jobid)}
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

export default Jobdetail;