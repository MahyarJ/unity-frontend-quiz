import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";
import { HistoryContainer } from "./HistoryContainer";
import { historyTypes } from "./config";

describe("<App />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe("render()", () => {
    it("should renders the Box", () => {
      expect(wrapper.find({ "data-testid": "app-box" })).toHaveLength(1);
    });

    it("should renders two HistoryContainer", () => {
      expect(wrapper.find(HistoryContainer)).toHaveLength(historyTypes.length);
    });
  });
});
