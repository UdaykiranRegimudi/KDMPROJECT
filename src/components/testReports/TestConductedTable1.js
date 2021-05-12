import React, { Fragment } from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import TestConductedTableHeader from './TestConductedTableHeader'
import TestConductedTableRow1 from './TestConductedTableRow1'

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
});

const TestConductedTable1 = ({props}) => (
 
    <Fragment>
    {console.log("props in ResultsTables")}
    {console.log(props)}
    <View style={styles.tableContainer} wrap={false}>
        <TestConductedTableHeader />
        <TestConductedTableRow1 props={props} />
    </View>
    </Fragment>
  );
  
  export default TestConductedTable1