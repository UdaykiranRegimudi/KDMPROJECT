import React, { Fragment } from 'react';
import {PDFViewer} from '@react-pdf/renderer'
import Invoice from './invoReports/Invoice'
import invoiceData from '../data/invoice-data'

// import logo from './logo.svg';

const InvoicePdf = () => {

return (
      <Fragment>
        <PDFViewer width='1000' height='600' className='app'>
          <Invoice invoice={invoiceData} />
        </PDFViewer>
      </Fragment>
    )
}

export default InvoicePdf;