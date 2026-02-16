import { useState } from "react";

export const Creator = () => {
  const [files, setFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    setFiles(selectedFiles);

    // Create preview URLs
    const previews = selectedFiles.map((file) =>
      URL.createObjectURL(file)
    );

    setPreviewUrls(previews);
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      alert("Please select files first");
      return;
    }

    const formData = new FormData();

    files.forEach((file) => {
      formData.append("media", file);
    });

    try {
      const response = await fetch("https://your-backend-url/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Upload success:", data);
      alert("Upload successful!");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed");
    }
  };

  return (
    <div className="creator-page">
      <h1>Upload Images & Videos</h1>

      <input
        type="file"
        accept="image/*,video/*"
        multiple
        onChange={handleFileChange}
      />

      <div className="preview-container">
        {previewUrls.map((url, index) => {
          const file = files[index];

          if (file.type.startsWith("image")) {
            return (
              <img
                key={index}
                src={url}
                alt="preview"
                width="200"
                style={{ margin: "10px" }}
              />
            );
          }

          if (file.type.startsWith("video")) {
            return (
              <video
                key={index}
                src={url}
                controls
                width="250"
                style={{ margin: "10px" }}
              />
            );
          }

          return null;
        })}
      </div>

      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};