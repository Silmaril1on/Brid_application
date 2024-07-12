import React from "react";
import TextAnimation from "../../components/TextAnimation";
import presentationFileGeo from "../../assets/PresentationGeo.pdf";
import presentationFileEng from "../../assets/PresentationEng.pdf";

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
        <TextAnimation
          text="eng"
          className="mr-2"
          onClick={() => {
            downloadFile(presentationFileEng, "Brid-Presentation-Eng");
          }}
        ></TextAnimation>
        \
        <TextAnimation
          text="geo"
          onClick={() => {
            downloadFile(presentationFileGeo, "Brid-Presentation-Geo");
          }}
        ></TextAnimation>
      </div>
    </div>
  );
}

export default DownloadFile;
