import React, { useEffect, useState } from 'react';
import Page from '../templates/Page';
import { useParams } from 'react-router-dom';

const TestResultsPage = () => {
  // fetch parameters
  const { test_id } = useParams();

  // page details hook
  const [testInfo, setTestInfo] = useState()

  // card hooks
  const [open, setOpen] = useState(false);
  const handleClose = () => {
      setOpen(false);
  }
  const handleOpen = () => {
      setOpen(true);
  }

  // test Results array hook
  const [testResults, setTestResults] = useState([])

  // get test info and results on mount
  useEffect(()=>{
    // do an api call to do this
  }, [])

  const pagebody = (
    <div>

    </div>
  )

  return (
    <Page 
        title={"Raksha"}
        button={
            <Button className='app-button'>
                Run Tests
            </Button>
        }
        childrenComp = {pagebody}
        backButton={true}
    />   
  );
}

export default TestResultsPage;
