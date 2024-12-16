import { Avatar } from "antd";
import React from "react";
import face1 from "../assets/images/face1.jpg";
import face2 from "../assets/images/face2.jpg";
import face3 from "../assets/images/face3.jpg";
import mobile from "../assets/images/mobile.jpg";
import instagram from "../assets/images/instagram.jpg";
import girl1 from "../assets/images/girl1.jpg";
import service from "../assets/images/serviceImg.png";


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
          <h2 className="text-4xl xs:text-2xl font-normal my-1">150k+ </h2>
          <h2 className="text-xs font-normal ">Happy Customers</h2>
        </div>
        <div className="child-2 col-span-6   relative">
          <img src={service} className="service-img absolute" alt="" />
        </div>
      </div>

      {/* images section */}
      <div className=" mt-2 grid grid-cols-12 w-[350px] xs:w-[300px]  ">
        <div className="col-span-6  ">
          <img src={mobile} className="image-circle" loading="lazy" />
          <img src={instagram} className="image-circle" loading="lazy" />
        </div>
        <img src={girl1} className="image-rectangle col-span-6" loading="lazy" />
      </div>
    </div>
  );
};

export default ImageSection;
