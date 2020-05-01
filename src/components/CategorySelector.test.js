import React from "react";
import { shallow } from "enzyme";
import { CategorySelector } from "./CategorySelector";
import { historyTypes } from "./config";

describe("<CategorySelector />", () => {
  let wrapper = shallow(<CategorySelector historyType="users" />);

  describe("render", () => {
    it("check if taking proper classname", () => {
      expect(wrapper.props().className).toBe("chipContainer");
    });

    it("renders options equal to category count", () => {
      expect(wrapper.children()).toHaveLength(historyTypes.length);
    });
  });
});
