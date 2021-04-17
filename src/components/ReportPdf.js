import React, { Fragment } from 'react';
import {PDFViewer} from '@react-pdf/renderer'
import Report from '../components/testReports/Report'
import reportData from '../data/report-data'

const ReportPdf = (props) => {
console.log(reportData)
console.log("props in ReportPdf")
console.log(props)
return (
      <Fragment>
        <PDFViewer width='1000' height='500' className='app'>
          <Report report={reportData} props={props}/>
        </PDFViewer>
      </Fragment>
    )
}

export default ReportPdf;