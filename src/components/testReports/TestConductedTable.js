import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import TestConductedTableHeader from './TestConductedTableHeader'
import TestConductedTableRow from './TestConductedTableRow'

const tableRowsCount = 11;

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

  const TestConductedTable = ({props}) => (
    <View style={styles.tableContainer} wrap={false}>
        <TestConductedTableHeader />
        <TestConductedTableRow props={props} />
    </View>
  );
  
  export default TestConductedTable