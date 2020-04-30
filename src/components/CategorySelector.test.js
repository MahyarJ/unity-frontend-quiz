import React from "react";
import { shallow } from "enzyme";
import { CategorySelector } from "./CategorySelector";

describe("<CategorySelector />", () => {
  let wrapper = shallow(<CategorySelector historyType="sometype" />);

  describe("render()", () => {
    it("renders two components handling category selection", () => {
      expect(
        wrapper.find({
          "data-testid": "category-selector",
        })
      ).toHaveLength(2);
    });
  });

  describe("props", () => {
    it("check if taking proper classname", () => {
      expect(wrapper.props().className).toBe("chipContainer");
    });
    it("have exactly two children", () => {
      expect(wrapper.props().children).toHaveLength(2);
    });
  });

  // describe("props", () => {
  //   it("check if taking classname", () => {
  //     expect(wrapper.props().historyType).toBe("sometype");
  //   });
  // });
});
