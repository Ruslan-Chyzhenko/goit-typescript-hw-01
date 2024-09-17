// Типізуйте функцію isWeekend яка приймає день тижня з enumDayOfWeek
// і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
    return true;
  }
  return false;
};

// type DayStatuses = Record<DayOfWeek, boolean>;

// const dayStatuses: DayStatuses = {
//   [DayOfWeek.Monday]: false,
//   [DayOfWeek.Tuesday]: false,
//   [DayOfWeek.Wednesday]: false,
//   [DayOfWeek.Thursday]: false,
//   [DayOfWeek.Friday]: false,
//   [DayOfWeek.Saturday]: true,
//   [DayOfWeek.Sunday]: true,
// };

// const isWeekend = (day: DayOfWeek): boolean => {
//   return dayStatuses[day];
// };

// console.log(isWeekend(DayOfWeek.Monday));
// console.log(isWeekend(DayOfWeek.Saturday));
