import React, {useState, useCallback} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FileDropzone from './FileDropzone'
import Papa from 'papaparse';

const CreateNewConfiguration = (props) => {
  const { open, handleClose, handleSave} = props

  // form
  const emptyForm = {
    testName: '',
    description: '',
    productIdMapping: '',
    brandIdMapping: '',
    creditPolicyId: '',
    mensaFile: null
  }
  const [formData, setFormData] = useState(emptyForm);

  // errors
  const blankError = {
    testName: '',
    description: '',
    productIdMapping: '',
    brandIdMapping: '',
    creditPolicyId: '',
    mensaFile: ''
  }
  const [errors, setErrors] = useState(blankError);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setFormData({
      ...formData,
      mensaFile: file,
    });
  })

  const onDelete = () =>  {
    setFormData({
      ...formData,
      mensaFile: null,
    });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error when the user starts typing in the field
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    var csvData = []
    
    // validate Form Data and display errors
    const newErrors = {...blankError}
    if (!formData.testName.trim()) {
      newErrors.testName = 'ERROR: Test name is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'ERROR: Description is required';
    }
    if (!formData.productIdMapping.trim()) {
      newErrors.productIdMapping = 'ERROR: ProductId Mapping is required';
    }
    if (!formData.brandIdMapping.trim()) {
      newErrors.brandIdMapping = 'ERROR: BrandId Mapping is required';
    }
    if (!formData.creditPolicyId.trim()) {
      newErrors.creditPolicyId = 'ERROR: CreditPolicyID is required';
    }

    if (!formData.mensaFile) {
      newErrors.mensaFile = 'ERROR: Mensa File is required';
    }
    else {
      // parse and validate csv file
      Papa.parse(formData.mensaFile, {
        complete: (result) => {
          console.log('CSV Data:', result.data);    
          csvData = result.data

          // Check for csv file errors
          const error = ''
          if(error.length > 0) {
            newErrors.mensaFile = 'ERROR: ' + error
          }
        },
        header: true, // Set to true if CSV has a header row
      });
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // fill form
    const today = new Date().toISOString()
    const submitData = {
      ...formData,
      mensaFile: formData.file.name,
      data: csvData,
      dateCreated: today,
      lastUpdated: today,
    }
    console.log(submitData)
    handleSave()
  };

  // close the form
  const handleCloseForm = () => {
    setFormData(emptyForm)
    setErrors(blankError)
    handleClose()
  }

  // test configuration form
  const testConfigForm = (
    <form className='app-body-create-new-test-form' onSubmit={handleSubmit}>
      <div>
        <label>
          Test Name:
          <input
            type="text"
            name="testName"
            value={formData.testName}
            onChange={handleInputChange}
          />
        </label>
        {errors.testName && <div className='app-body-form-error'>{errors.testName}</div>}
      </div>
      <br />
      <div>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        {errors.description && <div className='app-body-form-error'>{errors.description}</div>}
      </div>
      <br />
      <div>
        <label>
          ProductId Mapping:
          <input
            type="text"
            name="productIdMapping"
            value={formData.productIdMapping}
            onChange={handleInputChange}
          />
        </label>
        {errors.description && <div className='app-body-form-error'>{errors.description}</div>}
      </div>
      <br />
      <div>
        <label>
          BrandId Mapping:
          <input
            type="text"
            name="brandIdMapping"
            value={formData.brandIdMapping}
            onChange={handleInputChange}
          />
        </label>
        {errors.brandIdMapping && <div className='app-body-form-error'>{errors.brandIdMapping}</div>}
      </div>
      <br />
      <div>
        <label>
          CreditPolicyId:
          <input
            type="text"
            name="creditPolicyId"
            value={formData.creditPolicyId}
            onChange={handleInputChange}
          />
        </label>
        {errors.creditPolicyId && <div className='app-body-form-error'>{errors.creditPolicyId}</div>}
      </div>
      <br />
      <div>
        <label className='app-body-file-drop'>
          Mensa File:
          <FileDropzone onDrop={onDrop} onDelete={onDelete} uploadedFile={formData.mensaFile} /> 
        </label>
        {errors.mensaFile && <div className='app-body-form-error'>{errors.mensaFile}</div>}
      </div>      
    </form>
  )

  return (
    <div>
      <Dialog
        open={open}
        scroll={'paper'}
        fullWidth = {true}
        maxWidth = {'sm'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" className='app-body-form-title'>
            Create new configuration
        </DialogTitle>
        <DialogContent dividers={true}>
           {testConfigForm}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm}>Cancel</Button>
          <Button className='' onClick={handleSubmit}>Save</Button>
        </DialogActions> 
      </Dialog> 
    </div>
  );
}

export default CreateNewConfiguration;