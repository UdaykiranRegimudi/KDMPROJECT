import React, { Fragment } from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   reportSignature:{
       marginTop: 5,
       justifyContent: 'flex-end',
       flexDirection: 'row',
       marginRight: 5,
       marginLeft: 5
   }
  });


  const ReportSignature = () => (
   //<Fragment>
       <View wrap={false} style={{height: '90', borderColor: 'red', borderWidth: '1', marginTop: '20'}}>
        <View style={styles.reportSignature}>
            <Text>For KDM ENGINEERS (INDIA) PVT. LTD.,</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 50, marginLeft: 5}}>
            <Text style={{width: '70%'}}>Checked By</Text>
            <Text style={{width: '30%'}}>AUTHORISED SIGNATORY</Text>
        </View>
        </View>
   // </Fragment>
  );
  
  export default ReportSignature