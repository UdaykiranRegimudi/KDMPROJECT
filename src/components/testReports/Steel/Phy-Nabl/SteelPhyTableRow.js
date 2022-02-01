import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
      row: {
        flexDirection: 'row',
        flexWrap: "nowrap",
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        fontStyle: 'bold',
        height: 'auto',
    },
    siNo: {
        width: '6%',
        textAlign: 'center',
        height: 'auto',
    },
    dia:  {
        width: '8%',
        textAlign: 'center',
        paddingLeft: 4,
        height: 'auto',
    },
    invNo: {
        width: '12%',
        textAlign: 'center',
        paddingLeft: 4,
        height: 'auto',
    },
    weightMt: {
        width: '10%',
        textAlign: 'center',
        paddingLeft: 4,
        height: 'auto',
    },
    yieldStress: {
        width: '10%',
        textAlign: 'center',
        paddingLeft: 6,
        height: 'auto',
    },
    uts: {
        width: '10%',
        textAlign: 'center',
        paddingLeft: 6,
        height: 'auto',
    },
    tsYsRatio: {
        width: '10%',
        textAlign: 'center',
        paddingLeft: 6,
        height: 'auto',
    },
    elongation: {
        width: '10%',
        textAlign: 'center',
        paddingLeft: 6,
        height: 'auto',
    },
    bendTest: {
        width: '12%',
        textAlign: 'center',
        paddingLeft: 6,
        height: 'auto',
    },
     rebendTest: {
        width: '12%',
        textAlign: 'center',
        paddingRight: 2,
        paddingLeft: 2,
        height: 'auto',
    },
  });

const SteelPhyTableRow = () => {

     var siNo = 1
     console.log("in TableRow")
    // console.log(phyNablJobs)
      return (
      <Fragment>
        <View wrap={false}>   
           <View style={styles.row}>
                 <Text style={styles.siNo}>{siNo, siNo++}</Text>
                 <Text style={styles.invNo}>0000</Text>
                <Text style={styles.dia}>0mm</Text>
                <Text style={styles.weightMt}>00</Text>
                <Text style={styles.yieldStress}>00</Text>
                <Text style={styles.uts}>00</Text>
                <Text style={styles.tsYsRatio}>00</Text>
                <Text style={styles.elongation}>00</Text>
                <Text style={styles.bendTest}>Satisfactory</Text>
                <Text style={styles.rebendTest}>Satisfactory</Text>
            </View>
        </View>
        </Fragment> 
      )
};
  
export default SteelPhyTableRow

