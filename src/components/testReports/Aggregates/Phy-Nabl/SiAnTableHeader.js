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
    isSieveDesign: {
        width: '20%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
         height: 45,
        paddingTop: 3,
    },
    cumPercent: {
        width: '30%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 45,
        paddingTop: 3,
    },
    spec: {
        width: '50%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 45,
        paddingTop: 3,
    },
    row: {
        flexDirection: 'row',
        borderTopColor: '#bff0fd',
        borderTopWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
        paddingTop: 5
    },
    
  });

  const SiAnTableHeader = () => (
    <View> 
       <View>
        <Text style={styles.row}>SIEVE ANALYSIS</Text>
     </View>
      <View style={styles.container}>
        <Text style={styles.isSieveDesign}>IS Sieve Designation</Text>
        <Text style={styles.cumPercent}>Cumulative Percent</Text>
        <Text style={styles.spec}>Specification as per IS:383-2016 in respect of 20mm nominal size aggregate (% Passing)</Text>
     </View>
    </View>
  );
  
  export default SiAnTableHeader