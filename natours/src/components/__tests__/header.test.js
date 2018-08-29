import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Header from "../header";

it("has a header", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.text()).toContain("Some text...");
});
