import { useState } from "react";

export const Creator = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }

    console.log("Uploading:", file);
  };

  return (
    <div className="creator-page">
      <h1>Upload File</h1>

      <input type="file" onChange={handleFileChange} />

      {file && <p>Selected file: {file.name}</p>}

      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};