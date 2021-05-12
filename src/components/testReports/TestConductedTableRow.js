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
        width: '23%',
        textAlign: 'left',
        //borderRightColor: borderColor,
        //borderRightWidth: 1,
        paddingLeft: 4,
        height: 'auto',
    },
    sample: {
        width: '10%',
        textAlign: 'left',
        //borderRightColor: borderColor,
        //borderRightWidth: 1,
        paddingLeft: 4,
        height: 'auto',
    },
    results: {
        width: '10%',
        textAlign: 'left',
        //borderRightColor: borderColor,
        //borderRightWidth: 1,
        paddingLeft: 4,
        height: 'auto',
    },
    testMethod: {
        width: '20%',
        textAlign: 'left',
       //borderRightColor: borderColor,
       //borderRightWidth: 1,
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

const TestConductedTableRow = ({props2}) => {

     var siNo = 1
     {console.log("props2 in TableRow")}
     {console.log(props2)}
     const rows = props2.map(prop2 => 
        <View wrap={false}>   
           <View style={styles.row} key={prop2.orderId}>
                <Text style={styles.siNo}>{siNo, siNo++}</Text>
                <Text style={styles.testConducted}>{prop2.testName}</Text>
                <Text style={styles.sample}>{prop2.sample}</Text>
                <Text style={styles.results}>{prop2.result}</Text>
                <Text style={styles.testMethod}>{prop2.testMethod}</Text>
                <Text style={styles.requirements}>{prop2.reqmt}</Text>
            </View>
        </View>
      )
    return (<Fragment>{rows}</Fragment> ) 
};
  
export default TestConductedTableRow