import { useState } from "react";

export const Creator = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    // Merge with existing files (optional)
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleRemove = (indexToRemove) => {
    setFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
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
      setFiles([]); // clear after upload
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
        {files.map((file, index) => {
          const previewUrl = URL.createObjectURL(file);

          return (
            <div
              key={index}
              style={{
                position: "relative",
                display: "inline-block",
                margin: "10px",
              }}
            >
              {/* Remove Button */}
              <button
                onClick={() => handleRemove(index)}
                style={{
                  position: "absolute",
                  top: 5,
                  right: 5,
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>

              {/* Preview */}
              {file.type.startsWith("image") ? (
                <img
                  src={previewUrl}
                  alt="preview"
                  width="200"
                />
              ) : (
                <video
                  src={previewUrl}
                  controls
                  width="250"
                />
              )}
            </div>
          );
        })}
      </div>

      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};