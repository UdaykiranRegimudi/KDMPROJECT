import React, { Fragment } from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import SiAnTableHeader from './SiAnTableHeader'
import SiAnTableRow from './SiAnTableRow'

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

const SiAnTable = ({phyNablSAJobs, phyNablNonSAJobs}) => (
 
    <Fragment>
    {console.log("phyNablSAJobs in ResultsTables")}
    {console.log(phyNablSAJobs)}
    <View style={styles.tableContainer} wrap={false}>
       {/* <SiAnTableHeader /> */}
        <SiAnTableRow phyNablSAJobs={phyNablSAJobs} phyNablNonSAJobs={phyNablNonSAJobs} />
    </View>
    </Fragment>
  );
  
  export default SiAnTable