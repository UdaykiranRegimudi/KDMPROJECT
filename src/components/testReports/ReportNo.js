import React, { Fragment } from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    reportRefDateContainer: {
        marginTop: 10,
        flexDirection: 'row'
    },
    reportTitle:{
        fontSize: 10,
        marginTop: 10,
        textAlign: 'center',
        textDecoration: 'underline',
        textTransform: 'uppercase',
        marginBottom: 10
    }
  });

  var today = new Date()
  var DateId = '' + today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()

  const ReportNo = ({report, props}) => (
     
        <Fragment>
            {console.log(props)}
            <View style={styles.reportRefDateContainer}>
                <Text style={{width: '85%'}}>REF: {props.order.orderId}</Text>
                <Text>Date: </Text>
                <Text>{DateId}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{width: '85%'}}>To</Text>
                <Text>TC..................</Text>
            </View>
            <View>
                <Text>{props.order.customerName}</Text>
                <Text>{props.order.customerAddress}</Text>
            </View>

            <View style={styles.reportTitle}> 
                <Text>TEST REPORT ON {props.order.subject}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                 <Text style={{width: '30%'}}>Source</Text>
                 <Text style={{width: '10%'}}>:</Text>
                 <Text style={{width: '60%'}}>{props.order.source}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                 <Text style={{width: '30%'}}>Technical Reference</Text>
                 <Text style={{width: '10%'}}>:</Text>
                 <Text style={{width: '60%'}}>{props.order.techRef}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                 <Text style={{width: '30%'}}>Customer Reference </Text>
                 <Text style={{width: '10%'}}>:</Text>
                 <Text style={{width: '60%'}}>{props.order.customerReference}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                 <Text style={{width: '30%'}}>Work/Job</Text>
                 <Text style={{width: '10%'}}>:</Text>
                 <Text style={{width: '60%'}}>{props.order.workJob}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                 <Text style={{width: '30%'}}>Sample</Text>
                 <Text style={{width: '10%'}}>:</Text>
                 <Text style={{width: '60%'}}>{props.order.sample}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                 <Text style={{width: '30%'}}>Material Received On </Text>
                 <Text style={{width: '10%'}}>:</Text>
                 <Text style={{width: '60%'}}>{new Date(props.order.createdAt.toDate()).toUTCString()}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                 <Text style={{width: '30%'}}>Period of Test </Text>
                 <Text style={{width: '10%'}}>:</Text>
                 <Text style={{width: '60%'}}>{props.order.perOfTest}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                 <Text style={{width: '30%'}}>Condition of Samples</Text>
                 <Text style={{width: '10%'}}>:</Text>
                 <Text style={{width: '60%'}}>{props.order.condOfSamp}</Text>
            </View>

        </Fragment>
  );
  
  export default ReportNo