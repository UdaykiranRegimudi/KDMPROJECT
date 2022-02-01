import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   reportSignature:{
       marginTop: 5,
       justifyContent: 'flex-end',
       flexDirection: 'row',
       marginRight: 5,
       marginLeft: 5
   }
  });


const ReportSignature = ({props}) => {
      console.log("signature to be given")

    // let assign;
    //             switch (props.order.labLocation) {
    //                 case "Hyd":
    //                     props.jobupdates.jobupdates.map(sign=>{
    //                         console.log(sign.assignto)
    //                         console.log(props.order.orderId)
    //                         console.log(sign.jobId)
    //                         console.log(sign.orderId)
    //                         console.log(sign.jobId.split('/')[0]+'/'+sign.jobId.split('/')[1])
    //                         let compare = sign.jobId.split('/')[0]+'/'+sign.jobId.split('/')[1]
    //                         if(sign.assignto === "srikanth.s@kdmengineers.com" && compare === props.order.orderId){
    //                             assign = "Sr. Engineer-SRIKANTH YADAV"
    //                         }
    //                         else if(sign.assignto ==="drbsrao@kdmengineers.com" && compare === props.order.orderId){
    //                             assign = "DR.B.SRINIVASA RAO"
    //                         }else{
    //                             assign ="DR.B.SRINIVASA RAO"
    //                         }
    //                     })
    //                     break;
    //                 case "Guntur":
    //                     assign = "K.LAXMAN Sir"
    //                     break;
    //                 case "Vizag":
    //                     assign = "SUBHASHINI mam"
    //                     break;
    //                 default:
    //                     assign ="Vikram"
    //                     break;
    //             }
//    <Fragment>
       return(<View wrap={false} style={{height: '110', borderColor: 'red', borderWidth: '1', marginTop: '20'}}>
        <View style={styles.reportSignature}>
            <Text>For KDM ENGINEERS (INDIA) PVT. LTD.,</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 50, marginLeft: 5}}>
            <Text style={{width: '70%'}}>Checked By</Text>
            <Text style={{width: '30%'}}>AUTHORISED SIGNATORY</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 5}}>
            <Text style={{width: '72%'}}></Text>
            {/* <Text style={{width: '28%'}}>{assign}</Text> */}
        </View>
        </View>)
    // </Fragment>
  };
  
  export default ReportSignature