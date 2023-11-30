import { Children, useState } from 'react';

const Page = (props) => {
  // template properties
  const {title, titleButton, childrenComp} = props

  // card hooks
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  }
  const handleOpen = () => {
    setOpen(true);
  } 

  return (
    <div className="app">
      <div className= "app-title">
        <h1>CAMP-E2E</h1>
      </div>
      <div className= "app-body">
        <div className='app-body-header'>
          <h1 className='app-body-title'>{title}</h1>
          {titleButton}
        </div>
        <div className='app-body-content'>
          {childrenComp}
        </div>
      </div>
    </div>
  );
}

export default Page;
