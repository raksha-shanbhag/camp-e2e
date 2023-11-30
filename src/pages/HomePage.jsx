import { useEffect, useState } from 'react';
import Page from '../templates/Page';
import TestConfiguration from '../components/TestConfiguration';
import CreateNewConfiguration from '../components/CreateNewConfiguration';

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
    // do an API call to create configuration
    // update hook
    setTestConfigurations((prevConfigs) => [...prevConfigs, testForm])
  }

  return (
    <Page 
        title = "Test Configurations"
        cards = {testConfigurations}
        titleButton = {(
            <div className='app-body-header-button'>
                <div className='app-body-button' onClick={handleOpen}>+ Create New Configuration</div>
                <CreateNewConfiguration handleSave={handleSaveConfiguration} handleClose={handleClose} open={open}/>
            </div>
        )}
        childrenComp = {
            testConfigurations.map((testConfiguration, index) => (
                <TestConfiguration key={index} testConfiguration={testConfiguration}/>
            ))
        }
    />

  );
}

export default HomePage;
