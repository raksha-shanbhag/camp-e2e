import React, { useEffect, useState } from 'react';
import Page from '../templates/Page';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import JsonTreeViewer from '../components/JsonTreeViewer';


const sampleResult = {
    testName: "CRI",
    name: "payload_1",
    payload: {
        key1: 'value1',
        key2: {
            subkey1: 'subvalue1',
            subkey2: 'subvalue2',
        },
        key3: ['item1', 'item2', 'item3'],
        key4: {
            name: "payload_3",
            payload: {},
            result: {
              result: "DECLINED",
              turnDownReason: "Duplicate Application",
              originalDecision: "APPROVED"
            }
        },
    },
    result: {
        result: "APPROVED",
        applicationId: 92949834840809,
        minimumSecurityFundingDeposit: 98,
        legit: true,
        originalDecision: "APPROVED"
    }
}

const TestResultByIdPage = () => {
  // fetch parameters
  const { testId, payloadId } = useParams();

  // test Results array hook
  const [testInfo, setTestInfo] = useState({})

  // get test info and results on mount
  useEffect(()=>{
    // do an api call to do this
    const result = sampleResult
    setTestInfo(result)
  }, [])

  const pagebody = (
    <div className='app-body-test-result-page'>
        <h3>Payload</h3>
        <div className='app-body-test-result-json-display'>
            <JsonTreeViewer data={sampleResult.payload} />
        </div>
    </div>
  )

  return (
    <Page 
        title={`${testInfo.testName} - ${payloadId} Results`}
        button={
            <Button className='app-button'>
                Re-Run Test
            </Button>
        }
        childrenComp = {pagebody}
        backLink={`/testResults/${testId}`}
    />   
  );
}

export default TestResultByIdPage;
