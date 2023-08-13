import { DateTime } from './luxon.js';

const getOrdinal = (number) => {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const remainder = number % 100;
  return number + (suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0]);
};

const displayTime = (element) => {
  const now = DateTime.now(); // Invoke the function
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const month = months[now.month - 1]; // Months are zero-indexed
  const day = getOrdinal(now.day);
  const { year } = now;
  const formattedHours = now.hour % 12 || 12;
  const formattedMinutes = now.minute < 10 ? `0${now.minute}` : now.minute;
  const formattedSeconds = now.second < 10 ? `0${now.second}` : now.second;
  const ampm = now.hour >= 12 ? 'pm' : 'am';

  const timeString = `${month} ${day} ${year}, ${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
  document.querySelector(element).textContent = timeString;
};

export default displayTime;