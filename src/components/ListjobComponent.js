import React,{useState} from 'react';
// import { useDispatch,useSelector} from 'react-redux';

import { Link } from 'react-router-dom';
// import Select from 'react-select/dist/declarations/src/Select';
import { Loading } from './LoadingComponent';
//import {fetchJobs,updateOrder} from '../redux/ActionCreators';



    const Listjob = (props) => {
        console.log("In Listjob Component entry");
        // const dispatch = useDispatch()
        // const job = dispatch(fetchJobs())
        const [select,setSelect] = useState(false)
        //    const result = useSelector((state)=>{
        //       return state.jobs
        //   })
        //   console.log(result)


        if (props.jobs.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.jobs.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.jobs.errMess}</h4>
                    </div>
                </div>
            );
        }
        else{
            const mystyle ={
                width: "14px",
                height: "14px",
                marginTop: "12px",
                marginRight: "12px",
        }

        let myArray =[]
        const Checked = (e,job)=>{
            if(e.target.checked){
                myArray.push(job._id)
    
            }else if(!e.target.checked){
                var filteredAry = myArray.filter(value => value !== job._id)
                myArray = [...filteredAry]
            
            }
        }

        const Submitting =()=>{
            console.log(myArray)
            const value = document.getElementById("Group-assign").value
            props.selectedJobs(myArray,value)
        }
        
            return (
                <div className="container">
                    <div className="row col-12 justify-content-center">
                            <h4>List Jobs</h4>
                    </div>
                    <div className="row">
                    <div className="col-12">   
                            <hr />
                    </div>
                    <button className="col-1 btn btn-secondary mr-5 p-1" onClick = {()=>setSelect(!select)}>{select == false ? "Select":"Selecting"}</button>
                    {select && <>
                    <label className="col-3 mt-2" style={{fontWeight:700}}>Assigning Jobs</label>
                    <select className="col-3 mr-5 " id ="Group-assign" >
                    <option  value="" selected disabled>Choose here</option>
                            {props.userMaster.userMaster.map(user => <option>{user.Name}</option>)}
                    </select>
                    <button  className="col-2 btn btn-primary mr-5" onClick = {Submitting}>Submit</button>
                    </>}
                    </div>
                    <br/>
                    <div className="row justify-content-center">
                       <div className="row col-12 col-md-12">
                        <table className="table">  
                            <thead className="job-header">
                                <th> JobId</th>
                                <th>Material</th>
                                <th>Test Name</th>
                                <th>Sample</th>
                                <th>Status</th>
                                <th>Assign to</th>
                            </thead>
                            <tbody>
                              {
                                 props.jobs.jobs.map((job) => (
                                    <tr key={job._id}>            
                                        <td>{select && <input style = {mystyle} onChange = {(e)=>Checked(e,job)} type="checkbox"/>}<Link to={`/listjob/${job._id}`} >{job.jobId} </Link></td>
                                        <td>{job.parentMat}</td>
                                        <td>{job.testName}</td>
                                        <td>{job.sample}</td>
                                        <td>{job.status}</td>
                                        <td>{job.assignto}</td>
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
    }
export default Listjob;