import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaFileCsv, FaTimes } from 'react-icons/fa';

const MyDropzone = (props) => {
  const {onDrop, onDelete, uploadedFile} = props

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv']
    },
    maxFiles: 1,
    multiple: false,
  });

  return (
    <div>
      {uploadedFile ? (
        <div style={fileContainerStyles}>
          <FaFileCsv style={fileIconStyles} />
          <span>{uploadedFile.name}</span>
          <FaTimes style={deleteIconStyles} onClick={onDelete} />
        </div>
      ): (
        <div {...getRootProps()} style={dropzoneStyles}>
          <input {...getInputProps()} name="mensaFile" value={uploadedFile}/>
          <p>Drag & drop a CSV file here or click to select a file</p>
        </div>
      )}
    </div>
  );
};

const dropzoneStyles = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

const fileContainerStyles = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
};

const fileIconStyles = {
  fontSize: '24px',
  marginRight: '10px',
};

const deleteIconStyles = {
  fontSize: '20px',
  cursor: 'pointer',
  marginLeft: '10px',
};

export default MyDropzone;