const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);

function formatDateMMDDYYYY(dateObj) {
  const formated = dateObj.toLocaleDateString('en-US');
  return `Formatted Date (MM/DD/YYYY): ${formated}`;
};

function formatDateLong(dateObj) {
  const longDate = dateObj.toLocaleDateString('en-US', {
  //weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
  return `Formatted Date (Month Day, Year): ${longDate}`;
};
