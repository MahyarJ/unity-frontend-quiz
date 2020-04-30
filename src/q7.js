const responseToTimeseries = (response) => {
  // find the longest sequence
  const series = [];
  response.map(({
    data
  }) => {
    data.map((item) => {
      series.push({
        key: item[0],
        count: item[1]
      });
    });
  });

  // group combinations using key
  // Pass no.1 - Initiate result object
  let result = {};
  series.map(({
    key
  }) => {
    result[key] = {
      x: key,
      points: new Array(response.length).fill(0),
      total: 0
    };
  });

  // Pass no.2 - Fill up result object
  response.map(({
    data
  }, index) => {
    data.map((item) => {
      const key = item[0];
      const count = item[1];
      result[key].points[index] = count;
      result[key].total += count;
    });
  });

  return result;
};
