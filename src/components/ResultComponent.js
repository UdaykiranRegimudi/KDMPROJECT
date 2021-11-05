import React from 'react';
import './Result.css'

function Result(props) {
    console.log("In Result  function");
    const approval = props.location.state.approval
    console.log(props.location.state.approval)
    
    if(approval=="approve"){
    return(
        <div className="center">
            <h1>Job updated Succesfully</h1>
        <center>
          <p>Job has been assigned to respected Person</p>
          </center>
        </div>
    );

}else if(approval =="reject"){
    return (
        <div className="center">
        <h1>orders  rejected</h1>
    <center>
      <p>Jobs are not created</p>
      </center>
    </div>
    )
}else{
    return(
        <div className="center">
            <h1>Job updated Succesfully</h1>
        <center>
          <p>Job has been assigned to respected Person</p>
          </center>
        </div>
    );
}
}

export default Result;