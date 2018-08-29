import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Header from "../header";

it("has a header", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find("img").length).toEqual(1);
});
