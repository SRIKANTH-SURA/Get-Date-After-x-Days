var addDays = require("date-fns/addDays");

const dateAfterAddDays = (days) => {
  const newDate = addDays(new Date(2020, 7, 22), days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};

console.log(dateAfterAddDays(3));
module.exports = dateAfterAddDays;
