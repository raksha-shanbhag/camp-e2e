import { useEffect, useState } from 'react';
import Page from '../templates/Page';
import CardDisplay from '../components/CardDisplay';
import CreateNewConfiguration from '../components/CreateNewConfiguration';
import { Button } from '@mui/material';

var defaultTests = [
  {
    name: "Raksha Teaksha writes these testsaksha writes these testsaksha writes these testsst",
    description: "Raksha writes these tests",
    productIdMapping: "{isisje3224jjdkji: APM_{isisje3224jjdkji: APM_{isisje3224jjdkji: APM_44}"
  }, 
  {
    name: "Raksha2 Test",
    description: "Raksha2 writes these tests",
    productIdMapping: "{isisje322455jdkji: APM_45}"
  }
]

defaultTests = [...defaultTests, ...defaultTests, ...defaultTests]

const HomePage = () => {
  // testConfig hook
  const [open, setOpen] = useState(false);
  const handleClose = () => {
      setOpen(false);
  }
  const handleOpen = () => {
      setOpen(true);
  }

  // testform hook 
  const [testForm, setTestForm] = useState();

  // testConfiguration hook
  const [testConfigurations, setTestConfigurations] = useState(defaultTests)

  const handleSaveConfiguration = () => {
    // an API call to create configuration
    // update hook with response
    setTestConfigurations((prevConfigs) => [...prevConfigs, testForm])
  }

  // button 
  const titleButton =  (
    <div className='app-body-header-buttons'>
        <Button className='app-body-create-new-config-button' onClick={handleOpen}>+ Create New Configuration</Button>
        <CreateNewConfiguration handleSave={handleSaveConfiguration} handleClose={handleClose} open={open}/>
    </div>
  )

  // body 
  const appBody = (
    <div className='app-body-grid-content'>
      {testConfigurations.map((testConfiguration, index) => (
        <CardDisplay 
          key={index} 
          data={testConfiguration}
          title={testConfiguration.name}
          buttonTitle={"Show Results"}
          link={`/testResults/${testConfiguration.name}`}
        />
      ))}
    </div>
  )

  // get test configuraions on mount
  useEffect(()=>{
    // do an api call to do this
    
  }, [])

  return (
    <Page 
        title = "Test Configurations"
        cards = {testConfigurations}
        titleButton = {titleButton}
        childrenComp = {appBody}
    />

  );
}

export default HomePage;
