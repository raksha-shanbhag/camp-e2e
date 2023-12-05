import React, { useEffect, useState } from 'react';
import Page from '../templates/Page';
import CardDisplay from '../components/CardDisplay';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';


const defaultTestResults = [
  {
    name: "payload_1",
    payload: {},
    result: {
      result: "APPROVED",
      applicationId: 92949834840809,
      minimumSecurityFundingDeposit: 98,
      legit: true,
      originalDecision: "APPROVED"
    }
  }, 
  {
    name: "payload_2",
    payload: {},
    result: {
      result: "APPROVED",
      applicationId: 92949834840229,
      minimumSecurityFundingDeposit: 200,
      legit: true,
      originalDecision: "DECLINED"
    }
  },
  {
    name: "payload_3",
    payload: {},
    result: {
      result: "DECLINED",
      turnDownReason: "Duplicate Application",
      originalDecision: "APPROVED"
    }
  },
  {
    name: "payload_4",
    payload: {},
    result: {
      result: "IN-PROGRESS"
    }
  }
]

const sampleResult = {
  testName: "CRI",
  testResults: [...defaultTestResults]
}

const TestResultsPage = () => {
  // fetch parameters
  const { testId } = useParams();
  const [testName, setTestName] = useState('')

  // test Results array hook
  const [testResults, setTestResults] = useState([])

  // get test info and results on mount
  useEffect(()=>{
    // do an api call to do this
    const results = sampleResult
    setTestName(results.testName)
    setTestResults(results.testResults)
  }, [])

  const pagebody = (
    <div className='app-body-grid-content'>
      {testResults.map((testResult, index) => (
        <CardDisplay 
          key={index} 
          data={testResult.result}
          title={testResult.name}
          buttonTitle={"Show test information"}
          link={`/testResults/${testId}/${testResult.name}`}
        />
      ))}
    </div>
  )

  return (
    <Page 
        title={`${testName} Results`}
        button={
            <Button className='app-button'>
                Run Tests
            </Button>
        }
        childrenComp = {pagebody}
        backLink={`/`}
    />   
  );
}

export default TestResultsPage;
