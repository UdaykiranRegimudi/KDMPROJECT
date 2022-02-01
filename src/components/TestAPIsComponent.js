import React from 'react';
import { baseUrl } from '../config/baseUrl';
import { useMemo } from 'react'

import {PDFViewer} from '@react-pdf/renderer'
import { Page, Document, View, Text } from '@react-pdf/renderer'

const TestAPIs = (props) => {
    
    console.log("In TestAPIs Component entry");

    //sendEmail("Hello")


  return useMemo(
    () => (
      <PDFViewer key={Math.random()}>
        <Document>
          <Page size="A4">
            <View>
              <Text>This is a title</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    ),
    //[props],
  )
}


//Test Get Method. Button onClick. Execute related fetch with appropriate Url/Endpoint/Route
//Test Post Method
//Test XYZ

export const testBaseUrl = (anyObj) => {
    //fetch(baseUrl)
    fetch(baseUrl)
    .then(response => response.text())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    })
}

export const testBaseUrlGetSubmit = (anyObj) => {
    //fetch(baseUrl)
    fetch(baseUrl + '/submit')
    .then(response => response.text())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    })
}

export const testBaseUrlPostSubmit = (anyObj) => {
    //fetch(baseUrl)
    fetch(baseUrl + '/submit')
    .then(response => response.text())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    })
}

export const testBaseUrlJsonResponse = (anyObj) => {
    //fetch(baseUrl)
    fetch('https://api.github.com/users/sireelaks')
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    })
}

export const sendEmail = (anyObj) => {
    console.log("In sendEmail")
    console.log(anyObj)
    console.log('baseUrl')
    console.log(baseUrl)

    console.log("Calling fetch")

    //fetch(baseUrl)
    fetch(baseUrl + '/submit')
    .then(response => response.text())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    })
}

export default TestAPIs;