import { sortRows, flattenRows } from "./utils";

const srcData = [
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

const destData = [
  {
    id: "8bd0166f-f0c6-48fd-9fcd-a17e76eb1e92",
    timestamp: new Date("2020/2/15").getTime(),
    diff: [{ field: "name", oldValue: "Bruce", newValue: "Nick" }],
  },
  {
    id: "e28d290a-a2f2-48c2-9001-ff43884e271b",
    timestamp: new Date("2020/2/14").getTime(),
    diff: [{ field: "name", oldValue: "John", newValue: "Bruce" }],
  },
];

const flattenSrcData = [
  {
    id: "e28d290a-a2f2-48c2-9001-ff43884e271b",
    timestamp: new Date("2020/2/14").getTime(),
    date: new Date(new Date("2020/2/14").getTime()).toLocaleDateString(),
    field: "name",
    oldValue: "John",
    newValue: "Bruce",
  },
  {
    id: "8bd0166f-f0c6-48fd-9fcd-a17e76eb1e92",
    timestamp: new Date("2020/2/15").getTime(),
    date: new Date(new Date("2020/2/15").getTime()).toLocaleDateString(),
    field: "name",
    oldValue: "Bruce",
    newValue: "Nick",
  },
];

describe("sorting data", () => {
  it("should take proper order on sort", () => {
    expect(sortRows(srcData, "desc")).toStrictEqual(destData);
    expect(sortRows(srcData, "asc")).toStrictEqual(srcData);
  });
});

describe("flatten data", () => {
  it("should take proper structure after flattening", () => {
    expect(flattenRows(srcData)).toStrictEqual(flattenSrcData);
  });
});
