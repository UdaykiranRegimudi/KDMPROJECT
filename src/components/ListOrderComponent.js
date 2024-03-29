import React from 'react';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

const ListOrder = (props) => {
        console.log("In ListOrder Component entry");
        

        if (props.orders.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.orders.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.orders.errMess}</h4>
                    </div>
                </div>
            );
        }
        else
            return (
                <div className="container">
                    <div className="row col-12 justify-content-center">
                            <h3>List Orders</h3>
                    </div>
                    <div className="row">
                    <div className="col-12">   
                            <hr />
                    </div>
                    </div>
                    <div className="row justify-content-center">

                        <div className="row col-12 col-md-12">
                            <table className="table">  
                                <thead className="order-header">
                                    <th>Order Id</th>
                                    <th>Project Name</th>
                                    <th>Customer Name</th>
                                    <th>Approval Status </th>
                                    {/* <th>Subject</th> */}
                                    {/* <th>Lab Location</th> */}
                                    {/* <th>Sample</th> */}
                                    <th>Status</th>
                                    <th>Due Date</th>
                                    {/* <th>Url</th> */}
                                </thead>
                                <tbody>
                                {
                                    props.orders.orders.map((order) => (
                                        <tr key={order._id}>            
                                            <td><Link to={`/listorder/${encodeURIComponent(order.orderId)}`} >{order.orderId} </Link></td>
                                            <td>{order.projectName}</td>
                                            <td>{order.customerName}</td>
                                            <td>{order.approval}</td>
                                            {/* <td>{order.subject}</td> */}
                                            {/* <td>{order}</td> */}
                                            <td>{order.status}</td>
                                            <td>{order.dueDate}</td>
                                            {/* <td><a href ={order.url} target ="_blank">link</a></td> */}
                                        </tr>   
                                    ))             
                                }   
                                </tbody>

                            </table>

                        </div>
                    </div>
                </div>
            );       
    }

export default ListOrder;