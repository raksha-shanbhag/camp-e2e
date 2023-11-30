import React, { useEffect, useState } from 'react';
import Page from '../templates/Page';
import { useParams } from 'react-router-dom';

const defaultTests = [
  {
    name: "Raksha Test",
    description: "Raksha writes these tests",
    productIdMapping: "{isisje3224jjdkji: APM_44}"
  }, 
  {
    name: "Raksha2 Test",
    description: "Raksha2 writes these tests",
    productIdMapping: "{isisje322455jdkji: APM_45}"
  },
  {
    name: "Raksha3 Test",
    description: "Raksha 3writes these tests",
    productIdMapping: "{a44isje3224jjdkji: APM_46}"
  },
  {
    name: "Raksha Test",
    description: "Raksha writes these tests",
    productIdMapping: "{isisje3224jjdkji: APM_44}"
  }, 
  {
    name: "Raksha2 Test",
    description: "Raksha2 writes these tests",
    productIdMapping: "{isisje322455jdkji: APM_45}"
  },
  {
    name: "Raksha3 Test",
    description: "Raksha 3writes these tests",
    productIdMapping: "{a44isje3224jjdkji: APM_46}"
  }
]

const TestResultsPage = () => {
  // fetch parameters
  const { test_id } = useParams();

  // page details hook
  const [testInfo, setTestInfo] = useState({
    name: "CRI Tests",
    results: [
        {
            name: "Payload1_CRI",
            applicationID: test_id,
            result: "IN-PROGRESS"
        },
        {
            name: "Payload2_CRI",
            applicationID: test_id,
            result: "Declined"
        },
        {
            name: "Payload3_CRI",
            applicationID: test_id,
            result: "Approved"
        }
    ]
  })

  // card hooks
  const [open, setOpen] = useState(false);
  const handleClose = () => {
      setOpen(false);
  }
  const handleOpen = () => {
      setOpen(true);
  }

  // test Results array hook
  const [testResults, setTestResults] = useState(defaultTests)

  // get test info and results on mount
  useEffect(()=>{
    // do an api call to do this
  }, 
  [])

  return (
    <Page 
        title={testInfo.name}
        button={
            <div className='app-button'>
                Run Tests
            </div>
        }
        childrenComp = {
            testResults.map((testResult, index) => (
                <h1>{testResult.name}</h1>
            ))
        }
    />   
  );
}

export default TestResultsPage;
