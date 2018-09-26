import React from "react";

import HotelView from "./hotelview";
import Sidebar from "./sidebar";

export default () => {
  return (
    <div className="content">
      <Sidebar />
      <HotelView />
    </div>
  );
};
