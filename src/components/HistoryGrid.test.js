import React from "react";
import { shallow } from "enzyme";
import { HistoryGrid } from "./HistoryGrid";

const fields = ["field1", "field2"];
const rows = [
  {
    id: "e28d290a-a2f2-48c2-9001-ff43884e271b",
    timestamp: new Date("2020/2/14").getTime(),
    diff: [{ field: "name", oldValue: "John", newValue: "Bruce" }],
  },
  {
    id: "8bd0166f-f0c6-48fd-9fcd-a17e76eb1e92",
    timestamp: new Date("2020/2/15").getTime(),
    diff: [{ field: "name", oldValue: "Bruce", newValue: "Nick" }],
  },
];

describe("<HistoryGrid />", () => {
  let wrapper = shallow(<HistoryGrid fields={fields} rows={rows} />);

  describe("props", () => {
    it("has exactly one children", () => {
      expect(wrapper.find({ "data-testid": "sticky-table" })).toHaveLength(1);
    });
  });

  describe("lines to show", () => {
    it("renders lines with the same count to the provided data", () => {
      expect(wrapper.find({ "data-testid": "table-row" })).toHaveLength(2);
    });
  });
});
