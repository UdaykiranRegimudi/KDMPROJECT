import React, { Fragment } from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    invCustDataContainer: {
        marginTop: 10,
        flexDirection: 'row',
        marginLeft: 5
    },
     invoiceTitle:{
        fontSize: 10,
        marginTop: 5,
        textAlign: 'center',
        textDecoration: 'underline',
        textTransform: 'uppercase',
        fontStyle: 'bold',
        marginBottom: 5,
    },
    invoiceTable: {
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        borderTopColor: '#000000',
        borderTopWidth: 1,
        borderRightColor: '#000000',
        borderRightWidth: 1,
        borderLeftColor: '#000000',
        borderLeftWidth: 1,
    }
    
  });

   var today = new Date()
  var DateId = '' + today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()

  const InvoiceNo = ({props}) => (
        <Fragment>
             <View>
                <Text style={styles.invoiceTitle}>{props.invTypeSelected =="Proforma Invoice"?"Proforma Invoice":"Tax Invoice"}</Text>
            </View>
            <View style={styles.invCustDataContainer}>
                <Text style={{width: '15%'}}>Buyer Name: </Text>
                <Text style={{width: '50%'}}>{props.order.customerName}</Text>
                
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{width: '15%', marginLeft: 5}}>Address: </Text>
                <Text style={{width: '50%', height: 40}}>{props.order.customerAddress}</Text>
                
            </View>
             <View style={{flexDirection: 'row'}}>
                <Text style={{width: '15%', marginLeft: 5}}>Project: </Text>
                <Text style={{width: '45%'}}>{props.order.projectName}</Text>
                <Text style={{width: '12%'}}>Invoice No - </Text>
                <Text style={{width: '25%'}}>PI/258</Text>
            </View>
             <View style={{flexDirection: 'row'}}>
                <Text style={{width: '15%', marginLeft: 5}}>GSTIN: </Text>
                <Text style={{width: '45%'}}>36AAHCA0369E1ZW</Text>
                <Text style={{width: '12%'}}>Invoice Dt - </Text>
                <Text style={{width: '25%'}}>{DateId}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{width: '15%', marginLeft: 5}}>Ref: </Text>
                <Text style={{width: '45%'}}>{props.order.customerReference}</Text>
                 <Text style={{width: '12%'}}>Order No - </Text>
                 <Text style={{width: '25%'}}>{props.order.orderId}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{width: '15%', marginLeft: 5}}>Subject: </Text> 
                <Text style={{width: '45%'}}>{props.order.subject}</Text>
                <Text style={{width: '12%'}}>Order Dt - </Text>
                <Text style={{width: '25%'}}>{new Date(props.order.createdAt.toDate()).toUTCString()}</Text>
            </View>
        </Fragment>
  );
  
  export default InvoiceNo