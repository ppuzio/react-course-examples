import React from "react";
import { mount } from "enzyme";
import App from "./App";

test("renders learn react link", () => {
  const wrapper = mount(<App />);
  console.log(wrapper);
  expect(wrapper.html()).toMatchSnapshot();
});

test("test", () => {
  const obj = { foo: 43 };
  expect(obj).toMatchSnapshot();
});
