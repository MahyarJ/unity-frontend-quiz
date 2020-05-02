import React from "react";
import { shallow } from "enzyme";
import { CategorySelector } from "./CategorySelector";
import { historyTypes } from "./config";

const firstCategoryId = historyTypes[0].id;
const secondCategoryId = historyTypes[1].id;

describe("<CategorySelector />", () => {
  describe("render", () => {
    it("check if taking proper classname", () => {
      const wrapper = shallow(
        <CategorySelector historyType={firstCategoryId} />
      );
      expect(wrapper.props().className).toBe("chipContainer");
    });

    it("renders options equal to category count", () => {
      const wrapper = shallow(
        <CategorySelector historyType={firstCategoryId} />
      );
      expect(wrapper.children()).toHaveLength(historyTypes.length);
    });

    it("should call onSelect correctly", () => {
      const handleSelect = jest.fn();
      const wrapper = shallow(
        <CategorySelector
          historyType={firstCategoryId}
          onSelect={handleSelect}
        />
      );
      const typeSelector0 = wrapper.find(
        `[data-testid="category-selector-${firstCategoryId}"]`
      );
      typeSelector0.simulate("click");
      expect(handleSelect).toHaveBeenCalledTimes(1);
      expect(handleSelect).toHaveBeenCalledWith(firstCategoryId);

      const typeSelector1 = wrapper.find(
        `[data-testid="category-selector-${secondCategoryId}"]`
      );
      typeSelector1.simulate("click");
      expect(handleSelect).toHaveBeenCalledTimes(2);
      expect(handleSelect).toHaveBeenCalledWith(secondCategoryId);
    });
  });
});
