import React from "react"
import { Label, Col, Row } from 'reactstrap';
import { Control } from 'react-redux-form';



const MatInputs = (props) => {

  console.log("props in MatInputs")
  console.log(props)

  const [testsArr1, setTestsArr1] = React.useState([]);
  //const [material1Selected, setMaterial1Selected] = React.useState('');

   function handleMaterialSelect(e) {
        console.log("In handleMaterial1Select")
        console.log(e.target.value)
        //setState({material1Selected: e.target.value})
       // setMaterial1Selected(e.target.value)
        console.log("Before filter in handleMaterial1Select")
        //console.log(this.state)
        console.log(props.materialMaster.materialMaster.length)

        for (let i = 0; i < props.materialMaster.materialMaster.length; i++) {
            console.log(i)
            console.log(props.materialMaster.materialMaster[i].matName)
            if(props.materialMaster.materialMaster[i].matName === e.target.value)
            {
                console.log(props.materialMaster.materialMaster[i].matName)
                setTestsArr1(props.materialMaster.materialMaster[i].tests)
                console.log(testsArr1)
                return
            }
        }
    }

  return (
    
    props.mats.map((val, idx)=> {
      let matId = `mat-${idx}`, matParamsId = `matParams-${idx}`, matSamplesId = `matSamples-${idx}`
      
      return (
        <div key={idx}>
          <Row className="form-group">
            <Label htmlFor={matId} md={6}>{`Material #${idx + 1}`}:</Label>
            <Label htmlFor={matParamsId} md={6}>{`Material Params #${idx + 1}`}:</Label>
          </Row>
          <Row className="form-group">
            <Col md={6}>
                <Control.select onChange={(value) => {handleMaterialSelect(value)}} size="8" model={matId} id={matId} name={matId}
                defaultValue={props.mats[idx].mat} className="form-control">
                <option value="" selected disabled>Choose a material</option>
                  {props.materialMaster.materialMaster.map(mat => <option>{mat.matName}</option>)}
                </Control.select>
              </Col>
              
            <Col md={6}>   
              <Control.select multiple size="8" model={matParamsId} id={matParamsId} name={matParamsId}
                defaultValue={props.mats[idx].matParams}  className="form-control">
                <option value="" selected disabled>Choose Test Parameters</option>
                  {testsArr1.map(mat => <option>{mat.testName}</option>)}
              </Control.select>                                                   
            </Col>   
          </Row>
          <Row className="form-group">
           <Col md={9}>   
             <Control.text model={matSamplesId} id={matSamplesId} name={matSamplesId}
              defaultValue={props.mats[idx].matSamples} placeholder="Sample1, Sample 2, Sample 3, Sample n" className="form-control" />                                                                            
           </Col>                                 
          </Row>
        </div>   
      )
    })
  )
}
export default MatInputs
