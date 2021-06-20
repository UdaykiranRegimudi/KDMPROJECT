import React, { Fragment } from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import AggrChemTableHeader from './AggrChemTableHeader'
import AggrChemTableRow from './AggrChemTableRow'

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

const AggrChemTable = ({chemNablJobs}) => (
 
    <Fragment>
    {console.log("chemNablJobs in ResultsTables")}
    {console.log(chemNablJobs)}
    <View style={styles.tableContainer} wrap={false}>
        <AggrChemTableHeader />
        <AggrChemTableRow chemNablJobs={chemNablJobs} />
    </View>
    </Fragment>
  );
  
  export default AggrChemTable