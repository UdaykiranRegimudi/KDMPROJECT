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

     const rows = phyNablJobs.map(phyNablJob => 
        <View wrap={false}>   
           <View style={styles.row} key={phyNablJob.jobId}>
                <Text style={styles.siNo}>{siNo, siNo++}</Text>
                <Text style={styles.testConducted}>{phyNablJob.testName}</Text>
                <Text style={styles.sample}>{phyNablJob.sample}</Text>
                <Text style={styles.results}>{phyNablJob.result}</Text>
                <Text style={styles.testMethod}>{phyNablJob.testMethod}</Text>
                <Text style={styles.requirements}>{phyNablJob.reqmt}</Text>
            </View>
        </View>
      )
    return (<Fragment>{rows}</Fragment> ) 
};
  
export default StdPhyTableRow