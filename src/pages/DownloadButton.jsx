import React from 'react';

const DownloadButton = ({ fileUrl, fileName }) => {
  const downloadFile = () => {
    fetch(fileUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
  };

  return (
    <button onClick={downloadFile}>Download CV</button>
  );
};

export default DownloadButton;
