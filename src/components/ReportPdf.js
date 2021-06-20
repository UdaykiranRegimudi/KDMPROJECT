import React, { Fragment } from 'react';
import {PDFViewer} from '@react-pdf/renderer'
import StdChemNablReport from './testReports/Standard/Chem-Nabl/StdChemNablReport'
import StdChemNonNablReport from './testReports/Standard/Chem-NonNabl/StdChemNonNablReport'
import StdPhyNablReport from './testReports/Standard/Phy-Nabl/StdPhyNablReport'
import StdPhyNonNablReport from './testReports/Standard/Phy-NonNabl/StdPhyNonNablReport'

import AggrChemNablReport from './testReports/Aggregates/Chem-Nabl/AggrChemNablReport'
import AggrChemNonNablReport from './testReports/Aggregates/Chem-NonNabl/AggrChemNonNablReport'
import AggrPhyNonNablReport from './testReports/Aggregates/Phy-NonNabl/AggrPhyNonNablReport'

import AggrPhyNablReport from './testReports/Aggregates/Phy-Nabl/AggrPhyNablReport'
import SiAnReport from './testReports/Aggregates/Phy-Nabl/SiAnReport'
import SiAnAggrReport from './testReports/Aggregates/Phy-Nabl/SiAnAggrReport'

import SteelPhyNablReport from './testReports/Steel/Phy-Nabl/SteelPhyNablReport'
import SteelPhyNonNablReport from './testReports/Steel/Phy-NonNabl/SteelPhyNonNablReport'


const ReportPdf = (props) => {

console.log("props in ReportPdf")
console.log(props)
console.log(props.materialSelected)

var matJobs = ((props.orderJobs).filter((orderJob) => orderJob.parentMat === props.materialSelected))
console.log("matJobs")
console.log(matJobs)

var phyJobs = ((matJobs).filter((matJob) => matJob.discipline === "Physical"))
var chemJobs = ((matJobs).filter((matJob) => matJob.discipline === "Chemical"))
console.log("PhyJobs")
console.log(phyJobs)
console.log("ChemJobs")
console.log(chemJobs)

var phyNablJobs = ((phyJobs).filter((phyJob) => phyJob.nabl === true))
var phyNonNablJobs = ((phyJobs).filter((phyJob) => phyJob.nabl === false))
console.log("phyJobs-Nabl")
console.log(phyNablJobs)
console.log("phyJobs-Non Nabl")
console.log(phyNonNablJobs)

var chemNablJobs = ((chemJobs).filter((chemJob) => chemJob.nabl === true))
var chemNonNablJobs = ((chemJobs).filter((chemJob) => chemJob.nabl === false))
console.log("ChemJobs-Nabl")
console.log(chemNablJobs)
console.log("ChemJobs-Non Nabl")
console.log(chemNonNablJobs)

if ((props.materialSelected === "Cement - OPC 43G")) {
return (
      <Fragment>  
        {chemNablJobs!= "" ?
            <Fragment>
              <h5>Chemical NABL Report for {props.materialSelected}</h5>
              <PDFViewer width='1000' height='500' className='app'>
                 <StdChemNablReport props={props} chemNablJobs={chemNablJobs} /> 
              </PDFViewer>
            </Fragment>: <p></p>}
          
        {chemNonNablJobs!= "" ?
            <Fragment>
              <h5>Chemical Non-NABL Report for {props.materialSelected}</h5>
              <PDFViewer width='1000' height='500' className='app'>
                 <StdChemNonNablReport props={props} chemNonNablJobs={chemNonNablJobs} /> 
              </PDFViewer>
            </Fragment>: <p></p>}
 
       {phyNablJobs!= "" ?
          <Fragment>
            <h5>Physical NABL Report for {props.materialSelected}</h5>
            <PDFViewer width='1000' height='500' className='app'>
              <StdPhyNablReport props={props} phyNablJobs={phyNablJobs} /> 
            </PDFViewer>
          </Fragment>: <p></p>}

         {phyNonNablJobs!= "" ?
          <Fragment>
            <h5>Physical Non-NABL Report for {props.materialSelected}</h5>
            <PDFViewer width='1000' height='500' className='app'>
              <StdPhyNonNablReport props={props} phyNonNablJobs={phyNonNablJobs} /> 
            </PDFViewer>
          </Fragment>: <p></p>}
      </Fragment>)

    } else { 
  if ((props.materialSelected === "Reinforcement Steel") || (props.materialSelected === "Structural Steel")) {
   return (

      <Fragment>  
          {phyNablJobs!= "" ?
          <Fragment>
            <h5>Physical NABL Report for {props.materialSelected}</h5>
            <PDFViewer width='1000' height='500' className='app'>
              <SteelPhyNablReport props={props} phyNablJobs={phyNablJobs} /> 
            </PDFViewer>
          </Fragment>: <p></p>}

         {phyNonNablJobs!= "" ?
          <Fragment>
            <h5>Physical Non-NABL Report for {props.materialSelected}</h5>
            <PDFViewer width='1000' height='500' className='app'>
              <SteelPhyNonNablReport props={props} phyNonNablJobs={phyNonNablJobs} /> 
            </PDFViewer>
          </Fragment>: <p></p>}
      </Fragment> )

  }  else {    
  if ((props.materialSelected === "Coarse Aggregates") || (props.materialSelected === "Fine Aggregates")) {

 var phyNablSAJobs = ((phyNablJobs).filter((phyNablJob) => phyNablJob.testName === "Sieve Analysis"))
var phyNablNonSAJobs = ((phyNablJobs).filter((phyNablJob) => phyNablJob.testName!= "Sieve Analysis"))
console.log("phyNablSAJobs")
console.log(phyNablSAJobs)
console.log("phyNablNonSAJobs")
console.log(phyNablNonSAJobs)
     return (

      <Fragment>  
        {chemNablJobs!= "" ?
            <Fragment>
              <h5>Chemical NABL Report for {props.materialSelected}</h5>
              <PDFViewer width='1000' height='500' className='app'>
                 <AggrChemNablReport props={props} chemNablJobs={chemNablJobs} /> 
              </PDFViewer>
            </Fragment>: <p></p>}
          
        {chemNonNablJobs!= "" ?
            <Fragment>
              <h5>Chemical Non-NABL Report for {props.materialSelected}</h5>
              <PDFViewer width='1000' height='500' className='app'>
                 <AggrChemNonNablReport props={props} chemNonNablJobs={chemNonNablJobs} /> 
              </PDFViewer>
            </Fragment>: <p></p>}

          {phyNablJobs!= "" ?
            <Fragment>
              <h5>Physical NABL Report for {props.materialSelected}</h5>
                {phyNablSAJobs!= "" && phyNablNonSAJobs!= "" ?
                    <PDFViewer width='1000' height='500' className='app'>
                       <SiAnAggrReport props={props} phyNablSAJobs={phyNablSAJobs}
                                        phyNablNonSAJobs={phyNablNonSAJobs} />                   
                    </PDFViewer>
                   : 
                  phyNablSAJobs!= "" ?
                    <PDFViewer width='1000' height='500' className='app'>
                       <SiAnReport props={props} phyNablSAJobs={phyNablSAJobs} />                  
                    </PDFViewer>
                   :
                    <PDFViewer width='1000' height='500' className='app'>
                    <AggrPhyNablReport props={props} phyNablNonSAJobs={phyNablNonSAJobs} /> 
                  </PDFViewer>
                  }
            </Fragment>: <p></p>}

         {phyNonNablJobs!= "" ?
          <Fragment>
            <h5>Physical Non-NABL Report for {props.materialSelected}</h5>
            <PDFViewer width='1000' height='500' className='app'>
              <AggrPhyNonNablReport props={props} phyNonNablJobs={phyNonNablJobs} /> 
            </PDFViewer>
          </Fragment>: <p></p>}
      </Fragment> )

     } 
  } 
 }  
}


export default ReportPdf;