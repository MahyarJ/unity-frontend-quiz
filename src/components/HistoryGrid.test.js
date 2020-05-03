import React from "react";
import { shallow } from "enzyme";
import { HistoryGrid } from "./HistoryGrid";
import { historyTypes } from "./config";

let wrapper, wrapperWithoutDate;
const onSort = jest.fn();
const fields = historyTypes[0].fields;
const fieldsWithoutDate = fields.filter((field) => {
  return field != "Date";
});
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
  beforeEach(() => {
    wrapper = shallow(
      <HistoryGrid fields={fields} rows={rows} onSort={onSort} />
    );
    wrapperWithoutDate = shallow(
      <HistoryGrid fields={fieldsWithoutDate} rows={rows} onSort={onSort} />
    );
  });

  describe("render ()", () => {
    it("has exactly one children that is a table", () => {
      expect(wrapper.find({ "data-testid": "sticky-table" })).toHaveLength(1);
    });

    it("renders lines with the same count to the provided data", () => {
      expect(wrapper.find({ "data-testid": "table-row" })).toHaveLength(2);
    });

    it("renders sort button in case existance Date field", () => {
      expect(wrapper.find({ "data-testid": "sort-button" })).toHaveLength(1);
      expect(
        wrapperWithoutDate.find({ "data-testid": "sort-button" })
      ).toHaveLength(0);
    });
  });

  describe("click sort functionality", () => {
    it("triggers sort on sort button click", () => {
      const sortButton = wrapper.find({ "data-testid": "sort-button" });
      sortButton.simulate("click");
      expect(onSort).toHaveBeenCalledTimes(1);
    });
  });
});
