import React, { Fragment } from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import AggrPhyTableHeader from './AggrPhyTableHeader'
import AggrPhyTableRow from './AggrPhyTableRow'

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

const AggrPhyTable = ({phyNablNonSAJobs}) => (
 
    <Fragment>
    {console.log("phyNablNonSAJobs in ResultsTables")}
    {console.log(phyNablNonSAJobs)}
    <View style={styles.tableContainer} wrap={false}>
        <AggrPhyTableHeader />
        <AggrPhyTableRow phyNablNonSAJobs={phyNablNonSAJobs} />
    </View>
    </Fragment>
  );
  
  export default AggrPhyTable