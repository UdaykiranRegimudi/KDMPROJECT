import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';
import SiAnTableHeader from './SiAnTableHeader'
import AggrPhyTable from './AggrPhyTable'

const styles = StyleSheet.create({
         rowHeader: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
        backgroundColor: '#bff0fd',
        borderTopColor: '#bff0fd',
        borderTopWidth: 1,
    },
      row: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
    },
    rowHead: {
        flexDirection: 'row',
        borderTopColor: '#bff0fd',
        borderTopWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
        paddingTop: 5
    },
    isSieveDesign: {
        width: '20%',
        textAlign: 'center',
        borderRightColor: '#bff0fd',
        borderRightWidth: 1,
        paddingLeft: 8,
    },
    retained: {
        width: '15%',
        borderRightColor: '#bff0fd',
        borderRightWidth: 1,
        textAlign: 'center',
        paddingRight: 8,
    },
     passing: {
        width: '15%',
        borderRightColor: '#bff0fd',
        borderRightWidth: 1,
        textAlign: 'center',
        paddingRight: 8,
    },
    graded: {
        width: '25%',
        borderRightColor: '#bff0fd',
        borderRightWidth: 1,
        textAlign: 'center',
        paddingRight: 8,
    },
    singleSize: {
        width: '25%',
        textAlign: 'center',
        paddingRight: 8,
    },
  });

const SiAnTableRow = ({phyNablSAJobs, phyNablNonSAJobs}) => {

     var siNo = 1
     console.log("in TableRow")
     console.log(phyNablSAJobs)

     const rows = phyNablSAJobs.map(phyNablSAJob => 
       ( 
        <Fragment>
        <View key={phyNablSAJob.sample}>
            <View>
            <SiAnTableHeader />
            <View style={styles.rowHeader}>
                <Text style={styles.isSieveDesign}>Size</Text>
                <Text style={styles.retained}>Retained</Text>
                <Text style={styles.passing}>Passing</Text>
                <Text style={styles.graded}>Graded</Text>
                <Text style={styles.singleSize}>Single size</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.isSieveDesign}>40.0mm</Text>
                <Text style={styles.retained}>0</Text>
                <Text style={styles.passing}>100</Text>
                <Text style={styles.graded}>100</Text>
                <Text style={styles.singleSize}>100</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.isSieveDesign}>20.0mm</Text>
                <Text style={styles.retained}>7.40</Text>
                <Text style={styles.passing}>92.60</Text>
                <Text style={styles.graded}>90-100</Text>
                <Text style={styles.singleSize}>85-100</Text>
            </View>
             <View style={styles.row}>
                <Text style={styles.isSieveDesign}>10.0mm</Text>
                <Text style={styles.retained}>98.60</Text>
                <Text style={styles.passing}>1.40</Text>
                <Text style={styles.graded}>25-55</Text>
                <Text style={styles.singleSize}>0-20</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.isSieveDesign}>4.75mm</Text>
                <Text style={styles.retained}>99.85</Text>
                <Text style={styles.passing}>0.15</Text>
                <Text style={styles.graded}>0-10</Text>
                <Text style={styles.singleSize}>0-5</Text>
            </View>
            <View style={styles.row}>
                <Text>Remarks:- The above tested sample confirms to the requirements of Single size aggregate as per IS: 383-2016</Text>
            </View>
            </View>
             <View style={{height: '10'}} fixed>
                <Text></Text>
             </View>
        </View>
        
        </Fragment>
       )
      )
    return (<Fragment>{rows}</Fragment> ) 
};
  
export default SiAnTableRow