import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FileDropzone from './FileDropzone'

const CreateNewConfiguration = (props) => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const card = (
//     <div>
//         <Dropzone />
//     </div>
//   )

  return (
    <div>
      <Dialog
        open={props.open}
        scroll={'paper'}
        fullWidth = {true}
        maxWidth = {'sm'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
            <h5>Create New Configuration</h5>
        </DialogTitle>
        <DialogContent dividers={true}>
           <FileDropzone /> 
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Close</Button>
        </DialogActions> 
      </Dialog> 
    </div>
  );
}

export default CreateNewConfiguration;