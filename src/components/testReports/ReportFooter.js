import React, { Fragment } from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#000000'
const styles = StyleSheet.create({
   reportFooter:{
       marginTop: 2,
       borderTopColor: borderColor,
       borderTopWidth: 1,
       fontSize: 10,
       textAlign: 'center',
       position: 'absolute',
       bottom: 20,
   },
   pageNumbers: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: 'center'
  },
  });


  const ReportFooter = () => (
   <Fragment>
       <View style={styles.reportFooter}>
        <View style={{borderColor: 'black', borderTopWidth: 1}}></View>
        <View>
            <Text>D. No. 8-12-96/S/401, Sri Ramana Colony, Karmanghat, SaroorNagar(M), Hyderabad - 500 079</Text>
        </View>
        <View>
            <Text>Cell: +91-9912806685, 9912915533, Email: contactkdmei@gmail.com, Website: www.kdmengineers.com</Text>
        </View>
        </View>
    </Fragment>
  );
  
  export default ReportFooter