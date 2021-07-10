import React, { Fragment } from 'react';
import {PDFViewer} from '@react-pdf/renderer'
import Invoice from './invoReports/Invoice'

// import logo from './logo.svg';

const InvoicePdf = (props) => {

console.log("props in InvoicePdf")
console.log(props)

console.log("Invoice type selected")
console.log(props.invTypeSelected)


var invData = props.order
console.log(invData)

invData.mats.forEach((mat) => {

            mat.invDetails =[]
            mat.sampCount = ""
            
            console.log(mat)
            const matObj = props.matMaster.find(({matName}) => matName === mat.mat)
            console.log(matObj)

            var count = mat.matSamples.split(",").length;
            console.log(count)
            mat.sampCount = count;
            console.log(mat.sampCount)
              
           for (let i = 0; i < mat.matParams.length; i++) {
            console.log(i)
            console.log(mat.matParams[i])
            
            const testObj = matObj.tests.find(({testName}) => testName === mat.matParams[i])
            console.log(testObj)

            var invDetailsObj = {}

            {
                invDetailsObj.matName = mat.mat;
                invDetailsObj.param = mat.matParams[i];
                invDetailsObj.sampCount = mat.sampCount;
                invDetailsObj.price = testObj.price;

                mat.invDetails.push(invDetailsObj)  
                console.log("InvoiceDetailsArr")
                console.log(mat.invDetails)
            }   
          }        
        console.log(invData)
})        

return (
      <Fragment>
        <PDFViewer width='1000' height='500' className='app'>
          <Invoice props={props} invData={invData} />
        </PDFViewer>
      </Fragment>
    )
}

export default InvoicePdf;