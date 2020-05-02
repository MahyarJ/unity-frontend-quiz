import React from "react";
import { shallow } from "enzyme";
import { HistoryContainer } from "./HistoryContainer";
import { HistoryGrid } from "./HistoryGrid";
import Button from "@material-ui/core/Button";
import { historyTypes } from "./config";

describe("<HistoryContainer />", () => {
  let wrapper;
  const firstCategoryFields = historyTypes[0].fields;
  const fetchData = jest.fn(() => {
    return { data: [] };
  });

  beforeEach(() => {
    wrapper = shallow(
      <HistoryContainer fields={firstCategoryFields} apiCall={fetchData} />
    );
  });

  describe("render()", () => {
    it("renders the HistoryGrid", () => {
      expect(wrapper.find(HistoryGrid)).toHaveLength(1);
    });

    it("renders the Button", () => {
      expect(wrapper.find(Button)).toHaveLength(1);
    });

    it("try to fetch data on Button click", () => {
      const fetchButton = wrapper.find(Button);
      fetchButton.simulate("click");
      expect(fetchData).toHaveBeenCalledTimes(1);
    });

    // it("should first-time fetch data", () => {
    //   expect(fetchData).toHaveBeenCalled();
    // });
  });
});
