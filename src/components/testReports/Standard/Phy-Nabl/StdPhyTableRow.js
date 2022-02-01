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
        marginRight:"8px",
    },
     requirements: {
        width: '30%',
        textAlign: 'left',
        paddingRight: 2,
        paddingLeft: 2,
        height: 'auto',
    },
  });

const StdPhyTableRow = ({phyNablJobs}) => {

     var siNo = 1
     console.log("in TableRow")
     console.log(phyNablJobs)
     

     const rows = phyNablJobs.map(phyNablJob => {
        if(phyNablJob.testName == "Compressive Strength"){
            return(<View wrap={false}>   
                <View style={styles.row} key={phyNablJob.jobId}>
                     <Text style={styles.siNo}>{siNo, siNo++}</Text>
                     <Text style={styles.testConducted}>{phyNablJob.testName}{"\n"}
                     a) 72 ± 1h ( average of
                       three results){"\n"}
                     b) 168 ±2123
                      2h ( average of
                       three results){"\n"}
                     c) 672 ± 4h ( average of
                       three results)</Text>
                     {/* <Text style={styles.sample}>{phyNablJob.sample}</Text> */}
                     <Text style={styles.results}>{phyNablJob.result[1]}{"\n"}
                     {"\n"}
                     {phyNablJob.result[2] == 0 ? "progess" : phyNablJob.result[2]}{"\n"}
                     {"\n"}
                     {phyNablJob.result[3] == 0 ? "progress":phyNablJob.result[3]}{"\n"}</Text>
                     <Text style={styles.testMethod}>{phyNablJob.testMethod}</Text>
                     <Text style={styles.requirements}>{phyNablJob.reqmt}</Text>
                 </View>
             </View>)
        }else{
        return(<View wrap={false}>   
           <View style={styles.row} key={phyNablJob.jobId}>
                <Text style={styles.siNo}>{siNo, siNo++}</Text>
                <Text style={styles.testConducted}>{phyNablJob.testName}</Text>
                {/* <Text style={styles.sample}>{phyNablJob.sample}</Text> */}
                <Text style={styles.results}>{phyNablJob.result}</Text>
                <Text style={styles.testMethod}>{phyNablJob.testMethod}</Text>
                <Text style={styles.requirements}>{phyNablJob.reqmt}</Text>
            </View>
        </View>)
        }
    })
    return (<Fragment>{rows}</Fragment> ) 
};
  
export default StdPhyTableRow