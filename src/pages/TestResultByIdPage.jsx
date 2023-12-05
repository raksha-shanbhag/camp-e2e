import React, { useEffect, useState } from 'react';
import Page from '../templates/Page';
import CardDisplay from '../components/CardDisplay';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';


const sampleResult = {
    testName: "CRI",
    name: "payload_1",
    payload: {},
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
    <div className='app-body-grid-content'>
    </div>
  )

  return (
    <Page 
        title={`${testInfo.testName} - ${testInfo.name} Results`}
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
