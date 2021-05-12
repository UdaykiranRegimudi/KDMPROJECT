import React from "react";
import { Label, Col, Row } from 'reactstrap';
import { Control } from 'react-redux-form';

const MatInputs1 = (props) => {

  console.log("props in MatInputs")
  console.log(props)

  return (
    props.mats.map((val, idx)=> {
      let matId = `mat-${idx}`, matParamsId = `matParams-${idx}`
      console.log("matId")
      console.log(matId)
      console.log("matParamsId")
      console.log(matParamsId)

    return (
        <div key={idx}>
          <Row className="form-group">
            <Label htmlFor={matId} md={6}>{`Material #${idx + 1}`}:</Label>
            <Label htmlFor={matParamsId} md={6}>{`Material Params #${idx + 1}`}:</Label>
          </Row>
          <Row className="form-group">
            <Col md={6}>
                <Control.text model={matId} id={matId} name={matId}
                  defaultValue={props.mats[idx].mat} className="mat">
                </Control.text>
            </Col>
            <Col md={6}>   
              <Control.text model={matParamsId} id={matParamsId} name={matParamsId}
                defaultValue={props.mats[idx].matParams}  className="matParams">
              </Control.text>                                                   
            </Col>   
          </Row>
        </div>   
      )
    })
  )
}
export default MatInputs1
