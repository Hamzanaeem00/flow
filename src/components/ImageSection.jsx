import { Avatar } from "antd";
import React from "react";
import face1 from "../assets/images/face1.jpg";
import face2 from "../assets/images/face2.jpg";
import face3 from "../assets/images/face3.jpg";
import mobile from "../assets/images/mobile.jpg";
import instagram from "../assets/images/instagram.jpeg";
import girl1 from "../assets/images/girl1.jpg";

const ImageSection = () => {
  return (
    <div>
      {/* Happy customer card */}
      <div className="happy-customer-card grid grid-cols-12 gap-4">
        <div className="child-1 col-span-6">
          <Avatar.Group>
            <Avatar src={face1} size={36} />
            <Avatar src={face2} size={36} />
            <Avatar src={face3} size={36} />
          </Avatar.Group>
          <h2 className="text-4xl xs:text-3xl font-bold my-1">150k +</h2>
          <h2 className="text-sm font-medium text-gray-800">Happy Customers</h2>
        </div>
        <div className="child-2 col-span-6"></div>
      </div>

      {/* images section */}
      <div className="grid grid-cols-12 w-[350px] xs:w-[300px]">
        <div className="col-span-6">
          <img src={mobile} className="image-circle" />
          <img src={instagram} className="image-circle" />
        </div>
        <img src={girl1} className="image-rectangle col-span-6" />
      </div>
    </div>
  );
};

export default ImageSection;