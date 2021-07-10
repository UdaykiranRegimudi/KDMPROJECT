import {Fragment} from 'react';
import { Card, CardHeader, CardBody, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import ReportPdf from './ReportPdf'
import InvoicePdf from './InvoicePdf'
import * as React from "react";

 function RenderOrderDetail({order}) {

            return(
                <div className="col-md-11">
                        <Card>
                        <CardHeader className="job-header text-center"><strong>Order Details</strong></CardHeader>
                            <CardBody className="justify-content-left">
                             <dl className="row p-1">  
                                            <dt className="col-6">Order Id:</dt>
                                            <dd className="col-6">{order.orderId}</dd>
                                             <dt className="col-6">Project Name: </dt>
                                            <dd className="col-6">{order.projectName}</dd>
                                            <dt className="col-6">Customer Name: </dt>
                                            <dd className="col-6">{order.customerName}</dd>
                                            <dt className="col-6">Customer Address: </dt>
                                            <dd className="col-6">{order.customerAddress}</dd>
                                            <dt className="col-6">Customer Email: </dt>
                                            <dd className="col-6">{order.customerEmail}</dd>
                                            <dt className="col-6">Customer Contact1 Name: </dt>
                                            <dd className="col-6">{order.customerContact1Name}</dd>
                                            <dt className="col-6">Customer Contact1 Num: </dt>
                                            <dd className="col-6">{order.customerContact1Mobile}</dd>
                                            <dt className="col-6">Customer Contact1 Email: </dt>
                                            <dd className="col-6">{order.customerContact1Email}</dd>
                                            <dt className="col-6">Customer Contact2 Name: </dt>
                                            <dd className="col-6">{order.customerContact2Name}</dd>
                                            <dt className="col-6">Customer Contact2 Num: </dt>
                                            <dd className="col-6">{order.customerContact2Mobile}</dd>
                                            <dt className="col-6">Customer Contact2 Email: </dt>
                                            <dd className="col-6">{order.customerContact2Email}</dd>
                                            <dt className="col-6">Customer Reference: </dt>
                                            <dd className="col-6">{order.customerReference}</dd>
                                            <dt className="col-6">Parent Reference: </dt>
                                            <dd className="col-6">{order.parentReference}</dd>
                                            <dt className="col-6">Subject: </dt>
                                            <dd className="col-6">{order.subject}</dd>
                                            <dt className="col-6">Source: </dt>
                                            <dd className="col-6">{order.source}</dd>
                                            <dt className="col-6">Location: </dt>
                                            <dd className="col-6">{order.labLocation}</dd>
                                            <dt className="col-6">Status: </dt>
                                            <dd className="col-6">{order.status}</dd>
                                            <dt className="col-6">Created By: </dt>
                                            <dd className="col-6">{order.createdBy}</dd>
                                            <dt className="col-6">Created At: </dt>
                                            <dd className="col-6">{new Date(order.createdAt.toDate()).toUTCString()}</dd>
                                            <dt className="col-6">Due Date: </dt>
                                            <dd className="col-6">{order.dueDate}</dd>
                                            <dt className="col-6">Additional Info: </dt>
                                            <dd className="col-6">{order.addInfo}</dd>
                                            <dt className="col-6">Services: </dt>
                                            <dd className="col-6">{order.service}</dd>
                                </dl>
                            </CardBody>
                        </Card>
                </div>
            );
    }

  function RenderOrderJobs({docrefId, orderId, jobId, orderJobs}) {
        console.log("************* Render order updates - printing doc ref id")
        console.log(docrefId)
        console.log("************* Render order updates - printing order id")
        console.log(jobId)
        console.log(orderId)

            return(       
                <div className="col-md-11 justify-content-center">
                         <br></br>            
                    <div className="text-center">
                        <h5>Related Jobs</h5>
                         <br></br>
                      </div>
                         <table className="table justify-content-center">                      
                            <thead className="job-header">                                        
                            <tr>
                                <th>JobId</th>
                                <th>Material</th>
                                <th>Test Name</th>
                                <th>Sample</th>
                                <th>Status</th>
                                <th>Assign to</th>
                            </tr>                                    
                            </thead>
                            <tbody>
                             {
                                 orderJobs.map((orderJob) => (
                                     
                                    <tr key={orderJob.orderId}>            
                                        <td>{orderJob.jobId}</td>
                                        <td>{orderJob.parentMat}</td>
                                        <td>{orderJob.testName}</td>
                                        <td>{orderJob.sample}</td>
                                        <td>{orderJob.status}</td>
                                        <td>{orderJob.assignto}</td>
                                    </tr>   
                                   ))             
                                }   
                            </tbody>
                        </table>
                     </div>    
            );
    }

const OrderDetail = (props) => {

    var matMaster = props.materialMaster.materialMaster

    const [showReportPdf, setShowReportPdf] = React.useState(false);
    const [showInvoicePdf, setShowInvoicePdf] = React.useState(false);
   const [materialSelected, setMaterialSelected] = React.useState("");
   const [invTypeSelected, setInvTypeSelected] = React.useState("");

    const onClickReportPdfButton = (event) => { 
	    setShowReportPdf(!showReportPdf);
    };

    const onClickInvoicePdfButton = (event) => {
        setShowInvoicePdf(!showInvoicePdf);
    }

    const onChangeRadioButton = (event) => {
        console.log(event.target.value);
      setMaterialSelected(event.target.value);
    }

    const onChangeInvType = (event) => {
        console.log(event.target.value);
      setInvTypeSelected(event.target.value);
    }

        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.order != null)        
            return (
                <div className="container">
                    <div className="row col-12">
                            <Link to='/listOrder'><h4>List Orders</h4></Link>
                    </div>
                    <div className="row col-12 justify-content-center">
                             <h4>OrderId: {props.order.orderId}</h4> 
                    </div>
                    <div className="row">
                    </div>
                    <div className="row">
                        <div className="col-6 justify-content-center">
                            {props.order.mats.map(function(mat) {
                                return <label key={mat.mat}>
                                    <input type="radio"
                                    value={mat.mat}
                                    name="material"
                                    onChange={onChangeRadioButton}
                                    />
                                    {mat.mat} 
                                </label>
                            })}
                        </div>
                        <div className="offset-2 col-4 justify-content-center">
                            {   <div onChange={onChangeInvType}>
                                        <input type="radio" value="Proforma Invoice" name="invoice" /> Proforma Invoice
                                        <input type="radio" value="Tax Invoice" name="invoice" /> Tax Invoice
                                </div>
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-2 col-6">
                            <Button onClick={onClickReportPdfButton}>
                                {showReportPdf ? 'Close Report Pdf' : 'Generate Report Pdf'}
                            </Button>
                        </div>
                        <div className="col-4">
                            <Button onClick={onClickInvoicePdfButton}>
                                {showInvoicePdf ? 'Close Invoice Pdf' : 'Generate Invoice Pdf'}
                            </Button>
                        </div>
                    </div>
                    <div className="row col-12 justify-content-center">
                            <Fragment>
                                {showReportPdf ? <ReportPdf order={props.order} orderJobs={props.orderJobs} materialSelected={materialSelected}/> : <p></p>}
                            </Fragment>
                            <Fragment>
                                {showInvoicePdf ? <InvoicePdf order={props.order} orderJobs={props.orderJobs} matMaster={matMaster} invTypeSelected={invTypeSelected}/> : <p></p>}
                            </Fragment>
                            
                    </div>
                    <div className="row">
                        <div className="col-12">   
                           <hr />
                        </div>
                     </div>
                      <div className="row col-12 justify-content-center">
                        <RenderOrderDetail order={props.order}
                        orderId={props.order.orderId} />                 
                        {console.log("*********docrefid")}
                        {console.log(props.order._id)}
                        {console.log("printing orders")}
                        {console.log(props.orders)}
                        <RenderOrderJobs order={props.order}
                        orderJobs={props.orderJobs} 
                        orderId={props.order.orderId}/>
                        {console.log("printing orderjobsprops")}
                        {console.log(props.orderJobs)}
                      </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

export default OrderDetail;

