import { Card, CardHeader, CardBody, CardText } from 'reactstrap';
import { Fade } from 'react-animation-components';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';


    function RenderOrderDetail({order}) {
            return(
                <div className="col-12 col-md-5 m-1">
                        <Card>
                        <CardHeader className="job-header text-center"><strong>Order Details</strong></CardHeader>
                            <CardBody className="justify-content-left">
                             <dl className="row p-1">
                                
                                            
                                            <dt className="col-6">Doc Ref:</dt>
                                            <dd className="col-6">{order._id}</dd> 
                                            <dt className="col-6">Order Id:</dt>
                                            <dd className="col-6">{order.orderid}</dd>
                                            <dt className="col-6">Customer: </dt>
                                            <dd className="col-6">{order.customer}</dd>
                                            <dt className="col-6">Service: </dt>
                                            <dd className="col-6">{order.service}</dd>
                                            <dt className="col-6">Location: </dt>
                                            <dd className="col-6">{order.lablocation}</dd>
                                            <dt className="col-6">Status: </dt>
                                            <dd className="col-6">{order.status}</dd>
                                            <dt className="col-6">Assign To: </dt>
                                            <dd className="col-6">{order.assignto}</dd>
                                            <dt className="col-6">Description: </dt>
                                            <dd className="col-6">{order.description}</dd>
                                </dl>
                            </CardBody>
                        </Card>
                </div>
            );
    }

  function RenderOrderJobs({docrefId, orderId, orderJobs}) {
        console.log("************* Render order updates - printing doc ref id")
        console.log(docrefId)
        console.log("************* Render order updates - printing order id")
        console.log(orderId)

      
            return(
            
                <div className="col-12 col-md-5 m-1">
                    <div className="text-center">
                    <h5>Related Jobs</h5>
                    </div>
                    <div>
                   
                            {orderJobs.map((orderJob) => {
                                return(
                                <Fade in key={orderJob.orderId}>
                                <Link to={`/listorder-job/${orderJob._id}`}>
                                <p> {orderJob.orderId} --{orderJob.serviceType}
                                    --{orderJob.status} -- {orderJob.assignto}</p>
                                </Link>
                                    </Fade> )                              
                            })}
                        
                   </div>
                </div>
            );
       
    }

   
    const OrderDetail = (props) => {
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
                            <Link to='/listOrder'><h3>List Orders</h3></Link>
                    </div>
                    <div className="row col-12 justify-content-center">
                             <h4>OrderId: {props.order.orderid}</h4> 
                    </div>
                    <div className="row">
                        <div className="col-12">   
                           <hr />
                        </div>
                     </div>
                     <div className="row col-12 justify-content-center">
                        <RenderOrderDetail order={props.order}
                        orderId={props.order.orderid} />                 
                        {console.log("*********docrefid")}
                        {console.log(props.order._id)}
                        <RenderOrderJobs order={props.order}
                        orderJobs={props.orderJobs} 
                        orderId={props.order.orderid}/>
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