import React from 'react';
import { Page, Document, Image, StyleSheet, View, Text } from '@react-pdf/renderer';
import ReportNo from './ReportNo'
import ReportDisclaimer from './ReportDisclaimer'
import ReportSignature from './ReportSignature'
import TestConductedTable from './TestConductedTable'

import logo from '../../../src/kdmlogo.jpg'


const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 10,
        paddingTop: 10,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 80,
        lineHeight: 1.5,
        flexDirection: 'column',
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
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10
    }
  });
  
  const Report = ({report, props}) => (
                
            <Document>
                <Page style={styles.page} size="A4" wrap>
                    <Image style={styles.logo} src={logo} fixed/>
                    {console.log(report)}
                    {console.log("props")}
                    {console.log(props)}
                    <ReportNo report={report} props={props} />
                    <TestConductedTable props={props} />
                    <ReportDisclaimer />
                    <ReportSignature />
                    
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
  
  export default Report