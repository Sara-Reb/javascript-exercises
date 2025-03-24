const getTheTitles = function (obj) {
  let titles = obj.reduce((prev, curr) => {
    prev.push(curr.title);
    return prev;
  }, []);
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
