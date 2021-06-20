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
        width: '6%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 45,
        paddingTop: 10,
    },
    dia: {
        width: '8%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 45,
        paddingTop: 10,
    },
    invNo: {
        width: '12%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 45,
        paddingTop: 10,
    },
    weightMt: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 45,
        paddingTop: 10,
    },
     yieldStress: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 45,
        paddingTop: 10,
    },
    uts: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 45,
        paddingTop: 10,
    },
     tsYsRatio: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 45,
        paddingTop: 10,
    },
     elongation: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 45,
        paddingTop: 10,
    },
     bendTest: {
        width: '12%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 45,
        paddingTop: 10,
    },
    rebendTest: {
        width: '12%',
        height: 45,
        paddingTop: 10,
    },
    
  });

  const SteelPhyTableHeader = () => (
    <View> 
      <View style={styles.container}>
        <Text style={styles.siNo}>SI.No.</Text>
        <Text style={styles.invNo}>Invoice No.</Text>
        <Text style={styles.dia}>Dia(mm)</Text>
        <Text style={styles.weightMt}>Weight/Meter Kg/m</Text>
        <Text style={styles.yieldStress}>Yield Stress N/mm2</Text>
        <Text style={styles.uts}>U.T.S N/mm2</Text>
        <Text style={styles.tsYsRatio}>TS/YS Ratio</Text>
        <Text style={styles.elongation}>Elongation</Text>
        <Text style={styles.bendTest}>Bend Test</Text>
        <Text style={styles.rebendTest}>Re Bend Test</Text>
     </View>
    </View>
  );
  
  export default SteelPhyTableHeader