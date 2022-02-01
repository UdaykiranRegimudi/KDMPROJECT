import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   reportDisclaimer: {
       marginTop: 12,
       fontSize: 10
   },
   reportNotes: {
        flexDirection: 'row',
        fontSize: 10
   }
  });


  const ReportDisclaimer = () => (
   //<Fragment>
       <View wrap={false}>
            <View style={styles.reportDisclaimer}>
                <Text>*As furnished by the customer</Text>
            </View>
            <View style={styles.reportNotes}>
                <Text style={{width: '10%'}}>Note: </Text>
                <Text style={{width: '80%'}}>1. The results relate to the samples supplied by the customer.</Text>
            </View>
            <View style={styles.reportNotes}>
                <Text style={{width: '10%'}}></Text>
                <Text style={{width: '80%'}}>2. Report shall not be reproduced, except in full, without the written approval of the laboratory.</Text>
            </View>
            <View style={styles.reportNotes}>
                <Text style={{width: '10%'}}></Text>
                <Text style={{width: '80%'}}>3. Any correction invalidates this report.</Text>
            </View>
            <View style={styles.reportNotes}>
                <Text style={{width: '10%'}}></Text>
                <Text style={{width: '80%'}}>4. Retention period of samples is 15days from the date of issue of test report, then it will dispose off.</Text>
            </View>
            <View style={styles.reportNotes}>
                <Text>Disclaimer: Laboratory is not liable for the Information (data) provided by Customers.</Text>
            </View>
        </View>
   // </Fragment>
  );
  
  export default ReportDisclaimer