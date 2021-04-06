import React, { Fragment } from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   reportSignature:{
       marginTop: 7,
       justifyContent: 'flex-end',
       flexDirection: 'row'
   }
  });


  const ReportSignature = () => (
   <Fragment>
       <View>
        <View style={styles.reportSignature}>
            <Text>For KDM ENGINEERS (INDIA) PVT. LTD.,</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 40}}>
            <Text style={{width: '70%'}}>Checked By</Text>
            <Text style={{width: '30%'}}>AUTHORISED SIGNATORY</Text>
        </View>
        </View>
    </Fragment>
  );
  
  export default ReportSignature