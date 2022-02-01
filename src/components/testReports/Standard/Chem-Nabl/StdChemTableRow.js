import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
      row: {
        flexDirection: 'row',
        flexWrap: "nowrap",
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        fontStyle: 'bold',
        height: 'auto',
        marginTop:"5px"
    },
    siNo: {
        width: '7%',
        textAlign: 'center',
        height: 'auto',
    },
    testConducted: {
        width: '23%',
        textAlign: 'left',
        paddingLeft: 4,
        height: 'auto',
    },
    sample: {
        width: '10%',
        textAlign: 'left',
        paddingLeft: 4,
        height: 'auto',
    },
    results: {
        width: '10%',
        textAlign: 'left',
        paddingLeft: 4,
        height: 'auto',
    },
    testMethod: {
        width: '20%',
        textAlign: 'left',
        paddingLeft: 6,
        height: 'auto',
    },
     requirements: {
        width: '30%',
        textAlign: 'left',
        paddingRight: 2,
        paddingLeft: 2,
        height: 'auto',
    },
  });

const StdChemTableRow = ({chemNablJobs,props}) => {

    const order = props.order
    let LSF,AF;
    if(order.Ferric !=undefined && order.Silica !=undefined && order.Alumina !=undefined && order.Sul != undefined && order.Calcium !=undefined ){
       LSF = eval((parseInt(order.Calcium) - 0.7*parseInt(order.Sul))/(2.8*parseInt(order.Silica) + 1.2*parseInt(order.Alumina)+ 0.65*parseInt(order.Ferric))).toFixed(2)
    }else{
     LSF = 0
    }

    if(order.Ferric != undefined && order.Alumina != undefined){
      AF = eval(parseInt(order.Alumina)/parseInt(order.Ferric)).toFixed(2)
    }else{
      AF = 0
    }
     var siNo = 1
     console.log("in TableRow")
     console.log(chemNablJobs)

     const rows = chemNablJobs.map(chemNablJob => 
        //  if(chemNablJob.testName !="Ferric Oxide" || chemNablJob.testName !="Alumina" || chemNablJob.testName !="Calcium Oxide" || chemNablJob.testName !="Silica content"){
        <View wrap={false}>   
           <View style={styles.row} key={chemNablJob.jobId}>
                <Text style={styles.siNo}>{siNo, siNo++}</Text>
                <Text style={styles.testConducted}>{chemNablJob.testName}</Text>
                {/* <Text style={styles.sample}>{chemNablJob.sample}</Text> */}
                <Text style={styles.results}>{chemNablJob.result}</Text>
                <Text style={styles.testMethod}>{chemNablJob.testMethod}</Text>
                <Text style={styles.requirements}>{chemNablJob.reqmt}</Text>
            </View>
        </View>
      )
    return (<Fragment>{rows}
    {chemNablJobs.length >= 5?<View wrap={false}>   
           <View style={styles.row} >
                <Text style={styles.siNo}>{siNo, siNo++}</Text>
                <Text style={styles.testConducted}>Ratio of % of Lime{"\n"}
                to % of Silica,{"\n"}
                 Alumina and Iron {"\n"}Oxide, when calcu-{"\n"}lated by the
formula:{"\n"}
((CaO – 0.7SO3){"\n"}/(2.8SiO2 + 1.2Al2O3 + 0.65Fe2O3))</Text>
                {/* <Text style={styles.sample}></Text> */}
                <Text style={styles.results}>{LSF == 0? "progress":LSF}</Text>
                <Text style={styles.testMethod}></Text>
                <Text style={styles.requirements}>Not greater than 1.02
And not less than 0.66</Text>
            </View>
            <View style={styles.row} >
                <Text style={styles.siNo}>{siNo, siNo++}</Text>
                <Text style={styles.testConducted}>Ratio of % of Alumina{"\n"} to Iron Oxide</Text>
                {/* <Text style={styles.sample}></Text> */}
                <Text style={styles.results}>{AF == 0 ? "progress":AF}</Text>
                <Text style={styles.testMethod}></Text>
                <Text style={styles.requirements}>Not less than 0.66</Text>
            </View>
        </View>:<></>}
    </Fragment> ) 
};
  
export default StdChemTableRow