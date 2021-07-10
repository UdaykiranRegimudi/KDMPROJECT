import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';
//import InvoiceTableRowContent from './InvoiceTableRowContent'

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
    },
    siNo: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
    },
    particulars: {
        width: '40%',
        textAlign: 'left',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
    },
    qty: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
    },
    rate: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
    },
    amount: {
        width: '20%',
        textAlign: 'right',
        paddingRight: 8,
    },
  });

const InvoiceTableRow = ({invData}) => {

 var siNo = 1

const rows = invData.mats.map(mat => mat.invDetails.map(invDetail =>
       <View style={styles.row} key={invData.orderId}>
            <Text style={styles.siNo}>{siNo, siNo++}</Text>
            <Text style={styles.particulars}>{invDetail.matName}-{invDetail.param}</Text>
            <Text style={styles.qty}>{invDetail.sampCount}</Text>
            <Text style={styles.rate}>{invDetail.price}</Text>
            <Text style={styles.amount}>{(invDetail.sampCount * invDetail.price).toFixed(2)}</Text>
        </View>
        ) 
    )
    return (<Fragment>{rows}</Fragment> )
};
  
export default InvoiceTableRow