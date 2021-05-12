import React, { Fragment } from 'react';
import {PDFViewer} from '@react-pdf/renderer'
import Invoice from './reports/Invoice'
import invoiceData from '../data/invoice-data'

// import logo from './logo.svg';
//import './App.css';

/*
const ReportPdf = (props) => {

    return useMemo(
    () => (
        <Fragment>
            <PDFViewer width="1000" height="600" className="app" >
                <Invoice invoice={invoiceData}/>
            </PDFViewer>
        </Fragment>
    )
  ),
  [props]
}
*/


const InvoicePdf = () => {

return (
      <Fragment>
        <PDFViewer width='1000' height='600' className='app'>
          <Invoice invoice={invoiceData} />
        </PDFViewer>
      </Fragment>
    )
}

/*
class AppRender extends Component {
  render() {
    console.log('Directory')
    console.log(`${__dirname}`)
    //ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`)
    //ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`)

    return (
      <Fragment>
        <PDFViewer width='1000' height='600' className='app'>
          <Invoice invoice={invoiceData} />
        </PDFViewer>
      </Fragment>
    )
  }
}
*/

export default InvoicePdf;