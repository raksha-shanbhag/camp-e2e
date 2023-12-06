import React from 'react';
import {AppBar, Toolbar, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import gandalf from '../icons/gandalf.png'

const Page = (props) => {
  // template properties
  const {title, titleButton, childrenComp, backLink} = props

  return (
    <div className="app">
      <AppBar className= "app-title">
        <Toolbar disableGutters>
          <img src={gandalf} alt="gandalf.png"/>
          <Typography
            variant="h4"
          >
            CAMP-E2E
          </Typography>
        </Toolbar>
      </AppBar>
      <div className= "app-body">
        { backLink && 
          <Link to={backLink} style={{ textDecoration: 'none', paddingBottom: '5px'}}> 
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
