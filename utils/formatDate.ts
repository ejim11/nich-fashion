const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDate(date: string) {
  if (!date) {
    return;
  }
  const currentDate = new Date(date);
  const dateInNumber = String(currentDate.getDate()).padStart(2, "0");
  const day = days[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return {
    dateInNumber,
    day,
    month,
    year,
  };
}

export default formatDate;
