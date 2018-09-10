import React from "react";

export default function MainRight () {
  return (
    <div className="col-1-of-2">
      <div className="composition">
        {
          [1,2,3].map(e => renderPhoto(e))
        }
        {/* <img
          alt="Photo 1"
          className="composition__photo composition__photo--p1"
          src={require("../img/nat-1.jpg")}
        />

        <img
          alt="Photo 2"
          className="composition__photo composition__photo--p1"
          src={require("../img/nat-2.jpg")}
        />
        
        <img
          alt="Photo 3"
          className="composition__photo composition__photo--p1"
          src={require("../img/nat-3.jpg")}
        /> */}
      </div>
    </div>
  );
}

const renderPhoto = (num, large=true) => {
  const photo = `nat-${num}${large ? "-large" : ""}.jpg`;
  
  return (
    <img
      alt={`Photo ${num}`}
      className={`composition__photo composition__photo--p${num}`}
      key={photo}
      src={require(`../img/${photo}`)}
    />
  );
};
