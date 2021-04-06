import React from 'react';
import { Page, Document, Image, StyleSheet, View, Text } from '@react-pdf/renderer';
import InvoiceTitle from './InvoiceTitle'
//import BillTo from './BillTo'
//import InvoiceNo from './InvoiceNo'
//import InvoiceItemsTable from './InvoiceItemsTable'
//import InvoiceThankYouMsg from './InvoiceThankYouMsg'
import logo from '../../../src/kdmlogo.jpg'


const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft:60,
        paddingRight:60,
        lineHeight: 1.5,
        flexDirection: 'column',
    }, 
    logo: {
        top: 1,
        width: 350,
        height: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10
    }
  });
  
  const Invoice = ({invoice}) => (
            <Document>
                <Page size="A4" style={styles.page}>
                    <Image style={styles.logo} src={logo} />
                    <InvoiceTitle title='KDM Engineers PVT Ltd Invoice'/>
                    {/*<InvoiceNo invoice={invoice}/>
                    <BillTo invoice={invoice}/>
                    <InvoiceItemsTable invoice={invoice} />
                    <InvoiceThankYouMsg /> */}
                </Page>
                <Page size="A4" style={styles.page}>
                    <Image style={styles.logo} src={logo} />
                    <View>
                    <Text>Hello!! this is a invoice</Text>
                    </View>
                </Page>
            </Document>
        );
  
  export default Invoice