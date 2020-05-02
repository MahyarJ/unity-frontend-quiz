import React from "react";
import { shallow } from "enzyme";
import { ButtonContent } from "./ButtonContent";

describe("<ButtonContent />", () => {
  describe("render fetching state", () => {
    const wrapper = shallow(<ButtonContent loading={true} toLoad={2} />);
    it("shows the loading phrase while fetching data", () => {
      expect(wrapper.find({ "data-testid": "fetching" })).toHaveLength(1);
    });
  });

  describe("render no more date state", () => {
    const wrapper = shallow(<ButtonContent loading={false} toLoad={0} />);
    it("shows the loading phrase while fetching data", () => {
      expect(wrapper.find({ "data-testid": "all-fetched" })).toHaveLength(1);
    });
  });

  describe("renders ready for next fetch", () => {
    const wrapper = shallow(<ButtonContent loading={false} toLoad={4} />);
    it("shows the loading phrase while fetching data", () => {
      expect(wrapper.find({ "data-testid": "fetch-more" })).toHaveLength(1);
    });

    it("renders just one span inside as content", () => {
      expect(
        wrapper.find({ "data-testid": "fetch-more" }).find("span")
      ).toHaveLength(1);
    });

    it("shows the remaining count inside", () => {
      expect(
        wrapper.find({ "data-testid": "fetch-more" }).find("span").text()
      ).toEqual("Fetch More (4)");
    });
  });
});
