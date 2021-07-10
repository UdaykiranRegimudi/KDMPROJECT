import React from 'react';
import { Page, Document, Image, StyleSheet, View, Text } from '@react-pdf/renderer';
import InvoiceNo from './InvoiceNo'
import InvoiceTable from './InvoiceTable'
import InvoiceDisclaimer from './InvoiceDisclaimer'

import logo from './kdmNonNabl.jpg'

const styles = StyleSheet.create({
    page: {
         fontFamily: 'Helvetica',
        fontSize: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 80,
        lineHeight: 1.5,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: '#000000',
    }, 
    pageNumbers: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        textAlign: 'center',
        marginTop: 20,
        color: 'purple'
  },
    pageFooter: {
        position: 'absolute',
        bottom: 5,
        left: 0,
        right: 0,
        textAlign: 'center',
        marginTop: 5,
        borderTopWidth: 1,
        borderTopColor: 'purple',
        marginRight: 10,
        marginLeft: 10
    },
    logo: {
        top: 1,
        width: 350,
        height: 50,
        align: 'left',
        marginTop: 10,
        marginLeft: 20,
        marginBottom: 10
    },
  });


  
  const Invoice = ({props, invData}) => (
            <Document>
                <Page style={styles.page} size="A4">
                    <Image style={styles.logo} src={logo} fixed/>
                    {console.log("props")}
                    {console.log(props)}
                    <InvoiceNo props={props} />
                    <InvoiceTable props={props} invData={invData}/>
                    <InvoiceDisclaimer props={props} invData={invData}/>
                    <View style={[styles.pageFooter, {height: 40}]} fixed>
                        <Text style={{marginTop: '10', color: 'purple'}}>D. No. 8-12-96/S/401, Sri Ramana Colony, Karmanghat, SaroorNagar(M), Hyderabad - 500 079</Text>
                        <Text style={{color: 'purple'}}>Cell: +91-9912806685, 9912915533, Email: contactkdmei@gmail.com, Website: www.kdmengineers.com</Text>
                    </View>
                    <Text style={styles.pageNumbers} render={({ pageNumber, totalPages }) => (
                            `${pageNumber} / ${totalPages}`
                              )} fixed />      
                </Page>
            </Document>
        );
  
  export default Invoice