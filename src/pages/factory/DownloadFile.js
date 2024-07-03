import React from "react";
import TextAnimation from "../../components/TextAnimation";
import presentationFileGeo from "../../assets/PresentationGeo.pdf";

function DownloadFile() {
  const downloadFile = (fileSrc, fileName) => {
    const link = document.createElement("a");
    link.href = fileSrc;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="flex flex-row space-x-3 center text-sm xl:text-base">
      <TextAnimation text="download presentation" className="text-green" />
      <div className="flex flex-row cursor-pointer hover:*:text-green space-x-2">
        <span
          className="mr-2"
          onClick={() => {
            downloadFile(presentationFileGeo, "Brid-Presentation-Eng");
          }}
        >
          eng
        </span>
        \
        <span
          onClick={() => {
            downloadFile(presentationFileGeo, "Brid-Presentation-Geo");
          }}
        >
          geo
        </span>
      </div>
    </div>
  );
}

export default DownloadFile;
