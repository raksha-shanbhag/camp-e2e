import { Children, useState } from 'react';
import {AppBar, Toolbar, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import gandalf from '../icons/gandalf.png'

const Page = (props) => {
  // template properties
  const {title, titleButton, childrenComp, backButton} = props

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
      <AppBar className= "app-title">
        <Toolbar disableGutters>
          <img src={gandalf} alt="gandalf.png"/>
          <Typography
            variant="h5"
          >
            CAMP-E2E
          </Typography>
        </Toolbar>
      </AppBar>
      <div className= "app-body">
        {backButton && 
          <Link to="/" style={{ textDecoration: 'none', paddingBottom: '5px'}}> 
            {"< Back"}
          </Link>
        }
        <div className='app-body-header'>
          <h1 className='app-body-header-title'>{title}</h1>
          {titleButton}
        </div>
        {childrenComp}
      </div>
    </div>
  );
}

export default Page;
