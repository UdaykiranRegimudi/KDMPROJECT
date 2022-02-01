import React, { Fragment } from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import SteelPhyTableHeader from './SteelPhyTableHeader'
import SteelPhyTableRow from './SteelPhyTableRow'

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

const SteelPhyTable = ({matPhyJobs}) => (
 
    <Fragment>
    {console.log("matPhyJobs in ResultsTables")}
    {console.log(matPhyJobs)}
    <View style={styles.tableContainer} wrap={false}>
        <SteelPhyTableHeader />
        <SteelPhyTableRow matPhyJobs={matPhyJobs} />
    </View>
    </Fragment>
  );
  
  export default SteelPhyTable