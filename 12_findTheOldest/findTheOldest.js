const findTheOldest = function (arr) {
  let arrAge = arr.reduce((prev, curr) => {
    if (
      age(prev.yearOfBirth, prev.yearOfDeath) >
      age(curr.yearOfBirth, curr.yearOfDeath)
    ) {
      return prev;
    } else {
      return curr;
    }
  });
  return arrAge;
};

function age(birth, death = new Date().getFullYear()) {
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
