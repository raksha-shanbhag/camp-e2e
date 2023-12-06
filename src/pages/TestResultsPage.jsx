import React, { useEffect, useState } from 'react';
import Page from '../templates/Page';
import CardDisplay from '../components/CardDisplay';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';

const TestResultsKey = {
  APPROVED: "APPROVED",
  DECLINED: "DECLINED",
  IN_PROGRESS: "IN-PROGRESS"
}

const classMapper = {
  [TestResultsKey.APPROVED]: "app-card-display-title-orange",
  [TestResultsKey.DECLINED]: "app-card-display-title-purple",
  [TestResultsKey.IN_PROGRESS]: "app-card-display-title-pink"
}

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
      result: "IN-PROGRESS",
      turnDownReason: "Duplicate Application",
      originalDecision: "APPROVED"
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

  const section = (data, title) => {
    return (
      data.length > 0 &&
      <div className='app-body-all-test-result-section'>
        <h3>{title}</h3>
        <div className='app-body-grid-content'>
          {data.map((testResult, index) => (
            <CardDisplay 
              key={index} 
              data={testResult.result}
              title={testResult.name}
              buttonTitle={"Show test information and history"}
              link={`/testResults/${testId}/${testResult.name}`}
              colorClass={classMapper[testResult.result.result]}
            />
          ))}
        </div>
      </div>
    )
  }

  const pagebody = (
    <div className='app-body-all-test-results'>
      {section(
        testResults.filter((test)=> test.result.result === TestResultsKey.IN_PROGRESS), 
        `${TestResultsKey.IN_PROGRESS} Results`
      )}
      {section(
        testResults.filter((test)=> test.result.result === TestResultsKey.DECLINED), 
        `${TestResultsKey.DECLINED} Results`
      )}
      {section(
        testResults.filter((test)=> test.result.result === TestResultsKey.APPROVED), 
        `${TestResultsKey.APPROVED} Results`
      )}
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
