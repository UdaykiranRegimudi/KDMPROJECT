import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import { Card, CardHeader, CardBody,
    Label,
    Modal, ModalHeader, ModalBody, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import TestName from './TestName.js';
import Formula from './Formulae';
import { Fade } from 'react-animation-components';

function RenderJobdetail({job}) {
    
            return(
                <div className="col-12 col-md-5 m-1">
                        <Card>
                        <CardHeader className="job-header text-center"><strong>Job Details</strong></CardHeader>
                            <CardBody className="justify-content-left">
                             <dl className="row p-1">   
                                           {/* <dt className="col-6">Doc Ref:</dt>
                                            <dd className="col-6">{job._id}</dd> */}
                                            <dt className="col-6">Job Id:</dt>
                                            <dd className="col-6">{job.jobId}</dd>                                            
                                            <dt className="col-6">Test Name: </dt>
                                            <dd className="col-6">{job.testName}</dd>                                           
                                            <dt className="col-6">Status: </dt>
                                            <dd className="col-6">{job.status}</dd>
                                            <dt className="col-6">Assign To: </dt>
                                            <dd className="col-6">{job.assignto}</dd>
                                            <dt className="col-6">Result: </dt>
                                            <dd className="col-6">{job.result}</dd>
                                          { job.author!==undefined ?<dd style ={{fontWeight:600}}>-- {job.author.firstname}</dd>:<p></p>}
                                </dl>
                            </CardBody>
                        </Card>
                </div>
            );
    }

    function RenderJobupdates({docrefId, jobId, jobupdates,job, postJobupdate, userMaster,testName,parentMat,postCalupdate,order}) {
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
                                        {/* <p><strong>Result: </strong>{jobupdate.result}</p> */}
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
                    <JobupdateForm docrefId={docrefId} job = {job} jobId={jobId} order ={order} postCalupdate={postCalupdate} postJobupdate={postJobupdate} userMaster={userMaster} testName={testName} parentMat= {parentMat}/>
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }
    
    class CalCulations extends Component{
        state = {ModalOpen: false,Form:["",""],cal:false}
        
        

        toggle=()=> {
            this.setState({
              ModalOpen: !this.state.ModalOpen});
        }

        Submit=()=>{
            this.toggle()
            
           }

        Render=(jobId) =>{
            const {Form} = this.state
           const  l = Form.length

        //    this.myArray=[]
        //    this.arrayValue=[]
        //    for (let i=1;i<l+1;i++){
        //        this.myArray.push(document.getElementById(`description-${i}`).value)
        //        this.arrayValue.push(document.getElementById(`value-${i}`).value)      
        //   }

        //   this.setState(prevState=>({cal:!prevState.cal}))
        //   console.log(this.arrayValue.length)
        //   if(this.arrayValue[0] !=''){
        //   localStorage.setItem(jobId,[this.arrayValue,this.myArray])
        //   localStorage.setItem("formula",true)
          
        // //   const result = localStorage.getItem(`${jobId}-result`)
        // //   console.log(result)
        // //   this.props.postCalupdate(this.props.docrefId, this.props.jobId,result);
        //   }else {
        //       localStorage.setItem("formula",false)
        //   }
           }
        

        // Add=()=>{
        //     this.setState(prevState=>({Form:[...prevState.Form,""]}))
        //     console.log("Adding")    
        // }
    
        render() {
            // const {Form,cal,des,arrayValue,myArray} = this.state
            // const jobId = this.props.jobId
            // console.log(Form)
             return(
            <div>
                <Button className="submit-btn btn-block" onClick={this.toggle}><span className="fa fa-pencil fa-lg"></span>CalCulation form</Button>
                <Modal size="lg" className="jobupdate-modal"  isOpen={this.state.ModalOpen} toggle={this.toggle}>
                {/* <ModalHeader toggle={this.toggle}>Calculations form</ModalHeader> */}
                <ModalBody>
                {/* <LocalForm >
                        <Row className="form-group">
                            {Form.map((item,index)=>{
                            <Col>
                            <input   type="text" placeholder="description"                           />
                            </Col>
                            
                        })}

                        </Row>
                </LocalForm> */}
                    {/* <form>
                        {Form.map((value,index)=>
                            <div className="row m-3" key={`item-${index+1}`}>
                                <div className="col-8">
                                    <input type="text" className="form-control" placeholder="description"  ref={this.textInput} id={`description-${index+1}`} />
                                {console.log(`description-${index}`)}
                                </div>
                                <div className="col-4">
                                    <input type="text" className="form-control" placeholder="value" id={`value-${index+1}`} />
                                </div>
                            </div>)}
                    </form>
                    <Button className="btn btn-primary" onClick={this.Add}>Add</Button> */}

                    <p className="text-center" style={{fontWeight:800}}>Calculations</p>
                    <Row>
                        <Col>
                        {/* <Label>TestName :   {this.props.testName}</Label> */}
                        <Formula  parentMat = {this.props.parentMat} order ={this.props.order} job = {this.props.job} jobId ={this.props.jobId} postCalupdate ={this.props.postCalupdate} docrefId = {this.props.docrefId} testName={this.props.testName} />
                        </Col>
                    </Row>
                    <Button className="text-center btn mr-3" onClick={this.Submit}>Submit</Button>
                    {/* <Button className="text-center btn" onClick={()=>{this.Render(jobId)}}>calculate</Button> */}
                </ModalBody>
               </Modal>
            </div>
            );
        }
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
              isModalOpen: false,
              move:false,
            };
        }
    
        
        toggleModal() {
            this.setState({
              isModalOpen: !this.state.isModalOpen
            });
        }



        Move = ()=>{
            this.setState({move:true})
        }
    
        handleSubmit(values) {
            this.toggleModal();
            this.Move()
            console.log(values)
            console.log("in Jobdetail handle submit")
            
            console.log("in Jobdetail handle submit----printing docrefId")
            console.log(this.props.docrefId)
            console.log("in Jobdetail handle submit----printing jobid")
            console.log(this.props.jobId)
            console.log("in Jobdetail passing to postJobupdate")
            this.props.postJobupdate(this.props.docrefId, this.props.jobId, values.status, values.assignto, values.jobupdate, values.result);
            
            console.log(values)
            console.log(this.props.history)
        }
    
        render() {
            const {move} = this.state
            const order = this.props.order.orders.filter(order=>order.orderId === this.props.job.orderId)
            console.log(order)
            
            if(move){
                 return <Redirect to={{
                    pathname: '/result',
                    state: { approval:"approve" }
            }}/>
        }

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
                            {this.props.userMaster.userMaster.map(user => <option>{user.Name}</option>)}
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
                        {/* <Link to={`/${this.props.jobId}`} ><p>form update</p> </Link> */}
                        <Row className="form-group">
                            <Col>
                            <Label htmlFor="result">Result</Label>
                            <Control.text model=".result" id="result"
                                        className="form-control" />
                            </Col>
                        </Row>
                        <Button className="submit-btn btn-block" type="submit" value="submit">
                            Submit
                        </Button>
                    </LocalForm>
                </ModalBody>
               </Modal>
               <CalCulations testName ={this.props.testName} order = {order} job = {this.props.job} parentMat ={this.props.parentMat} jobId={this.props.jobId} docrefId={this.props.docrefId}postCalupdate={this.props.postCalupdate}/> 
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
                            <Link to='/listjob'><h4>List Jobs</h4></Link>
                    </div>
                    <div className="row col-12 justify-content-center">
                             <h4>JobId: {props.job.jobId}</h4> 
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
                            postCalupdate = {props.postCalupdate}
                            postJobupdate={props.postJobupdate}
                            docrefId={props.job._id}
                            jobId={props.job.jobId}
                            order = {props.order}
                            testName={props.job.testName}
                            parentMat = {props.job.parentMat}
                            job={props.job}
                            userMaster={props.userMaster} />
                             {console.log("*********jobid")}
                        {console.log(props.job.jobId)}
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

export default Jobdetail;