const splitDatetime = (object) => {
  const result = {};

  for (let key in object) {
    const [date, time] = object[key].split(" ");

    if (result[date]) {
      result[date].push(time);
    } else {
      result[date] = [time];
    }
  }

  return result;
};

export default splitDatetime;
