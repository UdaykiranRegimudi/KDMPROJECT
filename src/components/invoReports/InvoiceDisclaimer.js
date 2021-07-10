import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   invoiceDisclaimer: {
       marginTop: 12,
       fontSize: 10,
       flexDirection: 'row',
       marginLeft: 5
   },
   invoiceNotes: {
        flexDirection: 'row',
        fontSize: 10
   },
   invoiceSignature:{
    marginTop: 5,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginRight: 5,
    marginLeft: 5
}
});


  const InvoiceDisclaimer = ({props, invData}) => (
   //<Fragment>
   
      <View wrap={false}>
            <View style={styles.invoiceDisclaimer}>
                <Text style={{width: '20%'}}>Amount in words: </Text>
                <Text style={{width: '30%'}}>-</Text>
            </View>    
      <View wrap={false}>
            <View style={styles.invoiceSignature}>
            <Text>For KDM ENGINEERS (INDIA) PVT. LTD.,</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 50}}>
            <Text style={{width: '70%'}}></Text>
            <Text style={{width: '30%'}}>AUTHORISED SIGNATORY</Text>
            </View>
      </View>
        
      <View style={{flexDirection: 'row', justifyContent: 'flex-end',textDecoration: 'underline', textTransform: 'uppercase', marginTop: 10}}> 
        <Text style={{width: '65%'}}></Text>
        <Text style={{width: '35%'}}>Our bank details</Text>
      </View>
      
      <View style={{flexDirection: 'row', marginTop: 5}}>
                <Text style={{width: '65%'}}>PAN CARD NO:</Text>
                <Text style={{width: '13%'}}>BANK NAME:</Text>
                <Text style={{width: '35%'}}>BANK OF INDIA</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 5}}>
                <Text style={{width: '65%'}}>AAECK9447L</Text>
                <Text style={{width: '13%'}}>Branch:</Text>
                <Text style={{width: '35%'}}>Dilshukhnagar Branch</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 5}}>
                <Text style={{width: '65%'}}>GSTIN: 36AAECK9447L1ZX</Text>
                <Text style={{width: '13%'}}>A/c No:</Text>
                <Text style={{width: '35%'}}>864330110000070</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 5}}>
                 <Text style={{width: '65%'}}>SAC Code: 998346</Text>
                <Text style={{width: '13%'}}>IFS Code:</Text>
                <Text style={{width: '35%'}}>BKID0008643</Text>
      </View>
      </View>      
    );
  
  export default InvoiceDisclaimer

