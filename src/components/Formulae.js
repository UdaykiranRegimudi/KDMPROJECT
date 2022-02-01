
const Formula=(props)=>{
    if(props.parentMat.startsWith("Cem")){
        const mystyle = {
            borderStyle:"solid",
            borderWidth:  "1.5px",
            fontWeight: 600,
            borderColor:"black"
          };
        
        
          
        if(props.testName=="Loss on Ignition"){
            const Cal =()=>{
                
                const w1 = document.getElementById(`${props.jobId}-1`).value
                const w2 = document.getElementById(`${props.jobId}-2`).value
                const w3 = document.getElementById(`${props.jobId}-3`).value
                const w4 = document.getElementById(`${props.jobId}-4`).value
                const w5 = document.getElementById(`${props.jobId}-5`).value
                const w6 = document.getElementById(`${props.jobId}-6`).value
                var result1 = eval((w2-w3)*100/(w2-w1)).toFixed(2)
                var result2 = eval((w5-w6)*100/(w5-w4)).toFixed(2)
                var result = eval((parseFloat(result1)+parseFloat(result2))/2).toFixed(2)
                console.log(result)
                const Value =[w1,w2,w3,result1,w4,w5,w6,result2]
                if(Value[0]!=''){
                props.postCalupdate(props.docrefId, props.jobId,result,Value,props.job);
                }
            }
                return(<div>
                    <label style ={{fontWeight:500}}>Formulae : (w2-w3)*100/(w2-w1)</label>
                    <div>
                    <div className="row m-3">
                                    <div className="col-3 m-1" style ={{fontWeight:400}}>
                                    Weight of Empty crucible(w1)
                                    </div>
                                    
                                    <div className="col-3 m-1" style ={{fontWeight:400}}>
                                    Weight of Sample(w2)
                                    </div>

                                    <div className="col-3 m-1" style ={{fontWeight:400}}>
                                    Residue after Ignition(w3) , g 
                                    </div>
                                    <div className="col-3  m-1" >
                                    <input type="text" className="form-control"  id={`${props.jobId}-1`} placeholder= "value"/>
                                    </div>
                                    <div className="col-3 m-1">
                                    <input type="text" className="form-control" id={`${props.jobId}-2`} placeholder= "value"/>
                                    </div>
                                    <div className="col-3 m-1">
                                    <input type="text" className="form-control" id={`${props.jobId}-3`} placeholder= "value"/>
                                    </div>
                                    <div className="col-3  m-1" >
                                    <input type="text" className="form-control"  id={`${props.jobId}-4`} placeholder= "value"/>
                                    </div>
                                    <div className="col-3 m-1">
                                    <input type="text" className="form-control" id={`${props.jobId}-5`} placeholder= "value"/>
                                    </div>
                                    <div className="col-3 m-1">
                                    <input type="text" className="form-control" id={`${props.jobId}-6`} placeholder= "value"/>
                                    </div>
                                    <br/>
                                
                                    <button className ="col-4 btn btn-primary mt-3" onClick={Cal}>Calculate</button>
                        </div>
                        {console.log(props.job)}
                    {/* <label>Result : (w2-w1)*34.3 : {props.job.result}</label> */}
                    <br/>
    
                    </div>
                    <table className="table">  
                    <tbody style={mystyle}>
                                <tr>
                                    <td>Material</td>
                                    <td>Test Name</td>
                                    <td>Weight of Empty crucible(w1)</td>
                                    <td>Weight of Sample(w2)</td>
                                    <td>Residue after Ignition(w3) , g</td>
                                    <td className="col-3">(w2-w3)*100/(w2-w1)</td>
                                    <td>Average</td>
                                </tr>
                
                                  {<>
                                        <tr style ={{fontWeight:400}} key={props.job._id}> 
                                            <td>{props.job.parentMat}</td>           
                                            <td>{props.job.testName}</td>
                                            {props.job.Value !==undefined ?<> <td>{props.job.Value[0]}</td>
                                            <td>{props.job.Value[1]}</td>
                                            <td>{props.job.Value[2]}</td>
                                            <td>{props.job.Value[3]}</td>
                                            
                                            </>:<p></p>}
                                        </tr>
                                        <tr style ={{fontWeight:400}} > 
                                        <td>{props.job.parentMat}</td>           
                                        <td>{props.job.testName}</td>
                                        {props.job.Value !==undefined ?<> <td>{props.job.Value[4]}</td>
                                        <td>{props.job.Value[5]}</td>
                                        <td>{props.job.Value[6]}</td>
                                        <td>{props.job.Value[7]}</td>
                                        <p className ="ml-2"> {props.job.result}</p>
                                        
                                        </>
                                        :<p></p>}
                                    </tr>    
                                    </>          
                                    }  
                                    
                                </tbody>
                            </table>
                            <br/>
                            <label style ={{fontWeight:600}}>Result : {props.job.result}</label>
                </div>)
            
        }else if(props.testName=="Insoluble Residue"){
            const Cal =()=>{
                const w1 = document.getElementById(`${props.jobId}-1`).value
                const w2 = document.getElementById(`${props.jobId}-2`).value
                const w = document.getElementById(`${props.jobId}-3`).value
                const Value =[w1,w2,w]
                var result = eval((w2-w1)*100/w).toFixed(2)
                if(Value[0]!=''){
                props.postCalupdate(props.docrefId, props.jobId,result,Value,props.job);
                }
            }
                return(<div>
                    <label style ={{fontWeight:500}}>Formulae : (w2-w1)*100/w</label>
                    <div>
                    <div className="row m-3 ">
                                    <div className="col-8 mb-2" style ={{fontWeight:400}}>
                                    Weight of Empty crucible(w1) :
                                    </div>
                                    <div className="col-4  mb-2" >
                                    <input type="text" className="form-control"  id={`${props.jobId}-1`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    Weight of Crucible + Insoluble(w2): 
                                    </div>
                                    <div className="col-4 mb-2">
                                    <input type="text" className="form-control" id={`${props.jobId}-2`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    Weight of Sample(w) , g 
                                    </div>
                                    <div className="col-4">
                                    <input type="text" className="form-control" id={`${props.jobId}-3`} placeholder= "value"/>
                                    </div>
                                    <button className ="col-4 btn btn-primary" onClick={Cal}>Calculate</button>
                        </div>
                        {console.log(props.job)}
                    {/* <label>Result : (w2-w1)*34.3 : {props.job.result}</label> */}
                    <br/>
    
                    </div>
                    <table className="table">  
                    <tbody style={mystyle}>
                                <tr>
                                    <td>Material</td>
                                    <td>Test Name</td>
                                    <td>Weight of Empty crucible(w1)</td>
                                    <td>Weight of Crucible + Insoluble(w2)</td>
                                    <td>Weight of Sample(w)</td>
                                    <td className="col-3">(w2-w1)*100/w</td>
                                </tr>
                
                                  {
                                        <tr style ={{fontWeight:400}} key={props.job._id}> 
                                            <td>{props.job.parentMat}</td>           
                                            <td>{props.job.testName}</td>
                                            {props.job.Value !==undefined ?<> <td>{props.job.Value[0]}</td>
                                            <td>{props.job.Value[1]}</td>
                                            <td>{props.job.Value[2]}</td>
                                            <td>{props.job.result}</td></>:<p></p>}
                                        </tr>          
                                    }  
                                </tbody>
                            </table>
                            <label style ={{fontWeight:600}}>Result : {props.job.result}</label>
                </div>) 
            
        }else if(props.testName=="Alumina"){
            const Cal =()=>{
                const w1 = document.getElementById(`${props.jobId}-1`).value
                const w2 = document.getElementById(`${props.jobId}-2`).value
                const w3= document.getElementById(`${props.jobId}-3`).value
                const w4 = document.getElementById(`${props.jobId}-4`).value
                const w5 = document.getElementById(`${props.jobId}-5`).value
                const w6= document.getElementById(`${props.jobId}-6`).value
                const result1 = eval(parseFloat(w1)-parseFloat(w2)-(parseFloat(w3)*parseFloat(w4))).toFixed(2)
                const Value =[w1,w2,w3,w4,w5,w6,result1]
                
                var result = eval((result1*50.98 *parseFloat(w5)*250 * 100)/(parseFloat(w6)*1000*25)).toFixed(2)
                
                props.postCalupdate(props.docrefId, props.jobId,result,Value,props.job);
            }
                return(<div>
                    <label style ={{fontWeight:500}}>Formulae : (w2-w1)*100/w</label>
                    <div>
                    <div className="row m-3 ">
                                    <div className="col-8 mb-2" style ={{fontWeight:400}}>
                                    Total volume of EDTA used in the titration in ml(V1)
                                    </div>
                                    <div className="col-4  mb-2" >
                                    <input type="text" className="form-control"  id={`${props.jobId}-1`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    Volume of EDTA used for iron in ml(V2)
                                    </div>
                                    <div className="col-4 mb-2">
                                    <input type="text" className="form-control" id={`${props.jobId}-2`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    Total volume of Bismuth Nitrate solution used in the titration in ml(V3)
                                    </div>
                                    <div className="col-4">
                                    <input type="text" className="form-control" id={`${props.jobId}-3`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8 mb-2" style ={{fontWeight:400}}>
                                    Equivalence of 1 ml bismuth nitrate solution(E)
                                    </div>
                                    <div className="col-4  mb-2" >
                                    <input type="text" className="form-control"  id={`${props.jobId}-4`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    M of EDTA
                                    </div>
                                    <div className="col-4 mb-2">
                                    <input type="text" className="form-control" id={`${props.jobId}-5`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    Weight(W)
                                    </div>
                                    <div className="col-4">
                                    <input type="text" className="form-control" id={`${props.jobId}-6`} placeholder= "value"/>
                                    </div>
                                    <button className ="col-4 btn btn-primary" onClick={Cal}>Calculate</button>
                        </div>
                        {console.log(props.job)}
                    {/* <label>Result : (w2-w1)*34.3 : {props.job.result}</label> */}
                    <br/>
    
                    </div>
                    <table className="table">  
                    <tbody style={mystyle}>
                                <tr>
                                    <td>Material</td>
                                    <td>Test Name</td>
                                    <td>Volume of EDTA for alumina(V)</td>
                                    <td>M of EDTA</td>
                                    <td>Weight(W)</td>
                                    <td className="col-3">(V*50.98*M of EDTA*250*100)/(W*1000*25)</td>
                                </tr>
                
                                  {
                                        <tr style ={{fontWeight:400}} key={props.job._id}> 
                                            <td>{props.job.parentMat}</td>           
                                            <td>{props.job.testName}</td>
                                            {props.job.Value !==undefined ?<> <td>{props.job.Value[6]}</td>
                                            <td>{props.job.Value[4]}</td>
                                            <td>{props.job.Value[5]}</td>
                                            
                                            <td>{props.job.result}</td></>:<p></p>}
                                        </tr>          
                                    }  
                                </tbody>
                            </table>
                            <label style ={{fontWeight:600}}>Result : {props.job.result}</label>
                </div>) 
            
        }else if(props.testName=="Sulfuric Anhydride"){
            
            // if(localStorage.getItem(props.jobId)!=undefined){
            //     var value = true
            // const arrayValue = (localStorage.getItem(props.jobId)).split(",")
            // console.log(arrayValue)
            // // console.log(myArray)
            // var i1=arrayValue[2]
            // var i2 = arrayValue[3]
            // var w1 = arrayValue[0]
            // var w2 = arrayValue[1]
            
            // var result = eval((w2-w1)*34.3 ).toFixed(2)
            // if(localStorage.getItem("formula")=="true"){
            //     props.postCalupdate(props.docrefId, props.jobId,result);
            // }
        // }
        const Cal =()=>{
            const w1 = document.getElementById(`${props.jobId}-1`).value
            const w2 = document.getElementById(`${props.jobId}-2`).value
            const w3 = document.getElementById(`${props.jobId}-3`).value
            const Value =[w1,w2,w3]
            var result = eval((w2-w1)*34.3/parseFloat(w3)).toFixed(2)
            if(Value[0]!=''){
            props.postCalupdate(props.docrefId, props.jobId,result,Value,props.job);
            }
        }
            return(<div>
                <label style ={{fontWeight:500}}>Formulae : (w2-w1)*34.3/W</label>
                <div>
                <div className="row m-3 " >
                                <div className="col-8 mb-2" style ={{fontWeight:400}}>
                                Weight of Empty crucible(w1) :
                                </div>
                                <div className="col-4  mb-2" >
                                <input type="text" className="form-control"  id={`${props.jobId}-1`} placeholder= "value"/>
                                </div>
                                <div className="col-8 mb-2" style ={{fontWeight:400}}>
                                Weight of Crucible + Baso4 PPT(w2): 
                                </div>
                                <div className="col-4 mb-2">
                                <input type="text" className="form-control" id={`${props.jobId}-2`} placeholder= "value"/>
                                </div>
                                <div className="col-8 mb-2" style ={{fontWeight:400}}>
                                Weight of Sample(W): 
                                </div>
                                <div className="col-4">
                                <input type="text" className="form-control" id={`${props.jobId}-3`} placeholder= "value"/>
                                </div>
                                <button className ="col-4 btn btn-primary" onClick={Cal}>Calculate</button>
                    </div>
                    {console.log(props.job)}
                {/* <label>Result : (w2-w1)*34.3 : {props.job.result}</label> */}
                <br/>

                </div>
                <table className="table">  
                <tbody style={mystyle}>
                            <tr className="job-header" >
                                <td>Material</td>
                                <td>Test Name</td>
                                <td>Weight of Empty crucible(w1)</td>
                                <td>Weight of Crucible + Baso4 PPT(w2)</td>
                                <td className="col-2">(w2-w1)*34.3/W</td>
                            </tr>
            
                              {
                                    <tr style ={{fontWeight:400}} key={props.job._id}> 
                                    <td>{props.job.parentMat}</td>          
                                        <td>{props.job.testName}</td>
                                        {props.job.Value !== undefined ?
                                        <>
                                        <td>{props.job.Value[0]}</td>
                                        <td>{props.job.Value[1]}</td>
                                        <td>{props.job.result}</td></>:<p></p>}
                                    </tr>             
                                }  
                                
                            </tbody>
                        </table>
                        <label style ={{fontWeight:600}}>Result : {props.job.result}</label>
            </div>)
        }else if(props.testName=="Chlorides"){
            const Cal =()=>{
                const Z = document.getElementById(`${props.jobId}-1`).value
                const N = document.getElementById(`${props.jobId}-2`).value
                const W = document.getElementById(`${props.jobId}-3`).value
                const Value =[Z,N,W]
                var result = eval((Z * N *0.03545*100)/W).toFixed(2)
                
                props.postCalupdate(props.docrefId, props.jobId,result,Value,props.job);
                
            }
            
                return(<div>
                    <label style ={{fontWeight:500}}>Formulae : Z x N x 0.03545 x100/W</label>
                    <div>
                    <div className="row m-3 " >
                                    <div className="col-8 mb-2" style ={{fontWeight:400}}>
                                    AgNo3 consumed for Chloride (Z) in ml :
                                    </div>
                                    <div className="col-4  mb-2" >
                                    <input type="text" className="form-control"  id={`${props.jobId}-1`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    Normality of AgNo3(N): 
                                    </div>
                                    <div className="col-4 mb-2">
                                    <input type="text" className="form-control" id={`${props.jobId}-2`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    Weight of Sample(W) , g 
                                    </div>
                                    <div className="col-4">
                                    <input type="text" className="form-control" id={`${props.jobId}-3`} placeholder= "value"/>
                                    </div>
                                    <button className ="col-4 btn btn-primary" onClick={Cal}>Calculate</button>
                        </div>
                        {console.log(props.job)}
                    {/* <label>Result : (w2-w1)*34.3 : {props.job.result}</label> */}
                    <br/>
    
                    </div>
                    <table className="table">  
                    <tbody style={mystyle}>
                                <tr >
                                    <td>Material</td>
                                    <td>Test Name</td>
                                    <td>AgNo3 consumed for Chloride (Z)</td>
                                    <td>Normality of AgNo 3(N)</td>
                                    <td>Weight of Sample(w)</td>
                                    <td className="col-3">(Z x N x 0.03545 x100)/W</td>
                                </tr>
                
                                  {
                                        <tr style ={{fontWeight:400}} key={props.job._id}> 
                                            <td>{props.job.parentMat}</td>         
                                            <td>{props.job.testName}</td>
                                            {props.job.Value !==undefined ?<> <td>{props.job.Value[0]}</td>
                                            <td>{props.job.Value[1]}</td>
                                            <td>{props.job.Value[2]}</td>

                                            <td>{props.job.result}</td></>:<p></p>}
                                        </tr>          
                                    }   

                                </tbody>
                            </table>
                            <label style ={{fontWeight:600}}>Result : {props.job.result}</label>
                </div>) 
        }else if(props.testName=="Alkalies (NCB)"){
            const Cal =()=>{
                const w1 = document.getElementById(`${props.jobId}-1`).value
                const w2 = document.getElementById(`${props.jobId}-2`).value
                const w3 = document.getElementById(`${props.jobId}-3`).value
                var result1 = eval(w2/(w1*100)).toFixed(2)
                var result2 = eval(w3/(w1*100)).toFixed(2)
                const Value =[w1,w2,w3,result1,result2]
                props.postCalupdate(props.docrefId, props.jobId,result1,Value,props.job);
                
            }
            
                return(<div>
                    <label style ={{fontWeight:500}}>Formulae : Na2O from graph/(W *100)</label>
                    <div>
                    <div className="row m-3 " >
                                    <div className="col-8 mb-2" style ={{fontWeight:400}}>
                                    Weight of the sample taken for test
                                    </div>
                                    <div className="col-4  mb-2" >
                                    <input type="text" className="form-control"  id={`${props.jobId}-1`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    Conc. of Na2O (ppm) from instrument
                                    </div>
                                    <div className="col-4 mb-2">
                                    <input type="text" className="form-control" id={`${props.jobId}-2`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    Conc. of K2O (ppm) from instrument
                                    </div>
                                    <div className="col-4 mb-2">
                                    <input type="text" className="form-control" id={`${props.jobId}-3`} placeholder= "value"/>
                                    </div>

                                    <button className ="col-4 btn btn-primary" onClick={Cal}>Calculate</button>
                        </div>
                        {console.log(props.job)}
                    {/* <label>Result : (w2-w1)*34.3 : {props.job.result}</label> */}
                    <br/>
    
                    </div>
                    <table className="table">  
                    <tbody style={mystyle}>
                                <tr >
                                    <td>Material</td>
                                    <td>Test Name</td>
                                    <td>Weight of Sample(w)</td>
                                    <td>Conc. of Na2O (ppm)</td>
                                    <td>Conc. of K2O (ppm)</td>
                                    <td >% Na2o/(W*100)</td>
                                    <td >% K2o/(W*100)</td>
                                </tr>
                
                                  {
                                        <tr style ={{fontWeight:400}} key={props.job._id}> 
                                            <td>{props.job.parentMat}</td>         
                                            <td>{props.job.testName}</td>
                                            {props.job.Value !==undefined ?<> <td>{props.job.Value[0]}</td>
                                            <td>{props.job.Value[1]}</td>
                                            <td>{props.job.Value[2]}</td>
                                            <td>{props.job.Value[3]}</td>
                                            <td>{props.job.Value[4]}</td>

                                            </>:<p></p>}
                                        </tr>          
                                    }   

                                </tbody>
                            </table>
                            {/* <label style ={{fontWeight:600}}>Result : {props.job.result}</label> */}
                </div>) 
        }else if(props.testName=="Alkalies (IS)"){
            const Cal =()=>{
                const w1 = document.getElementById(`${props.jobId}-1`).value
                const w2 = document.getElementById(`${props.jobId}-2`).value
                // const w3 = document.getElementById(`${props.jobId}-3`).value
                var result1 = eval(w2/(w1*100)).toFixed(2)
                // var result2 = eval(w3/(w1*100)).toFixed(2)
                const Value =[w1,w2,result1]
                props.postCalupdate(props.docrefId, props.jobId,result1,Value,props.job);
                
            }
            
                return(<div>
                    <label style ={{fontWeight:500}}>Formulae : K2O from graph/(W *100)</label>
                    <div>
                    <div className="row m-3 " >
                                    <div className="col-8 mb-2" style ={{fontWeight:400}}>
                                    Weight of the sample taken for test
                                    </div>
                                    <div className="col-4  mb-2" >
                                    <input type="text" className="form-control"  id={`${props.jobId}-1`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    Conc. of K2O (ppm) from instrument
                                    </div>
                                    <div className="col-4 mb-2">
                                    <input type="text" className="form-control" id={`${props.jobId}-2`} placeholder= "value"/>
                                    </div>
                                    {/* <div className="col-8" style ={{fontWeight:400}}>
                                    Conc. of K2O (ppm) from instrument
                                    </div>
                                    <div className="col-4 mb-2">
                                    <input type="text" className="form-control" id={`${props.jobId}-3`} placeholder= "value"/>
                                    </div> */}

                                    <button className ="col-4 btn btn-primary" onClick={Cal}>Calculate</button>
                        </div>
                        {console.log(props.job)}
                    {/* <label>Result : (w2-w1)*34.3 : {props.job.result}</label> */}
                    <br/>
    
                    </div>
                    <table className="table">  
                    <tbody style={mystyle}>
                                <tr >
                                    <td>Material</td>
                                    <td>Test Name</td>
                                    <td>Weight of Sample(w)</td>
                                    <td>Conc. of K2O (ppm)</td>
                                    {/* <td>Conc. of K2O (ppm)</td> */}
                                    <td >% K2o/(W*100)</td>
                                    {/* <td >% K2o/(W*100)</td> */}
                                </tr>
                
                                  {
                                        <tr style ={{fontWeight:400}} key={props.job._id}> 
                                            <td>{props.job.parentMat}</td>         
                                            <td>{props.job.testName}</td>
                                            {props.job.Value !==undefined ?<> <td>{props.job.Value[0]}</td>
                                            <td>{props.job.Value[1]}</td>
                                            {/* <td>{props.job.Value[2]}</td> */}
                                            <td>{props.job.result}</td>
                                            </>:<p></p>}
                                        </tr>          
                                    }   

                                </tbody>
                            </table>
                            {/* <label style ={{fontWeight:600}}>Result : {props.job.result}</label> */}
                </div>) 
        }
        else if(props.testName=="Ferric Oxide"){
            const Cal =()=>{
                const  w1= document.getElementById(`${props.jobId}-1`).value
                const w2 = document.getElementById(`${props.jobId}-2`).value
                const w3 = document.getElementById(`${props.jobId}-3`).value
                const w4 = document.getElementById(`${props.jobId}-4`).value
                const Value =[w1,w2,w3,w4]
                var result = eval((parseFloat(w1)*parseFloat(w2) *79.85*100*250)/(parseFloat(w3)*parseFloat(w4)*1000)).toFixed(2)
                if(Value[0]!=''){
                props.postCalupdate(props.docrefId, props.jobId,result,Value,props.job);
                }
            }
            
                return(<div>
                    <label style ={{fontWeight:500}}>Formulae : V x 79.85 x N of EDTA X 250 X 100/(Weight of sample X 1000 X Aliquot taken (A))</label>
                    <div>
                    <div className="row m-3 " >
                                    <div className="col-8 mb-2" style ={{fontWeight:400}}>
                                    Normality of EDTA: 
                                    </div>
                                    <div className="col-4  mb-2" >
                                    <input type="text" className="form-control"  id={`${props.jobId}-1`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    Volume of EDTA sample: 
                                    </div>
                                    <div className="col-4 mb-2">
                                    <input type="text" className="form-control" id={`${props.jobId}-2`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    Weight of Sample(W) , g ,Aliquot taken (A)
                                    </div>
                                    <div className="col-4 mb-2">
                                    <input type="text" className="form-control" id={`${props.jobId}-3`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    Aliquot taken (A)
                                    </div>
                                    <div className="col-4">
                                    <input type="text" className="form-control" id={`${props.jobId}-4`} placeholder= "value"/>
                                    </div>
                                    <button className ="col-4 btn btn-primary" onClick={Cal}>Calculate</button>
                        </div>
                        {console.log(props.job)}
                    {/* <label>Result : (w2-w1)*34.3 : {props.job.result}</label> */}
                    <br/>
    
                    </div>
                    <table className="table">  
                    <tbody style={mystyle}>
                                <tr >
                                    <td>Material</td>
                                    <td>Test Name</td>
                                    <td>Normality of EDTA</td>
                                    <td>Volume</td>
                                    <td>Weight of Sample(w)</td>
                                    <td>Aliquot(A)</td>
                                    <td className="col-3">V*79.85*N of EDTA*250*100/(W*1000*A))</td>
                                </tr>
                
                                  {
                                        <tr style ={{fontWeight:400}} key={props.job._id}> 
                                            <td>{props.job.parentMat}</td>         
                                            <td>{props.job.testName}</td>
                                            {props.job.Value !==undefined ?<> <td>{props.job.Value[0]}</td>
                                            <td>{props.job.Value[1]}</td>
                                            <td>{props.job.Value[2]}</td>
                                            <td>{props.job.Value[3]}</td>
                                            <td>{props.job.result}</td></>:<p></p>}
                                        </tr>          
                                    }   

                                </tbody>
                            </table>
                            <label style ={{fontWeight:600}}>Result : {props.job.result}</label>
                </div>) 
        }else if(props.testName=="Calcium Oxide"){
            const Cal =()=>{
                const V = document.getElementById(`${props.jobId}-1`).value
                const M= document.getElementById(`${props.jobId}-2`).value
                const W = document.getElementById(`${props.jobId}-3`).value
                const w = document.getElementById(`${props.jobId}-4`).value
                
                const Value =[V,M,W,w]
                var result = eval((parseFloat(V) * parseFloat(M) * parseFloat(56.08)* 25)/(parseFloat(W)*parseFloat(w))).toFixed(2)
         console.log(result)
                props.postCalupdate(props.docrefId, props.jobId,result,Value,props.job);
                
            }
                return(<div>
                    <label style ={{fontWeight:500}}>Formulae : (V * M * 56.08* 25)/W*A</label>
                    <div>
                    <div className="row m-3 " >
                                    <div className="col-8 mb-2" style ={{fontWeight:400}}>
                                    (V) in ml :
                                    </div>
                                    <div className="col-4  mb-2" >
                                    <input type="text" className="form-control"  id={`${props.jobId}-1`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    (M): 
                                    </div>
                                    <div className="col-4 mb-2">
                                    <input type="text" className="form-control" id={`${props.jobId}-2`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    Weight of Sample(W) , g 
                                    </div>
                                    <div className="col-4 mb-2">
                                    <input type="text" className="form-control" id={`${props.jobId}-3`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    Aliquot, g 
                                    </div>
                                    <div className="col-4">
                                    <input type="text" className="form-control" id={`${props.jobId}-4`} placeholder= "value"/>
                                    </div>
                                    <button className ="col-4 btn btn-primary" onClick={Cal}>Calculate</button>
                        </div>
                        {console.log(props.job)}
                    {/* <label>Result : (w2-w1)*34.3 : {props.job.result}</label> */}
                    <br/>
    
                    </div>
                    <table className="table">  
                    <tbody style={mystyle}>
                                <tr >
                                    <td>Material</td>
                                    <td>Test Name</td>
                                    <td>(V) in ml</td>
                                    <td>M</td>
                                    <td>Weight of Sample(W)</td>
                                    <td className="col-3">(V * M * 56.08* 25)/W*A</td>
                                </tr>
                
                                  {
                                        <tr style ={{fontWeight:400}} key={props.job._id}> 
                                            <td>{props.job.parentMat}</td>          
                                            <td>{props.job.testName}</td>
                                            {props.job.Value !==undefined ?<> <td>{props.job.Value[0]}</td>
                                            <td>{props.job.Value[1]}</td>
                                            <td>{props.job.Value[2]}</td>

                                            <td>{props.job.result}</td></>:<p></p>}
                                        </tr>          
                                    }  

                                </tbody>
                            </table>
                            <label style ={{fontWeight:600}}>Result : {props.job.result}</label>
                </div>) 
        }else if(props.testName=="Magnesia"){
            const Cal =()=>{
                const V1 = document.getElementById(`${props.jobId}-1`).value
                const V = document.getElementById(`${props.jobId}-2`).value
                const M = document.getElementById(`${props.jobId}-3`).value
                const W = document.getElementById(`${props.jobId}-4`).value
                const A = document.getElementById(`${props.jobId}-5`).value
                const Value =[V1,V,M,W,A]
                var result = eval((parseFloat(V1-V)*parseFloat(M)*40.32*25)/(parseFloat(W)*parseFloat(A))).toFixed(2)
            
                props.postCalupdate(props.docrefId, props.jobId,result,Value,props.job);
                
            }
                return(<div>
                    <label style ={{fontWeight:500}}>Formulae : ((V1-V)*40.32*25)/W*A)</label>
                    <div>
                    <div className="row m-3 " >
                    <div className="col-8 mb-2" style ={{fontWeight:400}}>
                                    (V1) in ml :
                                    </div>
                                    <div className="col-4  mb-2" >
                                    <input type="text" className="form-control"  id={`${props.jobId}-1`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8 mb-2" style ={{fontWeight:400}}>
                                    (V) in ml :
                                    </div>
                                    <div className="col-4  mb-2" >
                                    <input type="text" className="form-control"  id={`${props.jobId}-2`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    (M): 
                                    </div>
                                    <div className="col-4 mb-2">
                                    <input type="text" className="form-control" id={`${props.jobId}-3`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    Weight of Sample(W) , g 
                                    </div>
                                    <div className="col-4 mb-2">
                                    <input type="text" className="form-control" id={`${props.jobId}-4`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8 mb-2"  style ={{fontWeight:400}}>
                                     Aliquot
                                    </div>
                                    <div className="col-4">
                                    <input type="text" className="form-control" id={`${props.jobId}-5`} placeholder= "value"/>
                                    </div>
                                    <button className ="col-4 btn btn-primary" onClick={Cal}>Calculate</button>
                        </div>
                        
                    {/* <label>Result : (w2-w1)*34.3 : {props.job.result}</label> */}
                    <br/>
    
                    </div>
                    <table className="table">  
                    <tbody style={mystyle}>
                                <tr  >
                                    <td>Material</td>
                                    <td>Test Name</td>
                                    <td>(V1) in ml</td>
                                    <td>(V) in ml</td>
                                    <td>M</td>
                                    <td>Weight of Sample(W)</td>
                                    <td className="col-3">((V1-V)*M*5.608)/W*A)</td>
                                </tr>
                
                                  {
                                        <tr style ={{fontWeight:400}} key={props.job._id}> 
                                            <td>{props.job.parentMat}</td>           
                                            <td>{props.job.testName}</td>
                                            {props.job.Value !==undefined ?<> <td>{props.job.Value[0]}</td>
                                            <td>{props.job.Value[1]}</td>
                                            <td>{props.job.Value[2]}</td>
                                            <td>{props.job.Value[3]}</td>

                                            <td>{props.job.result}</td></>:<p></p>}
                                        </tr>          
                                    }
                                </tbody>
                            </table>
                            <label style ={{fontWeight:600}}>Result : {props.job.result}</label>
                </div>) 
            

        }else if(props.testName=="Silica content"){
            const Cal =()=>{
                const w1 = document.getElementById(`${props.jobId}-1`).value
                const w2 = document.getElementById(`${props.jobId}-2`).value
                const w = document.getElementById(`${props.jobId}-3`).value
                const Value =[w1,w2,w]
                var result = eval((w1-w2)*100/w).toFixed(2)
                if(Value[0]!=''){
                props.postCalupdate(props.docrefId, props.jobId,result,Value,props.job);
                }
            }
                return(<div>
                    <label style ={{fontWeight:500}}>Formulae : (w1-w2)*100/w</label>
                    <div>
                    <div className="row m-3 " >
                                    <div className="col-8 mb-2" style ={{fontWeight:400}}>
                                    Weight of Empty crucible + Insoluble(w1) :
                                    </div>
                                    <div className="col-4  mb-2" >
                                    <input type="text" className="form-control"  id={`${props.jobId}-1`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    Weight of Crucible + After HF treatment(w2): 
                                    </div>
                                    <div className="col-4 mb-2">
                                    <input type="text" className="form-control" id={`${props.jobId}-2`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    Weight of Sample(w), g 
                                    </div>
                                    <div className="col-4">
                                    <input type="text" className="form-control" id={`${props.jobId}-3`} placeholder= "value"/>
                                    </div>
                                    <button className ="col-4 btn btn-primary" onClick={Cal}>Calculate</button>
                        </div>
                        
                    {/* <label>Result : (w2-w1)*34.3 : {props.job.result}</label> */}
                    <br/>
    
                    </div>
                    <table className="table">  
                    <tbody style={mystyle}>
                                <tr >
                                    <td>Material</td>
                                    <td>Test Name</td>
                                    <td>Wt of Empty crucible+<br/>Insoluble(w1)</td>
                                    <td>Wt of crucible+after HF treatment(w2)</td>
                                    <td>Weight of Sample(w)</td>
                                    <td className="col-3">(w1-w2)*100/w</td>
                                </tr>
                
                                  {
                                        <tr style ={{fontWeight:400}} key={props.job._id}> 
                                            <td>{props.job.parentMat}</td>      
                                            <td>{props.job.testName}</td>
                                            {props.job.Value !==undefined ?<> <td>{props.job.Value[0]}</td>
                                            <td>{props.job.Value[1]}</td>
                                            <td>{props.job.Value[2]}</td>

                                            <td>{props.job.result}</td></>:<p></p>}
                                        </tr>          
                                    }  
                                </tbody>
                            </table>
                            <label style ={{fontWeight:600}}>Result : {props.job.result}</label>
                </div>) 

        }else if(props.testName =="Normal Consistency"){

            const Cal =()=>{
                const ws = document.getElementById(`${props.jobId}-1`).value
                const water = document.getElementById(`${props.jobId}-2`).value
                const Value =[ws,water]
                var result = eval((water/ws)*100).toFixed(2)
                if(Value[0]!=''){
                props.postCalupdate(props.docrefId, props.jobId,result,Value,props.job);
                }
              }
           return(<div>
                    <label style ={{fontWeight:500}}>Formulae : (Water/ws)*100</label>
                    <div>
                    <div className="row m-3 ">
                                    <div className="col-8 mb-2" style ={{fontWeight:400}}>
                                    Weight(ws) :
                                    </div>
                                    <div className="col-4  mb-2" >
                                    <input type="text" className="form-control"  id={`${props.jobId}-1`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    Weight of water(g): 
                                    </div>
                                    <div className="col-4 mb-2">
                                    <input type="text" className="form-control" id={`${props.jobId}-2`} placeholder= "value"/>
                                    </div>
                                    
                                    <button className ="col-4 btn btn-primary" onClick={Cal}>Calculate</button>
                        </div>
                        {console.log(props.job)}
                    {/* <label>Result : (w2-w1)*34.3 : {props.job.result}</label> */}
                    <br/>
    
                    </div>
                    <table className="table">  
                    <tbody style={mystyle}>
                                <tr>
                                    <td>Material</td>
                                    <td>Test Name</td>
                                    <td>Weight(ws)</td>
                                    <td>Weight of water</td>
                                    <td className="col-3">NC((Water/ws)*100)</td>
                                </tr>
                
                                  {
                                        <tr style ={{fontWeight:400}} key={props.job._id}> 
                                            <td>{props.job.parentMat}</td>           
                                            <td>{props.job.testName}</td>
                                            {props.job.Value !==undefined ?<> <td>{props.job.Value[0]}</td>
                                            <td>{props.job.Value[1]}</td>
                                            <td>{props.job.result}</td></>:<p></p>}
                                        </tr>          
                                    }  
                                </tbody>
                            </table>
                            <label style ={{fontWeight:600}}>Result : {props.job.result}</label>
                </div>) 
            
        }else if(props.testName =="Setting Time Initial"){

            const value = props.order[0].Normal
            console.log(value)
             const RNC = eval(parseInt(value)*3*0.85)
            const Cal =()=>{
                const w1 = document.getElementById(`${props.jobId}-1`).value
                const StartingTime = document.getElementById(`${props.jobId}-2`).value
                const ST = StartingTime.split(":")
                const EndingTime = document.getElementById(`${props.jobId}-3`).value
                const IST = EndingTime.split(":")
                const Value =[w1,StartingTime,EndingTime]
                var result = eval((IST[0]-ST[0])*60+(IST[1]-ST[1]))
                if(Value[0]!=''){
                props.postCalupdate(props.docrefId, props.jobId,result,Value,props.job);
                }
            }
        return(<div>
            {value == undefined ?<p style ={{marginLeft:"30%"}}>Primary Normal consistency not done yet</p>:<p></p>}
                    <label style ={{fontWeight:500}}>Formulae : ((IST-ST)</label>
                    <div>
                    <div className="row m-3 ">
                                    <div className="col-8 mb-2" style ={{fontWeight:400}}>
                                    Weight :
                                    </div>
                                    <div className="col-4  mb-2" >
                                    <input type="text" className="form-control"  id={`${props.jobId}-1`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    Standard Time: 
                                    </div>
                                    <div className="col-4 mb-2">
                                    <input type="text" className="form-control" id={`${props.jobId}-2`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    IST (Time) 
                                    </div>
                                    <div className="col-4">
                                    <input type="text" className="form-control" id={`${props.jobId}-3`} placeholder= "value"/>
                                    </div>
                                    <button className ="col-4 btn btn-primary" onClick={Cal}>Calculate</button>
                        </div>
                        {console.log(props.job)}
                    {/* <label>Result : (w2-w1)*34.3 : {props.job.result}</label> */}
                    <br/>
    
                    </div>
                    <table className="table">  
                    <tbody style={mystyle}>
                                <tr>
                                    <td>Material</td>
                                    <td>Test Name</td>
                                    <td>Weight</td>
                                    <td>Water(NC*3*0.85)</td>
                                    <td>Standard Time</td>
                                    <td>IST(Time)</td>
                                    <td className="col-3">Minutes</td>
                                </tr>
                
                                  {
                                        <tr style ={{fontWeight:400}} key={props.job._id}> 
                                            <td>{props.job.parentMat}</td>           
                                            <td>{props.job.testName}</td>
                                            {props.job.Value !==undefined ?<> <td>{props.job.Value[0]}</td>
                                            <td>{RNC}</td>
                                            <td>{props.job.Value[1]}</td>
                                            <td>{props.job.Value[2]}</td>
                                            <td>{props.job.result}</td></>:<p></p>}
                                        </tr>          
                                    }  
                                </tbody>
                            </table>
                            <label style ={{fontWeight:600}}>Result : {props.job.result}</label>
                </div>) 
            
        }
        else if(props.testName =="Setting Time Final"){

            const value = props.order[0].Normal
            console.log(value)
             const RNC = eval(parseInt(value)*3*0.85)
            const Cal =()=>{
                const w1 = document.getElementById(`${props.jobId}-1`).value
                const StartingTime = document.getElementById(`${props.jobId}-2`).value
                const ST = StartingTime.split(":")
                const EndingTime = document.getElementById(`${props.jobId}-3`).value
                const FST = EndingTime.split(":")
                const Value =[w1,StartingTime,EndingTime]
                var result = eval((FST[0]-ST[0])*60+(FST[1]-ST[1]))
                if(Value[0]!=''){
                props.postCalupdate(props.docrefId, props.jobId,result,Value,props.job);
                }
            }
        return(<div>
            {value == undefined ?<p style ={{marginLeft:"30%"}}>Primary Normal consistency not done yet</p>:<p></p>}
                    <label style ={{fontWeight:500}}>Formulae : ((FST-ST)</label>
                    <div>
                    <div className="row m-3 ">
                                    <div className="col-8 mb-2" style ={{fontWeight:400}}>
                                    Weight :
                                    </div>
                                    <div className="col-4  mb-2" >
                                    <input type="text" className="form-control"  id={`${props.jobId}-1`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    Standard Time: 
                                    </div>
                                    <div className="col-4 mb-2">
                                    <input type="text" className="form-control" id={`${props.jobId}-2`} placeholder= "value"/>
                                    </div>
                                    <div className="col-8" style ={{fontWeight:400}}>
                                    FST (time) 
                                    </div>
                                    <div className="col-4">
                                    <input type="text" className="form-control" id={`${props.jobId}-3`} placeholder= "value"/>
                                    </div>
                                    <button className ="col-4 btn btn-primary" onClick={Cal}>Calculate</button>
                        </div>
                        {console.log(props.job)}
                    {/* <label>Result : (w2-w1)*34.3 : {props.job.result}</label> */}
                    <br/>
    
                    </div>
                    <table className="table">  
                    <tbody style={mystyle}>
                                <tr>
                                    <td>Material</td>
                                    <td>Test Name</td>
                                    <td>Weight</td>
                                    <td>Water(NC*3*0.85)</td>
                                    <td>Standard Time</td>
                                    <td>FST(time)</td>
                                    <td className="col-3">Minutes</td>
                                </tr>
                
                                  {
                                        <tr style ={{fontWeight:400}} key={props.job._id}> 
                                            <td>{props.job.parentMat}</td>           
                                            <td>{props.job.testName}</td>
                                            {props.job.Value !==undefined ?<> <td>{props.job.Value[0]}</td>
                                            <td>{RNC}</td>
                                            <td>{props.job.Value[1]}</td>
                                            <td>{props.job.Value[2]}</td>
                                            <td>{props.job.result}</td></>:<p></p>}
                                        </tr>          
                                    }  
                                </tbody>
                            </table>
                            <label style ={{fontWeight:600}}>Result : {props.job.result}</label>
                </div>) 
            
        }else if(props.testName=="Density"){
            const Cal =()=>{
                
                const w1 = document.getElementById(`${props.jobId}-1`).value
                const w2 = document.getElementById(`${props.jobId}-2`).value
                const w3 = document.getElementById(`${props.jobId}-3`).value
                const w4 = document.getElementById(`${props.jobId}-4`).value
                const w5 = document.getElementById(`${props.jobId}-5`).value
                const w6 = document.getElementById(`${props.jobId}-6`).value
                var result1 = eval((w1/(w3-w2))).toFixed(2)
                var result2 = eval((w4)/(w6-w5)).toFixed(2)
                var result = eval((parseFloat(result1)+parseFloat(result2))/2).toFixed(2)
                console.log(result)
                const Value =[w1,w2,w3,result1,w4,w5,w6,result2]
                if(Value[0]!=''){
                props.postCalupdate(props.docrefId, props.jobId,result,Value,props.job);
                }
            }
                return(<div>
                    <label style ={{fontWeight:500}}>Formulae : Ws/(FR-IR)</label>
                    <div>
                    <div className="row m-3">
                                    <div className="col-3 m-1" style ={{fontWeight:400}}>
                                    Weight(Ws)
                                    </div>
                                    
                                    <div className="col-3 m-1" style ={{fontWeight:400}}>
                                    Initial reading(IR)
                                    </div>

                                    <div className="col-3 m-1" style ={{fontWeight:400}}>
                                    Final reading(FR)
                                    </div>
                                    <div className="col-3  m-1" >
                                    <input type="text" className="form-control"  id={`${props.jobId}-1`} placeholder= "value"/>
                                    </div>
                                    <div className="col-3 m-1">
                                    <input type="text" className="form-control" id={`${props.jobId}-2`} placeholder= "value"/>
                                    </div>
                                    <div className="col-3 m-1">
                                    <input type="text" className="form-control" id={`${props.jobId}-3`} placeholder= "value"/>
                                    </div>
                                    <div className="col-3  m-1" >
                                    <input type="text" className="form-control"  id={`${props.jobId}-4`} placeholder= "value"/>
                                    </div>
                                    <div className="col-3 m-1">
                                    <input type="text" className="form-control" id={`${props.jobId}-5`} placeholder= "value"/>
                                    </div>
                                    <div className="col-3 m-1">
                                    <input type="text" className="form-control" id={`${props.jobId}-6`} placeholder= "value"/>
                                    </div>
                                    <br/>
                                
                                    <button className ="col-4 btn btn-primary mt-3" onClick={Cal}>Calculate</button>
                        </div>
                        {console.log(props.job)}
                    {/* <label>Result : (w2-w1)*34.3 : {props.job.result}</label> */}
                    <br/>
    
                    </div>
                    <table className="table">  
                    <tbody style={mystyle}>
                                <tr>
                                    <td>Material</td>
                                    <td>Test Name</td>
                                    <td>Weight(Ws)</td>
                                    <td>IR</td>
                                    <td>FR</td>
                                    <td className="col-3">Ws/(FR-IR)</td>
                                    <td>Average</td>
                                </tr>
                
                                  {<>
                                        <tr style ={{fontWeight:400}} key={props.job._id}> 
                                            <td>{props.job.parentMat}</td>           
                                            <td>{props.job.testName}</td>
                                            {props.job.Value !==undefined ?<> <td>{props.job.Value[0]}</td>
                                            <td>{props.job.Value[1]}</td>
                                            <td>{props.job.Value[2]}</td>
                                            <td>{props.job.Value[3]}</td>
                                            
                                            </>:<p></p>}
                                        </tr>
                                        <tr style ={{fontWeight:400}} > 
                                        <td></td>           
                                        <td></td>
                                        {props.job.Value !==undefined ?<> <td>{props.job.Value[4]}</td>
                                        <td>{props.job.Value[5]}</td>
                                        <td>{props.job.Value[6]}</td>
                                        <td>{props.job.Value[7]}</td>
                                        <p className ="ml-2"> {props.job.result}</p>
                                        
                                        </>
                                        :<p></p>}
                                    </tr>    
                                    </>          
                                    }  
                                    
                                </tbody>
                            </table>
                            <br/>
                            <label style ={{fontWeight:600}}>Result : {props.job.result}</label>
                </div>)
            
        }else if(props.testName=="Soundness by Autoclave"){
            const value = props.order[0].Normal
            console.log(value)
            const RNC = eval(parseInt(value)*4).toFixed(2)
            const Cal =()=>{
                const w1 = document.getElementById(`${props.jobId}-1`).value
                const w2 = document.getElementById(`${props.jobId}-2`).value
                const w3 = document.getElementById(`${props.jobId}-3`).value
                const w4 = document.getElementById(`${props.jobId}-4`).value
                
                var result1 = eval((w2-w1)*0.4).toFixed(2)
                var result2 = eval((w4-w3)*0.4).toFixed(2)
                var result = eval((parseFloat(result1)+parseFloat(result2))/2).toFixed(2)
                console.log(result)
                const Value =[w1,w2,result1,w3,w4,result2]
                if(Value[0]!=''){
                props.postCalupdate(props.docrefId, props.jobId,result,Value,props.job);
                }
            }
                return(<div>
                    {value == undefined ?<p style ={{marginLeft:"30%"}}>Primary Normal consistency not done yet</p>:<p></p>}
                    <label style ={{fontWeight:500}}>Formulae : (FR-IR)*0.4</label>
                    <div>
                    <div className="row m-3">
                                    
                                    
                                    <div className="col-4 m-1" style ={{fontWeight:400}}>
                                    Initial reading(IR)
                                    </div>

                                    <div className="col-4 m-1" style ={{fontWeight:400}}>
                                    Final reading(FR)
                                    </div>
                                    <div className="col-4  m-1" >
                                    <input type="text" className="form-control"  id={`${props.jobId}-1`} placeholder= "value"/>
                                    </div>
                                    <div className="col-4 m-1">
                                    <input type="text" className="form-control" id={`${props.jobId}-2`} placeholder= "value"/>
                                    </div>
                                    <div className="col-4 m-1">
                                    <input type="text" className="form-control" id={`${props.jobId}-3`} placeholder= "value"/>
                                    </div>
                                    <div className="col-4  m-1" >
                                    <input type="text" className="form-control"  id={`${props.jobId}-4`} placeholder= "value"/>
                                    </div>
                                   
                                    <br/>
                                
                                    <button className ="col-4 btn btn-primary mt-3" onClick={Cal}>Calculate</button>
                        </div>
                        {console.log(props.job)}
                    {/* <label>Result : (w2-w1)*34.3 : {props.job.result}</label> */}
                    <br/>
    
                    </div>
                    <table className="table">  
                    <tbody style={mystyle}>
                                <tr>
                                    <td>Material</td>
                                    <td>Test Name</td>
                                    <td>Weight(Ws)</td>
                                    <td>Water(NC*0.78)</td>
                                    <td>IR</td>
                                    <td>FR</td>
                                    <td className="col-3">(FR-IR)*0.4</td>
                                    <td>AE%</td>
                                </tr>
                
                                  {<>
                                        <tr style ={{fontWeight:400}} key={props.job._id}> 
                                            <td>{props.job.parentMat}</td>           
                                            <td>{props.job.testName}</td>
                                            <td>400g</td>
                                            <td>{RNC}</td>
                                            {props.job.Value !==undefined ?<> <td>{props.job.Value[0]}</td>
                                            <td>{props.job.Value[1]}</td>
                                            <td>{props.job.Value[2]}</td>
                                            
                                            </>:<p></p>}
                                        </tr>

                                        <tr style ={{fontWeight:400}} > 
                                        <td></td>           
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        {props.job.Value !==undefined ?<> <td>{props.job.Value[3]}</td>
                                        <td>{props.job.Value[4]}</td>
                                        <td>{props.job.Value[5]}</td>

                                        <p className ="ml-2"> {props.job.result}</p>
                                        
                                        </>
                                        :<p></p>}
                                    </tr>    
                                    </>          
                                    }  
                                    
                                </tbody>
                            </table>
                            <br/>
                            <label style ={{fontWeight:600}}>Result : {props.job.result}</label>
                </div>)
            
        }else if(props.testName=="Soundness by Le Chatlier"){
            const value = props.order[0].Normal
            console.log(value)
            const RNC = eval(parseInt(value)*0.78).toFixed(2)
            const Cal =()=>{
                const w1 = document.getElementById(`${props.jobId}-1`).value
                const w2 = document.getElementById(`${props.jobId}-2`).value
                const w3 = document.getElementById(`${props.jobId}-3`).value
                const w4 = document.getElementById(`${props.jobId}-4`).value
                
                var result1 = eval(w2-w1).toFixed(2)
                var result2 = eval((w4-w3)).toFixed(2)
                var result = eval((parseFloat(result1)+parseFloat(result2))/2).toFixed(2)
                console.log(result)
                const Value =[w1,w2,result1,w3,w4,result2]
                if(Value[0]!=''){
                props.postCalupdate(props.docrefId, props.jobId,result,Value,props.job);
                }
            }
                return(<div>
                    {value == undefined ?<p style ={{marginLeft:"30%"}}>Primary Normal consistency not done yet</p>:<p></p>}
                    <label style ={{fontWeight:500}}>Formulae : (FR-IR)</label>
                    <div>
                    <div className="row m-3">
                                    <div className="col-4 m-1" style ={{fontWeight:400}}>
                                    Initial reading(IR)
                                    </div>

                                    <div className="col-4 m-1" style ={{fontWeight:400}}>
                                    Final reading(FR)
                                    </div>
                                    <div className="col-4  m-1" >
                                    <input type="text" className="form-control"  id={`${props.jobId}-1`} placeholder= "value"/>
                                    </div>
                                    <div className="col-4 m-1">
                                    <input type="text" className="form-control" id={`${props.jobId}-2`} placeholder= "value"/>
                                    </div>
                                    <div className="col-4 m-1">
                                    <input type="text" className="form-control" id={`${props.jobId}-3`} placeholder= "value"/>
                                    </div>
                                    <div className="col-4  m-1" >
                                    <input type="text" className="form-control"  id={`${props.jobId}-4`} placeholder= "value"/>
                                    </div>
                                   
                                    <br/>
                                
                                    <button className ="col-4 btn btn-primary mt-3" onClick={Cal}>Calculate</button>
                        </div>
                        {console.log(props.job)}
                    {/* <label>Result : (w2-w1)*34.3 : {props.job.result}</label> */}
                    <br/>
    
                    </div>
                    <table className="table">  
                    <tbody style={mystyle}>
                                <tr>
                                    <td>Material</td>
                                    <td>Test Name</td>
                                    <td>Weight(Ws)</td>
                                    <td>Water(NC*0.78)</td>
                                    <td>IR</td>
                                    <td>FR</td>
                                    <td className="col-3">(FR-IR)</td>
                                    <td>Average</td>
                                </tr>
                
                                  {<>
                                        <tr style ={{fontWeight:400}} key={props.job._id}> 
                                            <td>{props.job.parentMat}</td>           
                                            <td>{props.job.testName}</td>
                                            <td>100g</td>
                                            <td>{RNC}</td>
                                            {props.job.Value !==undefined ?<> <td>{props.job.Value[0]}</td>
                                            <td>{props.job.Value[1]}</td>
                                            <td>{props.job.Value[2]}</td>
                                            
                                            
                                            </>:<p></p>}
                                        </tr>
                                        <tr style ={{fontWeight:400}} > 
                                        <td></td>           
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        {props.job.Value !==undefined ?<> <td>{props.job.Value[3]}</td>
                                        <td>{props.job.Value[4]}</td>
                                        <td>{props.job.Value[5]}</td>

                                        <p className ="ml-2"> {props.job.result}</p>
                                        
                                        </>
                                        :<p></p>}
                                    </tr>    
                                    </>          
                                    }  
                                    
                                </tbody>
                            </table>
                            <br/>
                            <label style ={{fontWeight:600}}>Result : {props.job.result}</label>
                </div>)
            
    }else if(props.testName == "Fineness by Blains air permeability"){
        const Density = props.order[0].Density

        const Cal =()=>{
                
            const w1 = document.getElementById(`${props.jobId}-1`).value
            const w2 = document.getElementById(`${props.jobId}-2`).value
            const w3 = document.getElementById(`${props.jobId}-3`).value
            const w4 = document.getElementById(`${props.jobId}-4`).value
            const w5 = document.getElementById(`${props.jobId}-5`).value
            const w6 = document.getElementById(`${props.jobId}-6`).value
            const w7 = document.getElementById(`${props.jobId}-7`).value
            const w8 = document.getElementById(`${props.jobId}-8`).value
            
            var result1 = eval((parseFloat(w1)* parseFloat(Density) * (1-parseFloat(w2)))).toFixed(4)
            var result2 = eval((parseFloat(w6)+parseFloat(w7)+parseFloat(w8))/3).toFixed(2)
            console.log(result)
            const Value =[w1,w2,result1,w3,w4,w5,w6,w7,w8,result2]
            var result = eval(parseFloat(w3)*parseFloat(w4)*(Math.sqrt(parseFloat(result2)))/(parseFloat(Density)*Math.sqrt(parseFloat(w5)))).toFixed(1)
            if(Value[0]!=''){
            props.postCalupdate(props.docrefId, props.jobId,result,Value,props.job);
            }
        }
            return(<div>
                <label style ={{fontWeight:500}}></label>
                <div>
                <div className="row m-3">
                                <div className="col-5 m-1" style ={{fontWeight:400}}>
                                Cell Vol(V) cm3
                                </div>
                                
                                {/* <div className="col-3 m-1" style ={{fontWeight:400}}>
                                Density of sample(ρ)
                                </div> */}

                                <div className="col-5 m-1" style ={{fontWeight:400}}>
                                Porosity of sample(e)
                                </div>
                                
                                <div className="col-5  m-1" >
                                <input type="text" className="form-control"  id={`${props.jobId}-1`} placeholder= "value"/>
                                </div>
                                {/* <div className="col-3 m-1">
                                <input type="text" className="form-control" id={`${props.jobId}-2`} placeholder= "value"/>
                                </div> */}
                                <div className="col-5 m-1">
                                <input type="text" className="form-control" id={`${props.jobId}-2`} placeholder= "value"/>
                                </div>


                                <div className="col-2 mt-3" style ={{fontWeight:400}}>
                                CRM Ss (m²/kg)
                                </div>
                                
                                <div className="col-2 mt-3" style ={{fontWeight:400}}>
                                CRM ρs
                                </div>

                                <div className="col-2 mt-3" style ={{fontWeight:400}}>
                                CRM Ts(Sec)
                                </div>
                                <div className="col-2 mt-3" style ={{fontWeight:400}}>
                                T1
                                </div>
                                
                                <div className="col-2 mt-3" style ={{fontWeight:400}}>
                                T2
                                </div>

                                <div className="col-2 mt-3" style ={{fontWeight:400}}>
                                T3
                                </div>
                                <div className="col-2  mt-1" >
                                <input type="text" className="form-control"  id={`${props.jobId}-3`} placeholder= "value"/>
                                </div>
                                <div className="col-2 mt-1">
                                <input type="text" className="form-control" id={`${props.jobId}-4`} placeholder= "value"/>
                                </div>
                                <div className="col-2 mt-1">
                                <input type="text" className="form-control" id={`${props.jobId}-5`} placeholder= "value"/>
                                </div>
                                <div className="col-2  mt-1" >
                                <input type="text" className="form-control"  id={`${props.jobId}-6`} placeholder= "value"/>
                                </div>
                                <div className="col-2 mt-1">
                                <input type="text" className="form-control" id={`${props.jobId}-7`} placeholder= "value"/>
                                </div>
                                <div className="col-2 mt-1">
                                <input type="text" className="form-control" id={`${props.jobId}-8`} placeholder= "value"/>
                                </div>
                                <br/>
                            
                                <button className ="col-4 btn btn-primary mt-3" onClick={Cal}>Calculate</button>
                    </div>
                    {console.log(props.job)}
                {/* <label>Result : (w2-w1)*34.3 : {props.job.result}</label> */}
                <br/>

                </div>
                <table className="table">  
                <tbody style={mystyle}>
                            <tr>
                                <td>Material</td>
                                <td>Test Name</td>
                                <td>Cell Vol(V) cm3</td>
                                <td>Density of sample(ρ)</td>
                                <td>Porosity of sample(e)</td>
                                <td className="col-3">Wt of sample Ws (gms)(V x ρ x (1-e))</td>
                            </tr>
            
                              {<>
                                    <tr style ={{fontWeight:400}} key={props.job._id}> 
                                        <td>{props.job.parentMat}</td>           
                                        <td>{props.job.testName}</td>
                                        {props.job.Value !==undefined ?<> <td>{props.job.Value[0]}</td>
                                        <td>{Density}</td>
                                        <td>{props.job.Value[1]}</td>
                                        <td>{props.job.Value[2]}</td>
                                        
                                        
                                        </>:<p></p>}

                                </tr>    
                                </>          
                                }  
                            </tbody>
                        </table>

                        <br/>
                        <table className="table">  
                <tbody style={mystyle}>
                            <tr>
                                <td>CRM Ss (m²/kg)</td>
                                <td>CRM ρs</td>
                                <td>CRM Ts(Sec)</td>
                                <td>T1</td>
                                <td>T2</td>
                                <td>T3</td>
                                <td>Avg Time(T)</td>
                                <td>(Ssxρsx√T)/(ρx√Ts)</td>
                            </tr>
            
                              {<>
                                    <tr style ={{fontWeight:400}} key={props.job._id}> 
                                        {props.job.Value !==undefined ?<> <td>{props.job.Value[3]}</td>
                                        <td>{props.job.Value[4]}</td>
                                        <td>{props.job.Value[5]}</td>
                                        <td>{props.job.Value[6]}</td>
                                        <td>{props.job.Value[7]}</td>
                                        <td>{props.job.Value[8]}</td>
                                        <td>{props.job.Value[9]}</td>
                                        <td>{props.job.result}</td>

                                        
                                        </>:<p></p>}

                                </tr>    
                                </>          
                                }  
                            </tbody>
                        </table>
                        <label style ={{fontWeight:600}}>Result : {props.job.result}</label>
            </div>)  
    }else if(props.testName=="Compressive Strength"){
        const value = props.order[0].Normal
            console.log(value)
            const RNC = eval(((parseInt(value)/4)+3)*8).toFixed(2)
        
            const Cal1 =()=>{
                
            const w1 = document.getElementById(`${props.jobId}-1`).value
            const w2 = document.getElementById(`${props.jobId}-2`).value
            const w3 = document.getElementById(`${props.jobId}-3`).value
            const w4 = document.getElementById(`${props.jobId}-4`).value
            var result1 = eval((parseFloat(w2)+parseFloat(w3)+parseFloat(w4))/3).toFixed(2)
            var result2 = eval(result1*0.2).toFixed(2)
            var Value1 =[w1,w2,w3,w4,result1,result2]
            const resulti = [result2]
            props.postCalupdate(props.docrefId, props.jobId,resulti,Value1,props.job);
            }

        const Cal2 =()=>{

            const w5 = document.getElementById(`${props.jobId}-5`).value
            const w6 = document.getElementById(`${props.jobId}-6`).value
            const w7 = document.getElementById(`${props.jobId}-7`).value
            const w8 = document.getElementById(`${props.jobId}-8`).value
            var result3 = eval((parseFloat(w6)+parseFloat(w7)+parseFloat(w8))/3).toFixed(2)
            var result4 = eval(result3*0.2).toFixed(2)
            var Value2 =[...props.job.Value,w5,w6,w7,w8,result3,result4]
            const resultii = [...props.job.result,result4]
            props.postCalupdate(props.docrefId, props.jobId,resultii,Value2,props.job);
        }

        // const Cal3 =()=>{

        //     const w9 = document.getElementById(`${props.jobId}-9`).value
        //     const w10 = document.getElementById(`${props.jobId}-10`).value
        //     const w11 = document.getElementById(`${props.jobId}-11`).value
        //     const w12 = document.getElementById(`${props.jobId}-12`).value
        //     var result5 = eval((parseInt(w10)+parseInt(w11)+parseInt(w12))/3).toFixed(2)
        //     var result6 = eval(result5*0.2).toFixed(2)

        //     const Value3 =[...props.job.Value,w9,w10,w11,w12,result5,result6]
        //     var resultiii = [...props.job.result,result6]
        //     props.postCalupdate(props.docrefId, props.jobId,resultiii,Value3,props.job);
            
        // }
            return(<div>
                <label style ={{fontWeight:500}}></label>
                <div>
                <div className="row m-3">
                <div className="col-1 mt-3" style ={{fontWeight:400}}>
                                
                                </div>
                
                        <div className="col-3 mt-3" style ={{fontWeight:400}}>
                                DOT/TOT
                                </div>
                                
                                <div className="col-2 mt-3" style ={{fontWeight:400}}>
                                Cube-1
                                </div>

                                <div className="col-2 mt-3" style ={{fontWeight:400}}>
                                Cube-2
                                </div>
                                <div className="col-4 mt-3" style ={{fontWeight:400}}>
                                Cube-3
                                </div>
                                

                        <div className="col-1 mt-3" style ={{fontWeight:400}}>
                        24 hours
                        </div>
                        
                        
                                
                                <div className="col-3  mt-1" >
                                <input type="Date" className="form-control"  id={`${props.jobId}-1`} placeholder= "date"/>
                                </div>
                                <div className="col-2 mt-1">
                                <input type="text" className="form-control" id={`${props.jobId}-2`} placeholder= "value"/>
                                </div>
                                <div className="col-2 mt-1">
                                <input type="text" className="form-control" id={`${props.jobId}-3`} placeholder= "value"/>
                                </div>
                            
                                <div className="col-2  mt-1" >
                                <input type="text" className="form-control"  id={`${props.jobId}-4`} placeholder= "value"/>
                                </div>
                                <button className ="col-2 btn btn-primary mb-4" onClick={Cal1}>Calculate</button>
                                <div className="col-1 mt-3" style ={{fontWeight:400}}>
                        all
                        </div>
                                <div className="col-3  mt-1" >
                                <input type="Date" className="form-control"  id={`${props.jobId}-5`} placeholder= "date"/>
                                </div>
                                <div className="col-2 mt-1">
                                <input type="text" className="form-control" id={`${props.jobId}-6`} placeholder= "value"/>
                                </div>
                                <div className="col-2 mt-1">
                                <input type="text" className="form-control" id={`${props.jobId}-7`} placeholder= "value"/>
                                </div>
                                <div className="col-2  mt-1" >
                                <input type="text" className="form-control"  id={`${props.jobId}-8`} placeholder= "value"/>
                                </div>
                                <button className ="col-2 btn btn-primary mb-1" onClick={Cal2}>Calculate</button>
                                {/* <div className="col-3  mt-1" >
                                <input type="Date" className="form-control"  id={`${props.jobId}-9`} placeholder= "date"/>
                                </div>
                                <div className="col-2 mt-1">
                                <input type="text" className="form-control" id={`${props.jobId}-10`} placeholder= "value"/>
                                </div>
                                <div className="col-2 mt-1">
                                <input type="text" className="form-control" id={`${props.jobId}-11`} placeholder= "value"/>
                                </div>
                                <div className="col-2  mt-1" >
                                <input type="text" className="form-control"  id={`${props.jobId}-12`} placeholder= "value"/>
                                </div>
                                <button className ="col-2 btn btn-primary" onClick={Cal3}>Calculate</button>
                                 */}
                                <br/>
                            
                                
                    </div>
                    {console.log(props.job)}
                {/* <label>Result : (w2-w1)*34.3 : {props.job.result}</label> */}
                <br/>

                </div>
                <table className="table">  
                <tbody style={mystyle}>
                            <tr>
                                <td>Material</td>
                                <td>Test Name</td>
                                <td>Ws</td>
                                <td>Sand</td>
                                <td>Water((NC%/4+3)8)</td>
                            </tr>
            
                              {<>
                                    <tr style ={{fontWeight:400}} key={props.job._id}> 
                                        <td>{props.job.parentMat}</td>           
                                        <td>{props.job.testName}</td>
                                        <td>200 g</td>
                                        <td>600 g</td>
                                        {props.job.Value !==undefined ?<> <td>{RNC}</td>
                                        
                                        
                                        </>:<p></p>}

                                </tr>    
                                </>          
                                }  
                            </tbody>
                        </table>

                        <br/>
                        <table className="table">  
                <tbody style={mystyle}>
                            <tr>
                                <td>DOT/TOT</td>
                                <td>C.S at</td>
                                <td>Cube-1</td>
                                <td>Cube-2</td>
                                <td>Cube-3</td>
                                <td>Avg (Kn)</td>
                                <td>KN*0.2</td>
                            </tr>
            
                              {<>
                                    <tr style ={{fontWeight:400}} key={props.job._id}> 
                                        {props.job.Value !==undefined ?<> <td>{props.job.Value[0]}</td>
                                        <td>24 ± 1 h</td>
                                        <td>{props.job.Value[1]}</td>
                                        <td>{props.job.Value[2]}</td>
                                        <td>{props.job.Value[3]}</td>
                                        <td>{props.job.Value[4]}</td>
                                        <td>{props.job.Value[5]}</td>
  
                                        </>:<p></p>}

                                </tr>    
                                <tr style ={{fontWeight:400}} key={props.job._id}> 
                                        {props.job.Value != undefined && ((props.job.Value).length > 7 )?<> <td>{props.job.Value[6]}</td>
                                        <td>72 ± 2 h</td>
                                        <td>{props.job.Value[7]}</td>
                                        <td>{props.job.Value[8]}</td>
                                        <td>{props.job.Value[9]}</td>
                                        <td>{props.job.Value[10]}</td>
                                        <td>{props.job.Value[11]}</td>
  
                                        </>:<p></p>}

                                </tr>    
                                <tr style ={{fontWeight:400}} key={props.job._id}> 
                                        {props.job.Value != undefined && ((props.job.Value).length > 12 )?<> <td>{props.job.Value[12]}</td>
                                        <td>167± 2h</td>
                                        <td>{props.job.Value[13]}</td>
                                        <td>{props.job.Value[14]}</td>
                                        <td>{props.job.Value[15]}</td>
                                        <td>{props.job.Value[16]}</td>
                                        <td>{props.job.Value[17]}</td>
                                        </>:<p></p>}
                                </tr>  
                                <tr style ={{fontWeight:400}} key={props.job._id}> 
                                        {props.job.Value != undefined && ((props.job.Value).length > 18 )?<> <td>{props.job.Value[18]}</td>
                                        <td>675 ± 4 h</td>
                                        <td>{props.job.Value[19]}</td>
                                        <td>{props.job.Value[20]}</td>
                                        <td>{props.job.Value[21]}</td>
                                        <td>{props.job.Value[22]}</td>
                                        <td>{props.job.Value[23]}</td>
                                        </>:<p></p>}
                                </tr>  
                                </>          
                                }  
                            </tbody>
                        </table>
                        {/* <label style ={{fontWeight:600}}>Result : {props.job.result}</label> */}
            </div>)  
    }
        // else if(props.testName=="Ferric Oxide"){
        //     if(localStorage.getItem(props.jobId)!=undefined){
        //     const arrayValue = (localStorage.getItem(props.jobId)).split(",")
        //     console.log(arrayValue)
        //     // console.log(myArray)
        //     var i1=arrayValue[3]
        //     var i2 = arrayValue[4]
        //     var i3 = arrayValue[5]
        //     var V = arrayValue[0]
        //     var N = arrayValue[1]
        //     var W = arrayValue[2]
        //     var result = eval((V*79.85*N)/W)
        //     if(localStorage.getItem("formula")=="true"){
        //         props.postCalupdate(props.docrefId, props.jobId,result);
        //     }
        //     var value = true
        //     }
        //     return(<div>
        //         <label>Formulae : (V*79.85*N)/W </label>
        //         {value == true?
        //         <div>
        //         <label>{i1} : {V}</label>
        //         <br/>
        //         <label>{i2} : {N}</label>
        //         <br/>
        //         <label>{i3} : {W}</label>
        //         <br/>
        //         <label>Calculate : (V*79.85*N)/W = {result} </label>
        //         <br/>
        //         <label>Result:{result}</label>
        //         </div>:<p></p>}
        //     </div>)
        // }
    }
}

export default Formula;