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
    dia: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 45,
        paddingTop: 15,
    },
    weightMt: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 45,
        paddingTop: 15,
    },
     yieldStress: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 45,
        paddingTop: 15,
    },
    uts: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 45,
        paddingTop: 15,
    },
     tsYsRatio: {
        width: '20%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 45,
        paddingTop: 15,
    },
     elongation: {
        width: '20%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 45,
        paddingTop: 15,
    },
     bendTest: {
        width: '20%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 45,
        paddingTop: 15,
    },
    rebendTest: {
        width: '30%',
        height: 45,
        paddingTop: 15,
    },
    
  });

  const SteelPhyTableHeader = () => (
    <View> 
      <View style={styles.container}>
        <Text style={styles.dia}>Dia(mm)</Text>
        <Text style={styles.weightMt}>Weight/Meter Kg/m</Text>
        <Text style={styles.yieldStress}>Yield Stress N/mm2</Text>
        <Text style={styles.uts}>U.T.S N/mm2</Text>
        <Text style={styles.tsYsRatio}>TS/YS Ratio</Text>
        <Text style={styles.elongation}>Elongation</Text>
        <Text style={styles.bendTest}>Bend Test</Text>
        <Text style={styles.rebendTest}>Re bend Test</Text>
     </View>
    </View>
  );
  
  export default SteelPhyTableHeader