import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexwrap: 'nowrap',
        borderBottomColor: '#bff0fd',
        backgroundColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 45,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
    },
    siNo: {
        width: '7%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 45,
        paddingTop: 15,
    },
    testConducted: {
        width: '23%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 45,
        paddingTop: 15,
    },
     sample: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 45,
        paddingTop: 15,
    },
    results: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 45,
        paddingTop: 15,
    },
     testMethod: {
        width: '20%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 45,
        paddingTop: 15,
    },
    requirements: {
        width: '30%',
        height: 45,
        paddingTop: 15,
    },
    
  });

  const AggrPhyTableHeader = () => (
    <View> 
      <View style={styles.container}>
        <Text style={styles.siNo}>SI.No.</Text>
        <Text style={styles.testConducted}>Test Conducted</Text>
        <Text style={styles.sample}>Sample Id</Text>
        <Text style={styles.results}>Results</Text>
        <Text style={styles.testMethod}>Test Method</Text>
        <Text style={styles.requirements}>Requirements</Text>
     </View>
    </View>
  );
  
  export default AggrPhyTableHeader