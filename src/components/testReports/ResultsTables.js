import React, { Fragment } from 'react';
import {View, Text, StyleSheet } from '@react-pdf/renderer';
import TestConductedTableHeader from './TestConductedTableHeader'
//import TestConductedTableRow1 from './TestConductedTableRow1'

//const tableRowsCount = 11;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#bff0fd',
        marginBottom: 24
    },
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
    }
});

const ResultsTables = ({mat1propss, props}) => {

    var siNo = 1
    console.log("mat1propss in ResultsTables")
    console.log(mat1propss)
      console.log("props.order in ResultsTables")
    console.log(props.order)

     const tables = mat1propss.map(mat1propss => 
        //<View wrap={false}>   
           <View style={styles.tableContainer} key={mat1propss} wrap={false}>
                <TestConductedTableHeader />
                 <View style={styles.row}>
                    <Text style={styles.siNo}>{siNo, siNo++}</Text>
                </View>
              {/* <TestConductedTableRow1 mat1propss={mat1propss} /> */}
            </View>
       // </View>
      )
    return (<Fragment>{tables}</Fragment> ) 
     };
  
  export default ResultsTables