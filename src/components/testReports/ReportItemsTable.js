import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableRow from './InvoiceTableRow'
import InvoiceTableBlankSpace from './InvoiceTableBlankSpace'
import InvoiceTableFooter from './InvoiceTableFooter'

const tableRowsCount = 11;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#bff0fd',
    },
});

  const ReportItemsTable = ({report}) => (
    <View style={styles.tableContainer}>
        <InvoiceTableHeader />
       {/*  <InvoiceTableRow items={report.orderJobs} /> */}
        <InvoiceTableBlankSpace rowsCount={ tableRowsCount - report.items.length} />
       {/*<InvoiceTableFooter items={report.items} /> */}
    </View>
  );
  
  export default ReportItemsTable