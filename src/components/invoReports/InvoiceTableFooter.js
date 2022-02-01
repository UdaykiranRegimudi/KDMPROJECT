import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontSize: 11,
        fontStyle: 'bold',
    },
    description: {
        width: '65%',
        textAlign: 'right',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        borderLefttWidth: 1,
        borderLeftColor: borderColor,
        paddingRight: 8,
    },
    percentage: {
        width: '15%',
        textAlign: 'right',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingRight: 8,
    },
    total: {
        width: '20%',
        textAlign: 'right',
        borderLefttWidth: 1,
        borderLeftColor: borderColor,
        paddingRight: 8,

    },
  });


const InvoiceTableFooter = ({invData}) => {
    let total = invData.mats.map(mat => mat.invDetails.map(invDetail => invDetail.sampCount * invDetail.price).reduce((accumulator, currentValue) => parseFloat(accumulator) + parseFloat(currentValue) , 0) )
console.log(total)
     total =   total.reduce((accumulator, currentValue) => parseFloat(accumulator) + parseFloat(currentValue) , 0)  
     console.log(total)
    const subTotal = Number.parseFloat(total).toFixed(2)
    var subTotal1 = Number.parseFloat(subTotal - (10/100 * subTotal)).toFixed(2)
      console.log("subTotal1")
    console.log(subTotal1)
    var CGST = Number.parseFloat(9/100 * subTotal1).toFixed(2)
    console.log("cgst")
    console.log(CGST)
    var SGST = Number.parseFloat(9/100 * subTotal1).toFixed(2)
    console.log("SGST")
    console.log(SGST)
    var totalAmt =  Number.parseFloat((+subTotal1) + (+CGST) + (+SGST)).toFixed(2)
    console.log("totalAmt")
    console.log(totalAmt)

    return(    
        <View>
        <View style={styles.row}>
            <Text style={styles.description}>Sub Total</Text>
            <Text style={styles.percentage}>    </Text>
            <Text style={styles.total}>{subTotal}</Text>
        </View>
          <View style={styles.row}>
            <Text style={styles.description}>Discount</Text>
            <Text style={styles.percentage}>10%</Text>
            <Text style={styles.total}>{10/100 * subTotal}</Text>
        </View>
          <View style={styles.row}>
            <Text style={styles.description}>Sub Total</Text>
            <Text style={styles.percentage}>    </Text>
            <Text style={styles.total}>{subTotal1}</Text>
         </View>
         <View style={styles.row}>
            <Text style={styles.description}>CGST</Text>
            <Text style={styles.percentage}>9%</Text>
            <Text style={styles.total}>{CGST}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.description}>SGST</Text>
            <Text style={styles.percentage}>9%</Text>
            <Text style={styles.total}>{SGST}</Text>
        </View>
          <View style={styles.row}>
            <Text style={styles.description}>TOTAL</Text>
            <Text style={styles.percentage}>    </Text>
            <Text style={styles.total}>{totalAmt}</Text>
        </View>
        </View>
    )
   
};
  
  export default InvoiceTableFooter