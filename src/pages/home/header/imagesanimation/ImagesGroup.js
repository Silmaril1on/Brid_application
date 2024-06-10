import React from "react";

function ImagesGroup({ setIndex, images }) {
  return (
    <div className="w-full h-full relative z-3 opacity-100 grid-cols-5 grid">
      <ImageList setIndex={setIndex} images={images} />
      <ImageList setIndex={setIndex} images={images} />
      <ImageList setIndex={setIndex} images={images} />
      <ImageList setIndex={setIndex} images={images} />
      <ImageList setIndex={setIndex} images={images} />
      <ImageList setIndex={setIndex} images={images} />
      <ImageList setIndex={setIndex} images={images} />
      <ImageList setIndex={setIndex} images={images} />
      <ImageList setIndex={setIndex} images={images} />
      <ImageList setIndex={setIndex} images={images} />
    </div>
  );
}

function ImageList({ images, setIndex }) {
  return (
    <div className="w-80 h-64 xl:grid grid-cols-3 grid-rows-3 opacity-0 hidden">
      {images.map((item, index) => {
        return (
          <div className="w-full h-24" key={index}>
            <img
              className="w-full h-full"
              onMouseEnter={() => setIndex(index)}
              src={item}
              alt={index}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ImagesGroup;
