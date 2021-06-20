import React, { Component } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, Form } from 'react-redux-form';

class Order extends Component {

    constructor(props) {
        console.log("In Order Component constructor");
        super(props);
        console.log("Printing props in constructor")
        console.log(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMaterialSelect = this.handleMaterialSelect.bind(this);
        this.addMat = this.addMat.bind(this);
      
        this.state = {
            labLoc: "",
            services: [],
            selCategories: '',
            materialSelectedIdx: "",
            material1Selected: "",
            testsArrIdx: [],
            testsArr1: [],
            material2Selected: "",
            testsArr2: [],
            mats: [{mat:"", matParams:[], matSamples:""}]
        }
    }

    addMat(e) {
    this.setState((prevState) => ({
      mats: [...prevState.mats, {mat:"", matParams:[], matSamples:""}],
    }));
  }

     handleMaterialSelect(e, idx) {
        console.log("In handleMaterialSelect")
        console.log(e.target.value)
        console.log("idx")
        console.log(idx)
        let materialSelectedIdx = "materialSelected" + idx
        console.log("materialSelectedIdx")
        console.log(materialSelectedIdx)

        this.setState({materialSelectedIdx: e.target.value})
        console.log("Before filter in handleMaterial1Select")
        console.log(this.state)
        console.log(this.props.materialMaster.materialMaster.length)

        for (let i = 0; i < this.props.materialMaster.materialMaster.length; i++) {
            console.log(i)
            console.log(this.props.materialMaster.materialMaster[i].matName)
            if(this.props.materialMaster.materialMaster[i].matName === e.target.value)
            {
                console.log(this.props.materialMaster.materialMaster[i].matName)
                let testsArrIdx = "testsArr" + idx
                console.log("testsArrIdx")
                console.log(testsArrIdx)
                this.setState({testsArrIdx: this.props.materialMaster.materialMaster[i].tests})
                return
            }
        }
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
        
    render() {
        console.log("In Order Component render");
        console.log("Printing props in render");
        console.log(this.props);

        let {mats} = this.state
    
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
                        onSubmit={(values) => this.handleSubmit(values)} >
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


                    {this.state.mats.map((val, idx)=> {
                    let matId = `mat${idx}`, matParamsId = `matParams${idx}`, matsId = `mats[${idx}]`, 
                        matSamplesId = `matSamples${idx}`
                    console.log("matId")
                    console.log(matId)
                    console.log("matParamsId")
                    console.log(matParamsId)
                    console.log("matsId")
                    console.log(matsId)
                    console.log("idx")
                    console.log(idx)
                    let matIdModel = "order." + matsId + ".mat"
                    let matParamsIdModel = "order." + matsId + ".matParams"
                    let matSamplesIdModel = "order." + matsId + ".matSamples"
                    console.log("matIdModel")
                    console.log(matIdModel)
                    console.log("matParamsIdModel")
                    console.log(matParamsIdModel)

                        return (
                            <div key={idx}>
                            <Row className="form-group">
                                <Label htmlFor={matId} md={6}>{`Material #${idx + 1}`}:</Label>
                                <Label htmlFor={matParamsId} md={6}>{`Material Params #${idx + 1}`}:</Label>
                            </Row>
                            <Row className="form-group">
                                <Col md={6}>
                                    <Control.select onChange={(value, idx) => {this.handleMaterialSelect(value, idx)}} size="8" model={matIdModel} id={matId} name={matId}
                                    className="form-control">
                                        <option value="" selected disabled>Choose a material</option>
                                        {this.props.materialMaster.materialMaster.map(mat => <option>{mat.matName}</option>)}
                                    </Control.select>
                                </Col>
                                <Col md={6}>   
                                <Control.select multiple size="8" model={matParamsIdModel} id={matParamsId} name={matParamsId}
                                    className="form-control">
                                         <option value="" selected disabled>Choose Test Parameters</option>
                                       {this.state.testsArrIdx.map(mat => <option>{mat.testName}</option>)}
                                </Control.select>                                                   
                                </Col>   
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor={matSamplesId} md={9}>{`Material Samples #${idx + 1}`}:</Label>
                            </Row>
                            <Row className="form-group">
                                <Col md={9}>   
                                <Control.text model={matSamplesIdModel} id={matSamplesId} name={matSamplesId}
                                   placeholder="Sample1, Sample 2, Sample 3, Sample n" className="form-control">
                                </Control.text>                                                   
                                </Col>   
                            </Row>
                            </div>   
                        )
                    })
                }

                        <Row className="form-group">
                            <Col md={4}>
                                <Button onClick={this.addMat}>Add Material</Button>
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
                                    <Control.select model=".labLocation" id="labLocation" name="labLocation"
                                        className="form-control">
                                        <option value="" selected disabled>Choose here</option>
                                        <option>Hyd</option>
                                        <option>Guntur</option>
                                        <option>Vizag</option>
                                    </Control.select>
                                </Col>
                            </Row> 
                                   
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