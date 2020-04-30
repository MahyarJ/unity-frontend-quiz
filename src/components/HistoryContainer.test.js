import React from "react";
import { shallow } from "enzyme";
import { HistoryContainer } from "./HistoryContainer";
import { HistoryGrid } from "./HistoryGrid";
import Button from "@material-ui/core/Button";

describe("<HistoryContainer />", () => {
  let useEffect;
  let wrapper;
  const fields = ["Date", "User ID", "Old Name", "New Name"];

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");
    wrapper = shallow(<HistoryContainer historyType="users" fields={fields} />);
  });

  describe("render()", () => {
    it("renders the HistoryGrid", () => {
      expect(wrapper.find(HistoryGrid)).toHaveLength(1);
    });

    it("renders the Button", () => {
      expect(wrapper.find(Button)).toHaveLength(1);
    });

    it("renders exactly two children", () => {
      expect(wrapper.children()).toHaveLength(2);
    });
  });
});
