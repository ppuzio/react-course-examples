import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

describe("<Header />", () => {
  it("renders a h1", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.length).toBe(1);
    expect(wrapper.name()).toBe("styled.h1");
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders a title when passed such a prop", () => {
    const wrapper = shallow(<Header title="Pokedeck" />);
    expect(wrapper.text()).toEqual("Test");
    expect(wrapper.html()).toMatchSnapshot();
  });
});
