import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import TestConductedTableHeader from './TestConductedTableHeader'
import TestConductedTableRow2 from './TestConductedTableRow2'

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

const TestConductedTable2 = ({mat2props}) => (
    <View style={styles.tableContainer} wrap={false}>
        <TestConductedTableHeader />
        <TestConductedTableRow2 mat2props={mat2props} />
    </View>
  );
  
  export default TestConductedTable2