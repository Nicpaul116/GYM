import React from "react";
import "./gallery.css";
import john from "../../Assets/womentrainer2.jpg";
import fitness from "../../Assets/exercise-4607682_1920.jpg";
import abs from "../../Assets/abs-1850926_1920.jpg";
import anastase from "../../Assets/anastase-maragos-4dlhin0ghOk-unsplash.jpg";
import pexels from "../../Assets/pexels-leon-ardho-1552242.jpg";
import photo from "../../Assets/photo-1605296867304-46d5465a13f1.jpeg";

const Gallery = () => {
  return (
    <div className="container_gallery-images" id="Gallery">
      <div className="img1">
        <img src={john} alt="#" />
      </div>
      <div className="img2">
        <img src={fitness} alt="#" />
      </div>
      <div className="img3">
        <img src={abs} alt="#" />
      </div>
      <div className="img4">
        <img src={anastase} alt="#" />
      </div>
      <div className="img5">
        <img src={pexels} alt="#" />
      </div>
      <div className="img6">
        <img src={photo} alt="#" />
      </div>
    </div>
  );
};

export default Gallery;
