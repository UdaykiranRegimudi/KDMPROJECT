import React, { Fragment } from 'react';
import {PDFViewer} from '@react-pdf/renderer'
//import Report from '../components/testReports/Report'
import Report1 from '../components/testReports/Report1'
import Report2 from '../components/testReports/Report2'
import reportData from '../data/report-data'

const ReportPdf = (props) => {
console.log(reportData)
console.log("props in ReportPdf")
console.log(props)

{/*var mat1props = ((props.orderJobs).filter((orderJob) => orderJob.parentMat === props.order.mat1))
var mat2props = ((props.orderJobs).filter((orderJob) => orderJob.parentMat === props.order.mat2))
var mat1propss = ((props.orderJobs).filter((orderJob) => orderJob.parentMat === props.order.mat1))

console.log(mat1props)
console.log(mat2props)
console.log(mat1propss) */}

return (
      <Fragment>  
           {(props.order.mats).forEach((mat) => {

            console.log(mat)
            {<h4>Report for {mat.mat}</h4>}
            {
            <Fragment>
              <h4>Report for {mat.mat}</h4>
              <PDFViewer width='1000' height='500' className='app'>
                <Report1 report={reportData} props={props} /> 
              </PDFViewer>
            </Fragment>
            }
           })
        }
      </Fragment>
    )
  }

  {/*
return (
      <Fragment>  
       {mat1props!= "" ?
          <Fragment>
            <h4>Report for {props.order.mat1}</h4>
            
            <PDFViewer width='1000' height='500' className='app'>
              <Report1 report={reportData} props={props} mat1props={mat1props} mat1propss={mat1propss} /> 
            </PDFViewer>
          </Fragment>: <p></p>}
        {mat2props!= "" ?
            <Fragment>
              <h4>Report for {props.order.mat2}</h4>
              <PDFViewer width='1000' height='500' className='app'>
                <Report2 report={reportData} props={props} mat2props={mat2props} />
              </PDFViewer>
            </Fragment>: <p></p>}
      </Fragment>
) */}


export default ReportPdf;