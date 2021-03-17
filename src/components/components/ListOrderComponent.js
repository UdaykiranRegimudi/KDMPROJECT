import React from 'react';
import { Card, CardBody, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

    function RenderOrder({ order, onClick }) {
        return(
            <Card>
                <Link to={`/listorder/${order.orderid}`} >
                <CardBody className="jobcard justify-content-left">
                        {console.log("==========document ref")}
                        {console.log(order._id)}
                         <CardText>OrderId:{order.orderid}--{order.customer}--{order.service}--{order.description}</CardText>
                 </CardBody>
                </Link>
            </Card>
        );
    }



    const ListOrder = (props) => {
        console.log("In ListOrder Component entry");

        const listorder = props.orders.orders.map((order) => {
            console.log("Entering ListOrder const Customer is: " + order.customer)

            return (
                <div key={order._id} className="col-12 col-md-8 m-1">
                    
                    <RenderOrder order={order} />
                </div>
            );
        });

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
                        {listorder}
                    </div>
                </div>
            );
    }

export default ListOrder;