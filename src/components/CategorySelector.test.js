import React from "react";
import { shallow } from "enzyme";
import { CategorySelector } from "./CategorySelector";
import { historyTypes } from "./config";

describe("<CategorySelector />", () => {
  let wrapper = shallow(<CategorySelector historyType="users" />);

  // describe("render()", () => {

  describe("props", () => {
    it("check if taking proper classname", () => {
      expect(wrapper.props().className).toBe("chipContainer");
    });

    it("have exactly two children", () => {
      expect(wrapper.children()).toHaveLength(historyTypes.length);
    });
  });
});
