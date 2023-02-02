import React, { useState } from "react";
import '../styles/CreatePost.css'
import upload from '../assets/Upload-icon.svg'

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    setFiles(Array.from(e.dataTransfer.files));
  };

  const handleInputChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleClick = () => {
    document.querySelector('input[type="file"]').click();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="file-upload"
    >
      <img src={upload} alt="upload" className="upload" />
      <input
        type="file"
        accept="image/jpeg, image/jpg, image/png, video/mp4"
        onChange={handleInputChange}
        multiple
        style={{ display: "none" }}
      />

      <div className="file__upload">
      <p>
        {files.length ? `Uploading ${files.length} files` : "Drag and drop files or "} <span style={{ cursor: 'pointer', color: 'blue' }} onClick={handleClick}>browse</span>
      </p>
        <small>Supported formats JPEG, JPG, PNG, MP4</small>
      </div>
    </div>
  );
};

export default FileUpload;
