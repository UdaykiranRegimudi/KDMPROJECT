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

const StdChemTable = ({chemNablJobs}) => (
 
    <Fragment>
    {console.log("chemNablJobs in ResultsTables")}
    {console.log(chemNablJobs)}
    <View style={styles.tableContainer} wrap={false}>
        <StdChemTableHeader />
        <StdChemTableRow chemNablJobs={chemNablJobs} />
    </View>
    </Fragment>
  );
  
  export default StdChemTable