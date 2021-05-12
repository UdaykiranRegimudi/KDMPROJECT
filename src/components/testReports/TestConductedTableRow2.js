import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

//const borderColor = '#90e5fc'
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

const TestConductedTableRow2 = ({mat2props}) => {

     var siNo = 1
     console.log("props2 in TableRow")
     console.log(mat2props)
     const rows = mat2props.map(mat2prop => 
        <View wrap={false}>   
           <View style={styles.row} key={mat2prop.orderId}>
                <Text style={styles.siNo}>{siNo, siNo++}</Text>
                <Text style={styles.testConducted}>{mat2prop.testName}</Text>
                <Text style={styles.sample}>{mat2prop.sample}</Text>
                <Text style={styles.results}>{mat2prop.result}</Text>
                <Text style={styles.testMethod}>{mat2prop.testMethod}</Text>
                <Text style={styles.requirements}>{mat2prop.reqmt}</Text>
            </View>
        </View>
      )
    return (<Fragment>{rows}</Fragment> ) 
};
  
export default TestConductedTableRow2