import React, { Fragment } from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import StdPhyTableHeader from './StdPhyTableHeader'
import StdPhyTableRow from './StdPhyTableRow'

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

const StdPhyTable = ({phyNonNablJobs}) => (
 
    <Fragment>
    {console.log("phyNonNablJobs in ResultsTables")}
    {console.log(phyNonNablJobs)}
    <View style={styles.tableContainer} wrap={false}>
        <StdPhyTableHeader />
        <StdPhyTableRow phyNonNablJobs={phyNonNablJobs} />
    </View>
    </Fragment>
  );
  
  export default StdPhyTable