import React, { Component } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, Form } from 'react-redux-form';

import { getUniqueIdWithTs } from '../lib/Library.js';


class Order extends Component {

    constructor(props) {
        console.log("In Order Component constructor");
        super(props);
        console.log("Printing props in constructor")
        console.log(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleServicesSelect = this.handleServicesSelect.bind(this);
        this.state = {
            labLoc: "",
            services: [],
            selCategories: '' 
        }
    }

   handleChange(e) {
        console.log("In handleChange")    
        console.log(e)
        console.log(e.target.value)
        this.setState({labLoc: e.target.value})
        console.log(this.state)
    }

    handleServicesSelect(e) {
        console.log("In handleServicesSelect") 
        const selected=[];
        let selectedOption=(e.target.selectedOptions);
 
        for (let i = 0; i < selectedOption.length; i++) {
            selected.push(selectedOption.item(i).value)
            console.log(selectedOption.item(i).value)
        }
    
        console.log(selected)
        this.setState({selCategories: selected});
        this.setState({services: selected.map((selCat) =>
        <li>{selCat}</li>)})
    }

        
    handleSubmit(values) {
        console.log(values)
        console.log("Current State is: " + JSON.stringify(values));
        this.props.postOrder(values);
        this.props.resetOrderForm();
    } 
    
    render() {
        console.log("In Order Component render");
        console.log("Printing props in render");
        console.log(this.props);
    
        
        //console.log("Calling getUniqueIdWithTs")
        
        //var uniqueId = getUniqueIdWithTs()
        //console.log("UniqueId obtained : " + uniqueId)
        
      
        return(
           
            <div className="container">
                <div className="row col-12 justify-content-center">
                            <h3>Create Order</h3>
                    </div>     
                    <div className="row">
                    <div className="col-12">   
                            <hr />
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        
                        <Form className="create-form" model="order" 
                        onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="orderId" md={3}>Order Id:</Label>
                                <Col md={9}>
                                    <Control.text model=".orderId" id="orderId" name="orderId"
                                        placeholder="KDM/"
                                        className="form-control" 
                                     />
                                </Col>
                            </Row>

                            <Row className="form-group">
                            <Label htmlFor="projectName" md={3}>Project Name:</Label>
                                <Col md={9}>
                                <Control.text model=".projectName" id="projectName" name="projectName"
                                         className="form-control" />                                        
                                                                      
                                </Col>
                            </Row>
                            <Row className="form-group">
                            <Label htmlFor="customerName" md={3}>Customer Name:</Label>
                                <Col md={9}>
                                <Control.text model=".customerName" id="customerName" name="customerName"
                                         className="form-control" />                                                                    
                                </Col>
                            </Row>

                            <Row className="form-group">
                            <Label htmlFor="customerAddress" md={3}>Customer Address:</Label>
                                <Col md={9}>
                                <Control.textarea model=".customerAddress" id="customerAddress" name="customerAddress"
                                        rows="3" className="form-control" />                                        
                                                                      
                                </Col>
                            </Row>
                            <Row className="form-group">
                            <Label htmlFor="customerEmail" md={3}>Customer Email:</Label>
                            <Col md={9}>
                                <Control.text model=".customerEmail" id="customerEmail" name="customerEmail"
                                         className="form-control" />                                                                            
                            </Col>  
                            </Row>

                            <Row className="form-group">
                            <Label htmlFor="customerContact1" md={3}>Customer Contact 1:</Label>
                            </Row>
                           
                            <Row className="form-group">
                            <Col md={3}>   
                                <Control.text model=".customerContact1Name" id="customerContact1Name" name="customerContact1Name"
                                         placeholder="Name" className="form-control" />                                                                            
                            </Col>    
                            <Col md={3}>   
                                <Control.text model=".customerContact1Mobile" id="customerContact1Mobile" name="customerContact1Mobile"
                                        placeholder="Mobile Num" className="form-control" />                                                                            
                            </Col>       
                            <Col md={6}>   
                                <Control.text model=".customerContact1Email" id="customerContact1Email" name="customerContact1Email"
                                        placeholder="Email" className="form-control" />                                                                            
                            </Col>                         
                              </Row> 

                             <Row className="form-group">
                            <Label htmlFor="customerContact2" md={3}>Customer Contact 2:</Label>
                            </Row>
                           
                            <Row className="form-group">
                            <Col md={3}>   
                                <Control.text model=".customerContact2Name" id="customerContact2Name" name="customerContact2Name"
                                         placeholder="Name" className="form-control" />                                                                            
                            </Col>    
                            <Col md={3}>   
                                <Control.text model=".customerContact2Mobile" id="customerContact2Mobile" name="customerContact2Mobile"
                                        placeholder="Mobile Num" className="form-control" />                                                                            
                            </Col>       
                            <Col md={6}>   
                                <Control.text model=".customerContact2Email" id="customerContact2Email" name="customerContact2Email"
                                        placeholder="Email" className="form-control" />                                                                            
                            </Col>                         
                              </Row> 

                             {/*<Row className="form-group">
                            <Label htmlFor="companymobile" md={2}>Mobile No:</Label>
                            <Col md={10}>   
                                <Control.text model=".companymobile" id="companymobile" name="companymobile"
                                         className="form-control" />                                                                            
                            </Col>                                 
                              </Row> */}

                            <Row className="form-group">
                            <Label htmlFor="customerReference" md={3}>Customer Reference:</Label>
                            <Col md={9}>   
                                <Control.text model=".customerReference" id="customerReference" name="customerReference"
                                         className="form-control" />                                                                            
                            </Col>                                 
                            </Row>

                            <Row className="form-group">
                            <Label htmlFor="parentReference" md={3}>Parent Reference:</Label>
                            <Col md={9}>   
                                <Control.text model=".parentReference" id="parentReference" name="parentReference"
                                         className="form-control" />                                                                            
                            </Col>                                 
                            </Row>

                            <Row className="form-group">
                            <Label htmlFor="subject" md={3}>Subject:</Label>
                            <Col md={9}>   
                                <Control.text model=".subject" id="subject" name="subject"
                                         className="form-control" />                                                                            
                            </Col>                                 
                            </Row>

                            <Row className="form-group">
                            <Label htmlFor="source" md={3}>Source / Brand:</Label>
                            <Col md={9}>   
                                <Control.text model=".source" id="source" name="source"
                                         className="form-control" />                                                                            
                            </Col>                                 
                            </Row>

                        {/*    <Row className="form-group">
                                <Label htmlFor="customer" md={2}>Customer:</Label>
                                <Col md={10}>
                                    <Control.select model=".customer" id="customer" name="customer"
                                        className="form-control">
                                        <option value="" selected disabled>Choose here</option>
                                        {this.props.customerMaster.customerMaster.map(customerProfile => <option>{customerProfile.customerName}</option>)}
                                    
                                    </Control.select>
                                </Col>
                                </Row> */}

                            <p>Services Selected:</p>
                            <ul style={{color:'blue'}}>{this.state.services}</ul>

                            <Row className="form-group">
                                <Label htmlFor="service" md={3}>Services:</Label>
                                <Col md={9}>
                                    <Control.select onChange={(values) => this.handleServicesSelect(values)} multiple size="30" model=".service" id="service" name="service"
                                        className="form-control">
                                        <option value="" selected disabled>Choose here</option>
                                       {this.props.servicesMaster.servicesMaster.map(service => <option>{service.serviceType}</option>)}
                                        
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                            <Label htmlFor="dueDate" md={3}>Due Date:</Label>
                            <Col md={9}>   
                                <Control.text model=".dueDate" id="dueDate" name="dueDate"
                                         className="form-control" placeholder="dd/mm/yyyy" />                                                                            
                            </Col>                                 
                              </Row>
                            <Row className="form-group">
                                <Label htmlFor="labLocation" md={3}>Lab Location:</Label>
                                <Col md={9}>
                                    <Control.select onChange={(value) => this.handleChange(value)} model=".labLocation" id="labLocation" name="labLocation"
                                        className="form-control">
                                        <option value="" selected disabled>Choose here</option>
                                        <option>Hyd</option>
                                        <option>Guntur</option>
                                        <option>Vizag</option>
                                    </Control.select>
                                </Col>
                            </Row> 

                                {/* <p>Lab Location : {this.state.labLoc}</p> */}
                                   
                            <Row className="form-group">
                                <Label htmlFor="status" md={3}>Status:</Label>
                                <Col md={9}>
                                    <Control.select model=".status" id="status" name="status"
                                        className="form-control">
                                        <option value="" selected disabled>Choose here</option>
                                        <option>Assigned</option>
                                        <option>Completed</option>
                                        <option>Invoiced</option>
                                        <option>Paid</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            
                          <Row className="form-group">
                                <Label htmlFor="addInfo" md={3}>Additional Info:</Label>
                                <Col md={9}>
                                    <Control.textarea model=".addInfo" id="addInfo" name="addInfo"
                                        rows="3"
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

export default Order;