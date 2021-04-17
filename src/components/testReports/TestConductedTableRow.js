import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
      row: {
        flexDirection: 'row',
        flexWrap: "nowrap",
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        //borderColor: 'blue',
        //borderWidth: 1,
        alignItems: 'center',
        fontStyle: 'bold',
        height: 'auto',
    },
    siNo: {
        width: '7%',
        textAlign: 'center',
       //borderRightColor: borderColor,
       //borderRightWidth: 1,
        //paddingLeft: 4,
        height: 'auto',
    },
    testConducted: {
        width: '30%',
        textAlign: 'left',
        //borderRightColor: borderColor,
        //borderRightWidth: 1,
        paddingLeft: 4,
        height: 'auto',
    },
    results: {
        width: '8%',
        textAlign: 'left',
        //borderRightColor: borderColor,
        //borderRightWidth: 1,
        paddingLeft: 4,
        height: 'auto',
    },
    testMethod: {
        width: '15%',
        textAlign: 'left',
       //borderRightColor: borderColor,
       //borderRightWidth: 1,
        paddingLeft: 6,
        height: 'auto',
    },
     requirements: {
        width: '40%',
        textAlign: 'left',
        paddingRight: 2,
        paddingLeft: 2,
        height: 'auto',
    },
  });

const TestConductedTableRow = ({props}) => {

     var siNo = 1
     const rows = props.orderJobs.map( orderJob => 
        <View wrap={false}>   
           <View style={styles.row} key={orderJob.orderId}>
                <Text style={styles.siNo}>{siNo, siNo++}</Text>
                <Text style={styles.testConducted}>{orderJob.testName}</Text>
                <Text style={styles.results}>{orderJob.result}</Text>
                <Text style={styles.testMethod}>{orderJob.testMethod}</Text>
                <Text style={styles.requirements}>{orderJob.reqmt}</Text>
            </View>
        </View>
    )
    return (<Fragment>{rows}</Fragment> ) 
};
  
export default TestConductedTableRow