import React, { useEffect, useState } from "react";
import ImagesGroup from "./ImagesGroup";
import ActiveImage from "./ActiveImage";
import img1 from "../../../../assets/headerphotos/01.gif";
import img2 from "../../../../assets/headerphotos/02.jpg";
import img3 from "../../../../assets/headerphotos/03.jpg";
import img4 from "../../../../assets/headerphotos/04.gif";
import img5 from "../../../../assets/headerphotos/05.jpg";
import img6 from "../../../../assets/headerphotos/06.jpg";
import img7 from "../../../../assets/headerphotos/07.jpg";
import img8 from "../../../../assets/headerphotos/08.gif";
import img9 from "../../../../assets/headerphotos/09.jpg";

function ImagesAnimation() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const [index, setIndex] = useState(0);
  const [activePhoto, setActivePhoto] = useState(images[index]);

  useEffect(() => {
    setActivePhoto(images[index]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <div className="overflow-hidden">
      <ActiveImage activePhoto={activePhoto} />
      <ImagesGroup setIndex={setIndex} images={images} />
    </div>
  );
}

export default ImagesAnimation;