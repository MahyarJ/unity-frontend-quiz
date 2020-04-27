const sortRows = (unsorted, order) => {
  return unsorted.sort((a, b) => {
    if (order === "asc") {
      return a.timestamp - b.timestamp;
    } else {
      return b.timestamp - a.timestamp;
    }
  });
};

const reverse = order => {
  if (order === "asc") return "desc";
  else return "asc";
};

export {
  sortRows,
  reverse
}
