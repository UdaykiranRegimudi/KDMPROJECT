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
        this.handleMaterial1Select = this.handleMaterial1Select.bind(this);
      
        this.state = {
            labLoc: "",
            services: [],
            selCategories: '',
            material1Selected: "",
            testsArr1: [],
            material2Selected: "",
            testsArr2: []
        }
    }
    

    handleMaterial1Select(e) {
        console.log("In handleMaterial1Select")
        console.log(e.target.value)
        this.setState({material1Selected: e.target.value})
        console.log("Before filter in handleMaterial1Select")
        console.log(this.state)
        console.log(this.props.materialMaster.materialMaster.length)

        for (let i = 0; i < this.props.materialMaster.materialMaster.length; i++) {
            console.log(i)
            console.log(this.props.materialMaster.materialMaster[i].matName)
            if(this.props.materialMaster.materialMaster[i].matName === e.target.value)
            {
                console.log(this.props.materialMaster.materialMaster[i].matName)
                this.setState({testsArr1: this.props.materialMaster.materialMaster[i].tests})
                return
            }
        }
    }

      handleMaterial2Select(e) {
        console.log("In handleMaterial2Select")
        console.log(e.target.value)
        this.setState({material2Selected: e.target.value})
        console.log("Before filter in handleMaterial2Select")
        console.log(this.state)
        console.log(this.props.materialMaster.materialMaster.length)

        for (let i = 0; i < this.props.materialMaster.materialMaster.length; i++) {
            console.log(i)
            console.log(this.props.materialMaster.materialMaster[i].matName)
            if(this.props.materialMaster.materialMaster[i].matName === e.target.value)
            {
                console.log(this.props.materialMaster.materialMaster[i].matName)
                this.setState({testsArr2: this.props.materialMaster.materialMaster[i].tests})
                return
            }
        }
      }

    handleM1ParamsSelect(e) {
        console.log("In handleParam1Select") 
        const selected=[];
        console.log(selected)
    }

     handleM2ParamsSelect(e) {
        console.log("In handleParamSelect") 
        const selected=[];
        console.log(selected)
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
        console.log(this.props.materialMaster.materialMaster)
        var matMaster= this.props.materialMaster.materialMaster
        console.log(matMaster)
        this.props.postOrder(values, matMaster);
        this.props.resetOrderForm();
    } 
        
    handleSubmit1(values) {
        console.log(values)
        console.log("Current State is: " + JSON.stringify(values));
        this.props.postOrder(values);
        this.props.resetOrderForm();
    } 

    
    render() {
        console.log("In Order Component render");
        console.log("Printing props in render");
        console.log(this.props);
    
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
 {/* Material 1*/}                           
                        <Row className="form-group">
                            <Label htmlFor="mat1" md={3}>Material 1:</Label>
                        </Row>
                        <Row className="form-group">
                                <Col md={6}>
                                    <Control.select onChange={(value) => this.handleMaterial1Select(value)} size="8" model=".mat1" id="mat1" name="mat1"
                                        className="form-control">
                                        <option value="" selected disabled>Choose a material</option>
                                       {this.props.materialMaster.materialMaster.map(mat => <option>{mat.matName}</option>)}
                                    </Control.select>
                                </Col>
                            <Col md={6}>   
                                   <Control.select multiple size="8" model=".m1params" id="m1params" name="m1params"
                                        className="form-control">
                                      <option value="" selected disabled>Choose Test Parameters</option>
                                       {this.state.testsArr1.map(mat => <option>{mat.testName}</option>)}
                                    </Control.select>                                                   
                            </Col>     
                            </Row>
                            <Row className="form-group">
                            <Col md={9}>   
                                    <Control.text model=".m1samples" id="m1samples" name="m1samples"
                                            placeholder="Sample1, Sample 2, Sample 3, Sample n" className="form-control" />                                                                            
                            </Col>                                 
                          </Row>
                            
{/* Material 1*/}         
{/* Material 2*/}
                        <Row className="form-group">
                            <Label htmlFor="mat2" md={3}>Material 2:</Label>
                        </Row>
                        <Row className="form-group">
                                <Col md={6}>
                                    <Control.select onChange={(value) => this.handleMaterial2Select(value)} size="8" model=".mat2" id="mat2" name="mat2"
                                        className="form-control">
                                        <option value="" selected disabled>Choose a material</option>
                                       {this.props.materialMaster.materialMaster.map(mat => <option>{mat.matName}</option>)}
                                    </Control.select>
                                </Col>
                            <Col md={6}>   
                                   <Control.select multiple size="8" model=".m2params" id="m2params" name="m2params"
                                        className="form-control">
                                      <option value="" selected disabled>Choose Test Parameters</option>
                                       {this.state.testsArr2.map(mat => <option>{mat.testName}</option>)}
                                    </Control.select>                                                   
                            </Col>      
                            </Row>
                            <Row className="form-group">
                            <Col md={9}>   
                                    <Control.text model=".m2samples" id="m2samples" name="m2samples"
                                            placeholder="Sample1, Sample 2, Sample 3, Sample n" className="form-control" />                                                                            
                            </Col>                             
                        </Row>  
{/* Material 2*/}    
{/*
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
*/}

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