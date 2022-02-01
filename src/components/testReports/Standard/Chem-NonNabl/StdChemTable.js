import React, { Fragment } from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import StdChemTableHeader from './StdChemTableHeader'
import StdChemTableRow from './StdChemTableRow'

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

const StdChemTable = ({chemNonNablJobs}) => (
 
    <Fragment>
    {console.log("chemNonNablJobs in ResultsTables")}
    {console.log(chemNonNablJobs)}
    <View style={styles.tableContainer} wrap={false}>
        <StdChemTableHeader />
        <StdChemTableRow chemNonNablJobs={chemNonNablJobs} />
    </View>
    </Fragment>
  );
  
  export default StdChemTable