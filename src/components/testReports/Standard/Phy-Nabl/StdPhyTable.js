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

const StdPhyTable = ({phyNablJobs}) => (
 
    <Fragment>
    {console.log("phyNablJobs in ResultsTables")}
    {console.log(phyNablJobs)}
    <View style={styles.tableContainer} wrap={false}>
        <StdPhyTableHeader />
        <StdPhyTableRow phyNablJobs={phyNablJobs} />
    </View>
    </Fragment>
  );
  
  export default StdPhyTable