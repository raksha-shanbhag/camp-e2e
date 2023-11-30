// import { useState } from 'react';
// import TestConfiguration from './components/TestConfiguration';
// import CreateNewConfiguration from './components/CreateNewConfiguration';

// const defaultTests = [
//   {
//     name: "Raksha Test",
//     description: "Raksha writes these tests",
//     productIdMapping: "{isisje3224jjdkji: APM_44}"
//   }, 
//   {
//     name: "Raksha2 Test",
//     description: "Raksha2 writes these tests",
//     productIdMapping: "{isisje322455jdkji: APM_45}"
//   },
//   {
//     name: "Raksha3 Test",
//     description: "Raksha 3writes these tests",
//     productIdMapping: "{a44isje3224jjdkji: APM_46}"
//   },
//   {
//     name: "Raksha Test",
//     description: "Raksha writes these tests",
//     productIdMapping: "{isisje3224jjdkji: APM_44}"
//   }, 
//   {
//     name: "Raksha2 Test",
//     description: "Raksha2 writes these tests",
//     productIdMapping: "{isisje322455jdkji: APM_45}"
//   },
//   {
//     name: "Raksha3 Test",
//     description: "Raksha 3writes these tests",
//     productIdMapping: "{a44isje3224jjdkji: APM_46}"
//   }
// ]

// const App = () => {
//   const [open, setOpen] = useState(false);
//   const handleClose = () => {
//       setOpen(false);
//   }
  
//   const handleOpen = () => {
//       setOpen(true);
//   }

//   const changeTestConfigurations = () => {
//     setTestConfigurations()
//   }

//   const [testConfigurations, setTestConfigurations] = useState(defaultTests)

//   return (
//     <div className="app">
//       <div className= "app-title">
//         <h1>CAMP-E2E</h1>
//       </div>
//       <div className= "app-body">
//         <div className='app-body-header'>
//           <h1 className='app-body-title'>Test Configurations</h1>
//           <div className='app-body-header-button'>
//             <div className='app-body-button' onClick={handleOpen}>+ Create New Configuration</div>
//             <CreateNewConfiguration handleClose={handleClose} open={open}/>
//           </div>
//         </div>
//         <div className='app-body-test-configurations'>
//         {
//           testConfigurations.map((testConfiguration, index) => (
//               <TestConfiguration key={index} testConfiguration={testConfiguration}/>
//             )
//           )
//         }
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
