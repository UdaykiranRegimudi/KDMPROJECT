import React, { Component } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, Form } from 'react-redux-form';
import {storage} from '../firebase/firebase';
// import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import "./Result.css"

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
            select:[],
            test:["",""],
            options:["Physical","Chemical"],
            testsArr1: [],
            material2Selected: "",
            testsArr2: [],
            mats: [{mat:"", matParams:[], matSamples:""}],
            image:null,
            url:''
        }
    }

    addMat(e) {
    this.setState((prevState) => ({
      mats: [...prevState.mats, {mat:"", matParams:[],matSamples:""}],
    }));
  }

  setUrl=()=>{
    console.log("@@@@@ Try for it acheive it @@@@@@@@@")
    const {image} = this.state
    if (image == null)
  return;


// Sending File to Firebase Storage
storage.ref(`/letters/${image.name}`).put(image)
  .on("state_changed",() => {

    // Getting Download Link
  storage.ref("letters").child(image.name).getDownloadURL()
      .then((link) => {
       this.setState({url:link})
       console.log(link)
      })
  });
  
}

     handleMaterialSelect(e, idx) {
        console.log("In handleMaterialSelect")
        console.log(e.target.value)
        console.log("idx")
        console.log(idx)
        let materialSelectedIdx = "materialSelected" + idx
        console.log("materialSelectedIdx")
        console.log(materialSelectedIdx)
        this.setUrl()

        this.setState({materialSelectedIdx: e.target.value})
        console.log("Before filter in handleMaterial1Select")
        console.log(this.state)
        console.log(this.props.materialMaster.materialMaster.length)
        // if(e.target.value.startsWith("Bit")){
        //     this.setState({options:["Physical","Both"]})
        // }else{
        //     this.setState({options:["Physical","Chemical","Both"]})
        // }


        for (let i = 0; i < this.props.materialMaster.materialMaster.length; i++) {
            console.log(i)
            console.log(this.props.materialMaster.materialMaster[i].matName)
            if(this.props.materialMaster.materialMaster[i].matName === e.target.value)
            {
                let physicalMethods = []
                 let chemicalMethods= []
                let testsArrIdx = "testsArr" + idx
                console.log("testsArrIdx")
                this.props.materialMaster.materialMaster[i].tests.map((name)=>{
            
                    if(name.discipline === "Physical"){
                        console.log("testsArrIdx")
                        physicalMethods.push(name.testName)
                        console.log(physicalMethods)
                    }else if(name.discipline === "Chemical"){
                        console.log("testsArrIdx")
                        chemicalMethods.push(name.testName)
                        console.log(chemicalMethods) 
                    }      
        
        
                    })
                    
            
                console.log(physicalMethods)
                    // test = physicalMethods.concat(chemicalMethods)
                    return this.setState({select:physicalMethods,test:chemicalMethods})
        
                
                // this.setState({testsArrIdx:this.props.materialMaster.materialMaster[i].tests})
                // return
            }
        }    
    }


    // setMethods=(value)=>{
    //     let physicalMethods = []
        
    //     let chemicalMethods= []
    //     console.log("trying to get")
    //     console.log(this.state.materialSelectedIdx)
    //     console.log(this.state.testsArrIdx)
    // //    this.state.testsArrIdx.map(Test=>{
    // //       test.push(Test.testName)  
    // //     })
    //     this.setUrl()

        
    //     this.state.testsArrIdx.map((name)=>{
            
    //         if(name.discipline === "Physical"){
    //             console.log("testsArrIdx")
    //             physicalMethods.push(name.testName)
    //             console.log(physicalMethods)
    //         }else if(name.discipline === "Chemical"){
    //             console.log("testsArrIdx")
    //             chemicalMethods.push(name.testName)
    //             console.log(chemicalMethods) 
    //         }      


    //         })
            
    
    //     console.log(physicalMethods)
    //     if(value ==="Physical"){
    //         return this.setState({select:physicalMethods,test:["",""]})
    //     }
    //     else if(value === "Chemical"){
    //         return this.setState({test:chemicalMethods,select:["",""]})
    //     }else{
    //         // test = physicalMethods.concat(chemicalMethods)
    //         return this.setState({select:physicalMethods,test:chemicalMethods})

    //     }
        
    // }

    
    
    

    handleSubmit(values) {
        const {url} = this.state
        console.log(values)
        console.log("Current State is: " + JSON.stringify(values));
        console.log(this.props.materialMaster.materialMaster)
        var matMaster= this.props.materialMaster.materialMaster
        console.log(matMaster)
        
        console.log("Current State is: " + JSON.stringify(values));
          
        this.props.postOrder(values, matMaster,url);
        console.log("Current State is: " + JSON.stringify(values));
        this.props.resetOrderForm();
        

    } 
    
    setImage=(file)=>(
        this.setState({image:file})
    )

    // Autofill=(event)=>{
    //   console.log(event.target.value)
    //   console.log(this.props.customerMaster.customerMaster.filter(value))
    // }

    



    render() {
        console.log("In Order Component render");
        console.log("Printing props in render");
        console.log(this.props);

        let {mats,url} = this.state
        const animatedComponents = makeAnimated();


        console.log("result obtained")
        console.log(this.state.select)
        console.log(url)
        console.log(url)
        console.log("trying to print url of the page")
        console.log(url)
        console.log(url)
        

        
    
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
                                <Control.text model=".projectName" id="projectName"  name="projectName"
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
                                <Label htmlFor="gst" md={3}>GST Number</Label>
                                <Col md={9}>   
                                    <Control.text model=".gst" id="gst" name="gst"
                                            className="form-control" />                                                                            
                                </Col>                                 
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="pan" md={3}>PAN</Label>
                                <Col md={9}>   
                                    <Control.text model=".pan" id="pan" name="pan"
                                            className="form-control" />                                                                            
                                </Col>                                 
                            </Row>

                            <Row className="form-group">
                            <Label htmlFor="billingAddress" md={3}>Billing Address:</Label>
                                <Col md={9}>
                                <Control.textarea model=".billingAddress" id="billingAddress" name="billingAddress"
                                        rows="3" className="form-control" />                                        
                                                                      
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
                            <Label htmlFor="source" md={3}>Source /Brand/ Type/ Week No </Label>
                            <Col md={9}>   
                                <Control.text model=".source" id="source" name="source"
                                         className="form-control" />                                                                            
                            </Col>                                 
                            </Row>
                            <Row className="form-group">
                            <Label htmlFor="file" md={3}>Letter </Label>
                            <Col md={9}>   
                                <Control.file model=".file"  id="file" name="file"  onChange={(e)=>{this.setImage(e.target.files[0])}}/>                                                                        
                            </Col>                                 
                            </Row>
                            
                            
                            


                    {this.state.mats.map((val, idx)=> {
                    let matId = `mat${idx}`, matParamsId = `matParams${idx}`, matsId = `mats[${idx}]`,matTypeId =`matType${idx}`,
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
                    let matTypeIdModel ="order."+matsId+".matType"
                    console.log("matIdModel")
                    console.log(matIdModel)
                    console.log("matParamsIdModel")
                    console.log(matParamsIdModel)

                        return (
                            <div key={idx}>
                            <Row className="form-group">
                                <Label htmlFor={matId} md={5}>{`Material #${idx + 1}`}:</Label>
                                {/* <Label htmlFor={matTypeId} md={3}>{`Material Type${idx + 1}`}:</Label> */}
                                <Label htmlFor={matParamsId} md={7}>{`Material Params #${idx + 1}`}:</Label>
                            </Row>
                            <Row className="form-group">
                                <Col md={5}>
                                    <Control.select onChange={(value, idx) => {this.handleMaterialSelect(value, idx)}} size="13" model={matIdModel} id={matId} name={matId}
                                    className="form-control">
                                        <option value="" selected disabled>Choose a material</option>
                                        {this.props.materialMaster.materialMaster.map(mat => <option>{mat.matName}</option>)}
                                    </Control.select>
                                </Col>
                                {/* <Col md={3}>  
                                 <Control.select  onClick={(e)=>{this.setMethods(e.target.value)}} multiple size="13" model={matTypeIdModel} id={matTypeId} name={matTypeId}
                                    className="form-control">
                                         <option  value="" selected disabled>Choose Type</option>
                                      
                                       {this.state.options.map(name => <option >{name}</option>)}
                                </Control.select>                                                    
                        </Col>  */}
                                <Col md={7}>   
                                <Control.select multiple size="13"  model={matParamsIdModel} id={matParamsId} name={matParamsId}
                                    className="form-control">
                                         <option value=""  disabled className="physical">Physical </option>
                                       {this.state.select.map(mat => <option>{mat}</option>)}
                                       {console.log(this.state.test.length)}
                                       {this.state.test.length>0?<option value=""  disabled className="physical">Chemical </option>:<p></p>}
                                       {this.state.test.map(mat => <option>{mat}</option>)}
                                </Control.select>                                                   
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor={matSamplesId}  md={9}>{`Material Samples #${idx + 1}`}:</Label>
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
                                <Label htmlFor="assign" md={3}>Assign:</Label>
                                <Col md={9}>   
                                    <Control.text model=".assign" id="assign" name="assign"
                                            className="form-control" placeholder="@kdmengineers.com" />                                                                            
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