const sortRows = (unsorted, order) => {
  return unsorted.slice().sort((a, b) => {
    if (order === "asc") {
      return a.timestamp - b.timestamp;
    } else {
      return b.timestamp - a.timestamp;
    }
  });
};

const reverse = (order) => {
  if (order === "asc") return "desc";
  else return "asc";
};

const flattenRows = (rows) => {
  return rows.map(({ id, timestamp, diff }) => {
    return {
      ...diff[0],
      id,
      timestamp,
      date: new Date(timestamp).toLocaleDateString("en-GB"),
    };
  });
};

export { sortRows, reverse, flattenRows };
